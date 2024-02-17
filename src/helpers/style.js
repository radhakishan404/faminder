import { StyleSheet } from "react-native";

const sx = StyleSheet.create({
    relative: {
        position: "relative"
    },
    w100: {
        width: "100%"
    },
    w60:{
        width: "60%"

    },
    // font
    PrimaryFontBold: {
        fontFamily: "KotoriRose-Bold"
    },
    PrimaryFontRe: {
        fontFamily: "KotoriRose-Regular"
    },
    SecFontBold: {
        fontFamily: "Gilroy-ExtraBold"
    },
    SecFontRe: {
        fontFamily: "Gilroy-Light"
    },
    // padding here
    pt5: {
        paddingTop: 5
    },
    pb5: {
        paddingBottom: 5
    },
    pt10: {
        paddingTop: 10
    },
    pl5: {
        paddingLeft: 5
    },
    // font here
    font10: {
        fontSize: 10
    },
    font12: {
        fontSize: 12
    },
    font14: {
        fontSize: 14
    },
    font16: {
        fontSize: 16
    },
    font18: {
        fontSize: 18
    },
    // margin here
    mt20: {
        marginTop: 20
    },
    mb20: {
        marginBottom: 20
    },
    // flex here
    flex: {
        display: "flex",
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    gap2: { gap: 2 },
    gap4: { gap: 4 },
    alignCenter: {
        alignItems: 'center'
    },
    justifySpaceBetween: {
        justifyContent: "space-between"
    },
    justifySpacecontent: {
        justifyContent: "flex-start"
    },
    centerView: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    shadow: {
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 3,
    },
    shadowBottom: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: "#E8E7E7"
    },
    link: {
        textAlign: "center",
        color: "#4091EE",
        fontSize: 14,
        textDecorationLine: 'underline',
    },
    inputStyle: {
        backgroundColor: "transparent",
        textAlign: "left",
    },
    theme: {
        colors: { primary: '#626262', accent: "#626262", placeholder: "#B6B6B6", error: "#FE807F", underlineColor: 'transparent' },
        roundness: 10,
        fonts: {
            medium: { fontFamily: "Gilroy-Light" },
            bodyLarge: { fontFamily: "Gilroy-Light" }
        }
    },
    blackButton: {
        width: '100%',
        backgroundColor: 'black',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        padding:20
    },
    blackButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "KotoriRose-Regular",
    },
    IconStyle: { width: 49, height: 46, backgroundColor: "#fff", borderRadius: 50 },
    modalAction: {
        marginHorizontal: 20,
        marginBottom: 10,
        backgroundColor: 'black',
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
    },
})

export default sx;