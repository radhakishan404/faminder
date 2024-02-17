import { Fragment } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { priorityColor } from "../helpers/constants"
import { TouchableOpacity } from "react-native-gesture-handler"
import sx from "../helpers/style"
import Icon from "react-native-vector-icons/Ionicons";
import { format } from "date-fns"
import { ShowToast } from "../helpers/utils"
import api from "../helpers/axios"

export const TaskRecords = ({ eventData, changeInitialState, setShowModal, refetch }) => {

    const handleTaskClick = (data) => {
        changeInitialState({ initialValues: data });
        setShowModal(true);
    }

    const handleTaskComplete = async (data) => {
        try {
            let res = await api.put("/events", { ...data, completed: "true" });

            ShowToast(res.message)
            if (res.success) {
                refetch()
            }
        } catch (error) {
            ShowToast(error?.message);
        }
    }

    return (
        <ScrollView>
            {
                eventData && eventData.length > 0
                    ?
                    eventData.map((obj, key) => {

                        return (
                            <Fragment key={key}>
                                <View style={[styles.priorityBox, { backgroundColor: `#${priorityColor[obj.title]}` }]}>
                                    <Text style={[sx.PrimaryFontRe, sx.font12, { color: priorityColor[obj.title] === 'High' ? "#fff" : "#000" }]}>{obj.title}</Text>
                                </View>
                                {
                                    obj.items && obj.items.map((item, index) => {
                                        const [hours, minutes] = item?.time.split(':');
                                        return (
                                            <TouchableOpacity onPress={() => handleTaskClick(item)} style={styles.singleTask} key={index}>
                                                <Text style={[sx.PrimaryFontRe, sx.font12, { width: "18%", color: "#656B81" }]}>{format(new Date(2000, 0, 1, hours, minutes), "hh:mm aa")}</Text>
                                                <Text style={[sx.PrimaryFontRe, sx.font12, { width: "75%", color: "#656B81" }]}>{item?.title}</Text>
                                                <TouchableOpacity onPress={() => handleTaskComplete(item)} disabled={item.completed} style={[{ width: 25, height: 25, alignSelf: 'center', borderRadius: 100, padding: 5 }, item.completed ? { backgroundColor: "#010c80" } : { borderColor: "#010c80", borderWidth: 1 }]}>
                                                    {
                                                        item.completed && (
                                                            <Icon name="checkmark-done-outline" size={15} color={"#fff"} />
                                                        )
                                                    }
                                                </TouchableOpacity>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </Fragment>
                        )
                    })
                    :
                    <Text style={[sx.PrimaryFontRe, sx.font14]}>No records found</Text>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    priorityBox: {
        width: "20%",
        padding: 5,
        marginVertical: 2,
        borderRadius: 8,
        alignItems: 'center'
    },
    singleTask: {
        display: "flex",
        justifyContent: "space-between",
        alignContent: 'center',
        flexDirection: "row",
        width: '100%',
        alignItems: "center",
        backgroundColor: "#EEEDF0",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 5
    }
});