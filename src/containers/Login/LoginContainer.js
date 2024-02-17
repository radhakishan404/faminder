import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Dimensions,
} from "react-native";
import CommonButton from "../../components/common/CommonButton";
import sx from "../../helpers/style";
import { BackgroundCommon } from "../../components/common/BackgroundCommon";
import { Logo } from "../../components/common/Logo";
import { LoginForm } from "../../components/forms/LoginForm";


const LoginContainer = ({ navigate, globalLoading, setGlobalLoading, login, userData }) => {
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={[styles.loginContainer, { width: screenWidth }]} >
            <BackgroundCommon />
            <Logo />

            <View style={styles.loginStart}>
                <CommonButton
                    buttonStyle={sx.relative}
                    textStyle={[sx.PrimaryFontBold, sx.pl5, sx.font16, { zIndex: 1 }]}
                    label={"Register"}
                    onPress={() => navigate.navigate("Register")}
                />
                <CommonButton
                    buttonStyle={sx.relative}
                    textStyle={[sx.PrimaryFontBold, sx.pl5, sx.font16, { zIndex: 1 }]}
                    label={"Login"}
                    extra={<View style={styles.highlightColor}></View>}
                />
            </View>

            <LoginForm navigate={navigate} userData={userData} login={login} loading={globalLoading?.login || false} setLoading={(val) => setGlobalLoading({ login: val })} />
        </View>
    );
};

const styles = StyleSheet.create({
    loginContainer: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        fontFamily: "KotoriRose-Regular"
    },
    login1Child: {
        top: 541,
        width: 740,
        height: 717,
        left: -300,
        position: "absolute",
    },
    login1Item: {
        left: 139,
        width: 483,
        height: 477,
        top: -80,
        position: "absolute",
    },
    loginStart: {
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
        left: 3,
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
    termsDirection: {
        flexDirection: 'row'
    }
});

export default LoginContainer;