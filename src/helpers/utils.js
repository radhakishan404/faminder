import { Platform, ToastAndroid, AlertIOS } from "react-native";

export const ShowToast = (msg) => {
    if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
        AlertIOS.alert(msg);
    }
}

export const getWeekArray = (startDate) => {
    const weekArray = [];
    const currentDate = new Date(startDate);
    const currentDayOfWeek = currentDate.getDay();

    // Move to the first day (Sunday) of the current week
    currentDate.setDate(currentDate.getDate() - currentDayOfWeek);

    for (let i = 0; i < 7; i++) {
        weekArray.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return weekArray;
};