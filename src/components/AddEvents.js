import { ActivityIndicator, Alert, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HeaderCommon } from "./common/HeaderCommon";
import { Formik } from "formik";
import { Fragment } from "react";
import CommonInput from "./common/CommonInput";
import * as yup from "yup";
import sx from "../helpers/style";
import DatePicker from "./common/DatePicker";
import { defaultInputTheme } from "../helpers/constants";
import DropdownComponent from "./common/DropdownComponent";
import { ShowToast } from "../helpers/utils";
import api from "../helpers/axios";
import { format } from "date-fns";

const timeValidationRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
const validateEditProfileForm = yup.object().shape({
    title: yup.string().required("Required"),
    description: yup.string(),
    type: yup.string().required("Required"),
    priority: yup.string().required("Required"),
    dueDate: yup.string().required("Required"),
    time: yup.string().required().matches(timeValidationRegex, 'Invalid time format'),
});

export const AddEvents = ({ navigate, show, close, initialValues, globalLoading, refetch }) => {

    const onFormSubmit = async (values) => {
        try {
            let res = null;
            if (values._id) {
                res = await api.put("/events", values);
            } else {
                res = await api.post("/events", values);
            }

            ShowToast(res.message)
            if (res.success) {
                refetch()
                close();
            }
        } catch (error) {
            ShowToast(error?.data?.message)
        }
    }

    const handleDelete = async () => {
        try {
            Alert.alert(
                'Confirmation',
                'Are you sure you want to perform this action?',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: async () => {
                            let res = await api.delete("/events", { params: { _id: initialValues._id } });

                            ShowToast(res.message)
                            if (res.success) {
                                refetch()
                                close();
                            }
                        },
                    },
                ],
                { cancelable: false }
            );
        } catch (error) {
            ShowToast(error?.data?.message)
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={show}
            onRequestClose={close}
        >
            <View style={styles.container}>
                <SafeAreaProvider>
                    <HeaderCommon title={"Add Event"} icon={"chevron-back-outline"} close={close} right={"trash-outline"} rightAction={handleDelete} />
                    <View style={styles.modalContent}>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={(values) => onFormSubmit(values)}
                            validationSchema={validateEditProfileForm}
                        >
                            {({
                                handleChange,
                                handleSubmit,
                                setFieldValue,
                                values,
                                errors,
                            }) => (
                                <Fragment>
                                    {console.log(errors, "errors")}
                                    <View style={styles.box}>
                                        <ScrollView>
                                            <CommonInput
                                                mode="flat"
                                                label="Title Event *"
                                                onChange={handleChange("title")}
                                                value={values?.title}
                                                inputStyle={styles.inputStyle}
                                                error={errors?.title && Boolean(errors?.title)}
                                                helperText={errors?.title}
                                            />

                                            <View style={{ position: "relative" }}>
                                                <View style={[sx.flex, sx.row, sx.justifySpaceBetween]}>
                                                    <View style={[{ width: "48%" }]}>
                                                        <DatePicker
                                                            mode="flat"
                                                            label="Date"
                                                            onChange={(val) => setFieldValue("dueDate", val)}
                                                            value={values?.dueDate ? format(new Date(values?.dueDate), "yyyy-MM-dd") : null}
                                                            inputStyle={[styles.inputStyle]}
                                                            error={errors?.dueDate && Boolean(errors?.dueDate)}
                                                            helperText={errors?.dueDate}
                                                            navigate={navigate}
                                                        />
                                                    </View>
                                                    <View style={[{ width: "48%" }]}>
                                                        <CommonInput
                                                            mode="flat"
                                                            label="Time (24 Hr)"
                                                            placeholder="00:00"
                                                            value={values?.time}
                                                            underlineColorAndroid={'rgba(0,0,0,0)'}
                                                            autoCapitalize="none" autoCorrect={false}
                                                            style={[styles.input, styles.inputStyle, { width: "100%" }]}
                                                            theme={defaultInputTheme}
                                                            onChangeText={handleChange("time")}
                                                            error={errors?.time && Boolean(errors?.time)}
                                                            helperText={errors?.time}
                                                        />
                                                    </View>
                                                </View>
                                            </View>

                                            <DropdownComponent
                                                selectedValue={values?.priority}
                                                onSelect={(val) => setFieldValue("priority", val)}
                                                options={[
                                                    { key: 1, value: "Low" },
                                                    { key: 2, value: "Medium" },
                                                    { key: 3, value: "High" }
                                                ]}
                                                label="Priority *"
                                                error={errors?.priority && Boolean(errors?.priority)}
                                                helperText={errors?.priority}
                                            />

                                            <DropdownComponent
                                                selectedValue={values?.type}
                                                onSelect={(val) => setFieldValue("type", val)}
                                                options={[
                                                    { key: 1, value: "Work" },
                                                    { key: 2, value: "Personal" },
                                                    { key: 3, value: "School" }
                                                ]}
                                                label="Type *"
                                                error={errors?.type && Boolean(errors?.type)}
                                                helperText={errors?.type}
                                            />

                                            <Text style={styles.descriptionText}>Description</Text>
                                            <View style={{ width: "100%", borderWidth: 1, marginTop: 10, borderRadius: 14 }}>
                                                <CommonInput
                                                    mode="flat"
                                                    underlineColor='rgba(0,0,0,0)'
                                                    activeUnderlineColor='rgba(0,0,0,0)'
                                                    onChange={handleChange("description")}
                                                    value={values?.description}
                                                    inputStyle={styles.inputStyle}
                                                    error={errors?.description && Boolean(errors?.description)}
                                                    helperText={errors?.description}
                                                    multiline={true}
                                                    numberOfLines={4}
                                                />
                                            </View>
                                        </ScrollView>
                                    </View>

                                    <TouchableOpacity style={styles.loginButton} onPress={handleSubmit} disabled={globalLoading}>
                                        {
                                            !globalLoading ?
                                                <Text style={styles.loginButtonText}>Save</Text> :
                                                <ActivityIndicator size="small" color="white" />
                                        }
                                    </TouchableOpacity>
                                </Fragment>
                            )}
                        </Formik>
                    </View>
                </SafeAreaProvider>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FBF9F2",
        width: "100%",
        height: "100%",
    },
    modalContent: {
        padding: 20,
        marginTop: 50,
        backgroundColor: "#fff",
        height: "100%",
        borderTopStartRadius: 40,
        borderTopRightRadius: 40,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
    inputStyle: {
        backgroundColor: "transparent",
        textAlign: "left",
        color: "#828892"
    },
    box: {
        borderRadius: 24,
        zIndex: 24,
        height: "70%",
        backgroundColor: "white",
    },
    loginButton: {
        width: '100%',
        backgroundColor: 'black',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "KotoriRose-Regular"
    },
    input: {
        marginVertical: 0,
        fontFamily: "Gilroy-Light",
        fontSize: 14
    },
    descriptionText: {
        marginLeft: 16, marginTop: 15, fontFamily: "Gilroy-Light",
        fontSize: 14,
    }
});
