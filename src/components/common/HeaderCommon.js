import { useIsFocused } from "@react-navigation/native";
import { Header } from "@rneui/themed";
import { Fragment } from "react";
import { Platform, StatusBar, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const shadowStyle = Platform.select({
    ios: {
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },
    android: {
        elevation: 3,
    },
});

export const HeaderCommon = ({ icon, title, close, right, rightAction, centerComponent = null }) => {
    const isFocuseds = useIsFocused();
    return (
        <Fragment>
            {
                isFocuseds &&
                <StatusBar
                    barStyle={'dark-content'}
                    translucent
                    backgroundColor="#EEEDF0"
                />
            }
            <Header
                backgroundColor="#EEEDF0"
                centerComponent={centerComponent ? centerComponent : {
                    text: title,
                    style: { color: "#000", fontSize: 24, fontFamily: "KotoriRose-Bold", textAlign: "center", paddingBottom: 20, width: "100%" }
                }}
                containerStyle={{ width: "100%", borderBottomLeftRadius: 30, borderBottomRightRadius: 30, paddingHorizontal: 10, ...shadowStyle }}
                leftComponent={
                    <TouchableOpacity onPress={close}>
                        <Icon name={icon} size={32} />
                    </TouchableOpacity>
                }
                rightComponent={
                    right ?
                        <TouchableOpacity onPress={rightAction}>
                            <Icon name={right} size={32} />
                        </TouchableOpacity>
                        : null
                }
            />
        </Fragment>
    )
}