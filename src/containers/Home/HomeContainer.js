import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Agenda } from 'react-native-calendars';
import testIDs from '../../components/mocks/TestId';
import { format } from 'date-fns';
import api from '../../helpers/axios';
import { parseEventList } from '../../redux/events/eventParser';
import { AddEvents } from "../../components/AddEvents";
import FloatingButton from "../../components/common/FloatingButton";
import sx from '../../helpers/style';
import { LogoHeader } from "../../components/common/LogoHeader";

const HomeContainer = ({ navigate, logout, initialValues, changeInitialState }) => {
    const [items, setItems] = useState({});
    const screenWidth = Dimensions.get('window').width;
    const [selectedDate, setSelectedDate] = useState(format(new Date(), "yyyy-MM-dd"));

    const [showModal, setShowModal] = useState(false);

    const loadItems = async (day, timestamp = true) => {
        try {
            if (timestamp) {
                const currentDate = new Date(day.timestamp);
                setSelectedDate(format(currentDate, "yyyy-MM-dd"));
            }

            let res = await api.get("/events/list");
            if (res.success) {
                res = parseEventList(res.result, new Date(selectedDate));
                setItems(res);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const renderItem = (reservation) => {
        return (
            <TouchableOpacity
                testID={testIDs.agenda.ITEM}
                style={[styles.item]}
                onPress={() => handleTaskClick(reservation.item)}
            >
                <Text style={[sx.PrimaryFontRe, sx.font16]}>{reservation.name}</Text>
            </TouchableOpacity>
        );
    };

    const renderEmptyDate = () => {
        return (
            <View style={styles.emptyDate}>
                <Text style={[sx.PrimaryFontRe, sx.font12]}>This is empty date!</Text>
            </View>
        );
    };

    const rowHasChanged = (r1, r2) => {
        return r1.name !== r2.name;
    };

    const handleTaskClick = (data) => {
        changeInitialState({ initialValues: data });
        setShowModal(true);
    }

    return (
        <View style={[styles.container, { width: screenWidth }]} >
            <LogoHeader icon="" title="Faminder" close={() => logout()} right={"log-out-outline"} />
            <Agenda
                testID={testIDs.agenda.CONTAINER}
                items={items}
                loadItemsForMonth={loadItems}
                selected={selectedDate}
                renderItem={renderItem}
                renderEmptyDate={renderEmptyDate}
                rowHasChanged={rowHasChanged}
                showClosingKnob={true}
                refreshing={false}
                style={[sx.PrimaryFontRe]}
            />

            <AddEvents navigate={navigate} show={showModal} close={() => [changeInitialState({ initialValues: null }), setShowModal(false)]} initialValues={initialValues} refetch={() => loadItems(selectedDate, false)} />

            <FloatingButton onPress={() => setShowModal(true)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBF9F2",
        height: "100%"
    },
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    },
    customDay: {
        margin: 10,
        fontSize: 24,
        color: 'green'
    },
    dayItem: {
        marginLeft: 34
    }
});

export default HomeContainer;