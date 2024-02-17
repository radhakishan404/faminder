import React, { Fragment, useEffect, useRef, useState } from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    Text,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    StatusBar,
    ScrollView,
    FlatList,
} from "react-native";
import { LogoHeader } from "../../components/common/LogoHeader";
import sx from "../../helpers/style";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getWeekArray } from "../../helpers/utils";
import { format, formatISO, isSameDay, isToday, isYesterday } from "date-fns";
import api from "../../helpers/axios";
import { parseEventList } from "../../redux/events/eventParser";
import FloatingButton from "../../components/common/FloatingButton";
import { TaskRecords } from "../../components/TaskRecords";
import { AddEvents } from "../../components/AddEvents";
import DropdownComponent from "../../components/common/DropdownComponent";

const HomeContainer = ({ navigate, userData, authToken, pagination, isFocused, initialValues, changeInitialState }) => {
    const [isLoading, setIsLoading] = useState(true);
    const screenWidth = Dimensions.get('window').width;
    const [currentDate, setCurrentDate] = useState(formatISO(new Date()));
    const [currentStartDate, setCurrentStartDate] = useState(new Date());
    const [eventData, setEventData] = useState([]);
    const currentWeek = getWeekArray(currentStartDate);
    const [priorityFilter, setPriorityFilter] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [showFilter, setShowFilter] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const initializeApp = async () => {
        try {
            setIsLoading(true);
            let params = {
                ...pagination,
                dueDate: currentDate,
            }
            if (priorityFilter)
                params.priority = priorityFilter;
            if (typeFilter)
                params.type = typeFilter;

            let res = await api.get("/events/list", { params: params });
            if (res.success) {
                res = parseEventList(res.result);
                setEventData(res?.result || []);
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        initializeApp()
    }, [currentDate, typeFilter, priorityFilter])


    const getNextWeek = () => {
        setCurrentStartDate((prevStartDate) => {
            const nextWeekStartDate = new Date(prevStartDate);
            nextWeekStartDate.setDate(prevStartDate.getDate() + 7);
            return nextWeekStartDate;
        });
    };

    const getPreviousWeek = () => {
        setCurrentStartDate((prevStartDate) => {
            const previousWeekStartDate = new Date(prevStartDate);
            previousWeekStartDate.setDate(prevStartDate.getDate() - 7);
            return previousWeekStartDate;
        });
    };

    const renderCurrentWeek = ({ item }) => {
        return (
            <TouchableOpacity style={[styles.dateBox]} onPress={() => setCurrentDate(item)}>
                <Text style={[sx.PrimaryFontRe, sx.font12, isSameDay(item, currentDate) ? { color: "#010c80" } : { color: "#B7BADB" }]}>{format(new Date(item), "E").toString().toUpperCase()}</Text>
                <Text style={[sx.PrimaryFontRe, sx.font16, isSameDay(item, currentDate) ? { color: "#010c80" } : { color: "#B7BADB" }]}>{format(new Date(item), "dd")}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={[styles.container, { width: screenWidth }]} >
            <SafeAreaProvider>
                <LogoHeader icon="" title="Tamago" close="" />
                <View style={{ paddingVertical: 20, paddingHorizontal: 10, height: "90%" }}>
                    <View style={[{ width: "100%", paddingVertical: 10, display: "flex", flexDirection: "row", alignItems: "center" }]}>
                        <TouchableOpacity style={{ width: "5%" }} onPress={() => getPreviousWeek()}>
                            <Icon name="chevron-back-outline" size={18} />
                        </TouchableOpacity>
                        <View style={{ width: "90%" }}>
                            <FlatList
                                horizontal
                                data={currentWeek}
                                renderItem={renderCurrentWeek}
                                keyExtractor={(item) => item.toISOString()}
                            />
                        </View>
                        <TouchableOpacity style={{ width: "5%" }} onPress={() => getNextWeek()}>
                            <Icon name="chevron-forward-outline" size={18} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.userBox}>
                        <View style={[sx.flex, sx.row, sx.justifySpaceBetween]}>
                            <Text style={[sx.PrimaryFontBold, { fontSize: 25, color: "#656B81" }]}>Hi {userData?.name}!</Text>
                            <TouchableOpacity onPress={() => setShowFilter(!showFilter)}>
                                <Icon name="filter" size={25} color={"#010c80"} />
                            </TouchableOpacity>
                        </View>
                        <Text style={[sx.SecFontRe, sx.font12]}>Here's the list of your {isToday(currentDate) ? "today" : isYesterday(currentDate) ? "yesterday" : `${format(currentDate, "dd MMM")}`} tasks</Text>
                        {
                            showFilter && (
                                <View style={styles.filterBox}>
                                    <View style={{ width: "48%" }}>
                                        <DropdownComponent
                                            selectedValue={""}
                                            onSelect={(val) => setPriorityFilter(val === "All" ? null : val)}
                                            options={[
                                                { key: 1, value: "All" },
                                                { key: 1, value: "Low" },
                                                { key: 2, value: "Medium" },
                                                { key: 3, value: "High" }
                                            ]}
                                            label="Priority *"
                                        />
                                    </View>
                                    <View style={{ width: "48%" }}>
                                        <DropdownComponent
                                            selectedValue={""}
                                            onSelect={(val) => setTypeFilter(val === "All" ? null : val)}
                                            options={[
                                                { key: 1, value: "All" },
                                                { key: 1, value: "Work" },
                                                { key: 2, value: "Personal" },
                                                { key: 3, value: "School" }
                                            ]}
                                            label="Type *"
                                        />
                                    </View>
                                </View>
                            )
                        }
                    </View>

                    {
                        isLoading
                            ?
                            <View style={styles.contentContainer}>
                                <ActivityIndicator size={"medium"} color={"black"} />
                            </View>
                            :
                            <TaskRecords eventData={eventData} changeInitialState={changeInitialState} setShowModal={setShowModal} refetch={initializeApp} />
                    }
                </View>
            </SafeAreaProvider>

            <AddEvents navigate={navigate} show={showModal} close={() => [changeInitialState({ initialValues: null }), setShowModal(false)]} initialValues={initialValues} refetch={initializeApp} />

            <FloatingButton onPress={() => setShowModal(true)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBF9F2",
        height: "100%"
    },
    contentContainer: {
        height: "88%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 40
    },
    dateBox: {
        marginHorizontal: 4,
        padding: 10,
        backgroundColor: "#EEEDF0",
        borderRadius: 10,
        alignItems: 'center',
    },
    userBox: {
        paddingHorizontal: 5,
        paddingVertical: 20,
    },
    filterBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 5,
    }
});

export default HomeContainer;