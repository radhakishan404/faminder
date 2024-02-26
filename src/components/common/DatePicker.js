import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import CommonInput from "./CommonInput";
import { format, parseISO } from "date-fns";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DatePicker = (props) => {
    const [show, setShow] = React.useState(false);

    const handleConfirm = (date) => {
        props.onChange(date);
        setShow(false)
    }

    return (
        <View>
            <TouchableOpacity onPress={() => setShow(true)}>
                <View pointerEvents="none">
                    <CommonInput
                        {...props}
                        value={props.type === "time" && props.value ? format(new Date(props.value), "hh:mm a") : props.value}
                        rightIcon="chevron-right"
                        readOnly
                    />
                </View>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={show}
                date={props.value ? new Date(props.value) : new Date()}
                mode={props.type}
                onConfirm={handleConfirm}
                onCancel={() => setShow(false)}
            />

        </View>
    )
}

export default DatePicker;