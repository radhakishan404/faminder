import React from "react";
import {
    StyleSheet,
    View,
    Dimensions,
} from "react-native";
import CommonButton from "../../components/common/CommonButton";
import sx from "../../helpers/style";
import { BackgroundCommon } from "../../components/common/BackgroundCommon";
import { Logo } from "../../components/common/Logo";
import { RegisterForm } from "../../components/forms/RegisterForm";


const RegisterContainer = ({ navigate, isAuth, globalLoading, setGlobalLoading }) => {
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={[styles.registerContainer, { width: screenWidth }]} >
            <BackgroundCommon />
            <Logo />

            <View style={styles.registerStart}>
                <CommonButton
                    buttonStyle={sx.relative}
                    textStyle={[sx.PrimaryFontBold, sx.pl5, sx.font16, { zIndex: 1 }]}
                    label={"Register"}
                    extra={<View style={[styles.highlightColor, { width: 65 }]}></View>}
                />
                <CommonButton
                    buttonStyle={sx.relative}
                    textStyle={[sx.PrimaryFontBold, sx.pl5, sx.font16, { zIndex: 1 }]}
                    label={"Login"}
                    onPress={() => navigate.goBack()}
                />
            </View>

            <RegisterForm navigate={navigate} isAuth={isAuth} loading={globalLoading} setLoading={(val) => setGlobalLoading(val)} />

        </View >
    );
};

const styles = StyleSheet.create({
    registerContainer: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        fontFamily: "KotoriRose-Regular"
    },
    registerStart: {
        paddingTop: 10,
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: "space-evenly"
    },
    highlightColor: {
        backgroundColor: "#8dbdff",
        width: 50,
        height: 8,
        position: "absolute",
        left: 0,
        bottom: 0
    },
});

export default RegisterContainer;