import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity
} from "react-native";
import CommonButton from "../../components/common/CommonButton";
import sx from "../../helpers/style";
import { BackgroundCommon } from "../../components/common/BackgroundCommon";
import { Logo } from "../../components/common/Logo";
import { RegisterForm } from "../../components/forms/RegisterForm";


const RegisterContainer = ({ navigate, setAuthData, isAuth, globalLoading, setGlobalLoading }) => {
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
    logo: {
        width: 90,
        height: 80,
        resizeMode: 'contain',
    },
    inputContainer: {
        width: '100%',
        marginTop: 20,
    },
    flexJustifyContainer: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: "space-between",
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 20,
    },
    checkboxStyle: {
        backgroundColor: "#74BD84",
        borderWidth: 1,
        borderColor: "gray"
    },
    registerButton: {
        width: '100%',
        backgroundColor: 'black',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    registerButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "KotoriRose-Regular"
    },
    termsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    termsText: {
        color: "#000",
        textAlign: "center",
        fontFamily: "KotoriRose-Regular",
        fontSize: 14,
        fontWeight: 700,
    },
    termsLink: {
        fontSize: 14,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default RegisterContainer;