import { useIsFocused } from "@react-navigation/native";
import { Header, Image } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import { Fragment } from "react";
import { Platform, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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

export const LogoHeader = ({ icon, close, right }) => {

    const isFocuseds = useIsFocused();
    return (
        <Fragment>
            {
                isFocuseds &&
                <StatusBar
                    barStyle={'dark-content'}
                    translucent
                    backgroundColor="#FBF9F2"
                />
            }
            <Header
                backgroundColor="#FBF9F2"
                centerComponent={<Image source={require('../../../assets/logoname.png')} style={{ width: 100, height: 40, resizeMode: 'contain' }} />}
                containerStyle={{ width: "100%", borderBottomLeftRadius: 30, borderBottomRightRadius: 30, ...shadowStyle, zIndex: 1, }}
                leftComponent={
                    icon ?
                        <TouchableOpacity onPress={close}>
                            <Icon name={icon} size={32} />
                        </TouchableOpacity>
                        : null
                }
                rightComponent={
                    right ?
                        <TouchableOpacity onPress={close}>
                            <Icon name={right} size={32} />
                        </TouchableOpacity>
                        : null
                }
            />
        </Fragment>
    )
}