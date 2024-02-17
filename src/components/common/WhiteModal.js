import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Header } from "@rneui/themed";

const WhiteModal = ({ isVisible, onClose, ChildComponent, title = "", icon = "chevron-back-outline", right = null }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <SafeAreaProvider>
                    <Header
                        backgroundColor="#FFF"
                        centerComponent={{
                            text: title,
                            style: { color: "#000", fontSize: 24, fontFamily: "KotoriRose-Bold", paddingBottom: 20 }
                        }}
                        containerStyle={{ width: "100%" }}
                        leftComponent={
                            <TouchableOpacity onPress={onClose}>
                                <Icon name={icon} size={32} />
                            </TouchableOpacity>
                        }
                        rightComponent={right}
                    />
                    <View style={styles.modalContent}>
                        {ChildComponent}
                    </View>
                </SafeAreaProvider>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
    },
    modalContent: {
        padding: 20,
        backgroundColor: "#fff",
        height: "90%",
    }
});

export default WhiteModal;