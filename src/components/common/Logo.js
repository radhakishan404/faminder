import { Image } from "@rneui/themed"
import { Fragment } from "react"
import { StyleSheet } from "react-native";

export const Logo = () => {
    return (
        <Fragment>
            <Image source={require('../../../assets/logo.png')} style={styles.logo} />
            {/* <Image source={require('../../../assets/logoname.png')} style={{ width: 100, height: 40, resizeMode: 'contain' }} /> */}
        </Fragment>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 90,
        height: 80,
        resizeMode: 'contain',
    },
});