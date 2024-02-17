import { StyleSheet, TouchableOpacity, View, ActivityIndicator, Text } from "react-native"
import sx from "../../helpers/style";
import { Fragment, useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import CommonInput from "../common/CommonInput";
import api from "../../helpers/axios";

const validateLoginForm = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export const LoginForm = ({ navigate, login, userData, loading, setLoading }) => {
    const initialValues = {
        email: "rk@gmail.com",
        password: "123456",
    };

    const onFormSubmit = async (values) => {
        try {
            setLoading(true);
            const login_response = await api.post("/auth/login", values);
            // console.log(login_response, "login_response");
            if (login_response?.success) {
                login(login_response.result);
            }
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => onFormSubmit(values)}
            validationSchema={validateLoginForm}
        >
            {({
                handleChange,
                handleSubmit,
                values,
                errors,
            }) => (
                <Fragment>
                    <View style={[sx.w100, sx.mt20]}>
                        <CommonInput
                            label="Email"
                            keyboardType="email-address"
                            onChange={handleChange("email")}
                            value={values?.email}
                            error={errors?.email && Boolean(errors?.email)}
                            helperText={errors?.email}
                            inputStyle={{ marginVertical: 5 }}
                        />
                        <CommonInput
                            label="Password"
                            secureTextEntry={true}
                            onChange={handleChange("password")}
                            value={values?.password}
                            error={errors?.password && Boolean(errors?.password)}
                            helperText={errors?.password}
                            inputStyle={{ marginVertical: 5 }}
                        />
                    </View>

                    <TouchableOpacity style={styles.loginButton} onPress={handleSubmit} disabled={loading}>
                        {
                            !loading ?
                                <Text style={styles.loginButtonText}>Log In</Text> :
                                <ActivityIndicator size="small" color="white" />
                        }
                    </TouchableOpacity>
                </Fragment>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    flexJustifyContainer: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: "space-between",
    },
    loginButton: {
        width: '100%',
        backgroundColor: '#010c80',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "KotoriRose-Regular"
    },
})