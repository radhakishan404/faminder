import React, { useState } from "react";
import { Fragment } from "react"
import { Image, StyleSheet } from "react-native";

export const BackgroundCommon = () => {
    return (
        <Fragment>
            <Image
                style={[styles.ellipseSecond]}
                contentFit="cover"
                source={require("../../../assets/ellipse-2.png")}
            />
            <Image
                style={styles.ellipseFirst}
                contentFit="cover"
                source={require("../../../assets/ellipse-1.png")}
            />
        </Fragment>
    )
}

const styles = StyleSheet.create({
    ellipseSecond: {
        top: 541,
        width: 740,
        height: 717,
        left: -300,
        position: "absolute",
    },
    ellipseFirst: {
        left: 139,
        width: 483,
        height: 477,
        top: -80,
        position: "absolute",
    },
});