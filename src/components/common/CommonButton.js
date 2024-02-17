import { Text } from "@rneui/themed";
import { TouchableOpacity } from "react-native"

const CommonButton = ({ label, buttonStyle, textStyle, onPress, extra = null }) => {
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{label}</Text>
            {extra}
        </TouchableOpacity>
    )
}

export default CommonButton;