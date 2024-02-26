import { StyleSheet, TouchableOpacity, View, Text, ActivityIndicator } from "react-native"
import sx from "../../helpers/style";
import { Fragment } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import CommonInput from "../common/CommonInput";
import api from "../../helpers/axios";
import { ShowToast } from "../../helpers/utils";


const validateForm = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export const RegisterForm = ({ navigate, loading, setLoading }) => {
    const initialValues = {
        name: "",
        email: "",
        password: "",
    };

    const onFormSubmit = async (values) => {
        try {
            setLoading(true);
            const reg_res = await api.post("/auth/register", values);
            if(reg_res && reg_res.success) {
                ShowToast("Registration complete please login now.")
            }
            setLoading(false);
            navigate.goBack()
        } catch (error) {
            console.log(error)
            setLoading(false);
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => onFormSubmit(values)}
            validationSchema={validateForm}
        >
            {({
                handleChange,
                handleSubmit,
                values,
                errors,
            }) => (
                <Fragment>
                    <View style={[sx.w100, sx.mt20, sx.mb20]}>
                        <CommonInput
                            label="Name"
                            onChange={handleChange("name")}
                            value={values?.name}
                            error={errors?.name && Boolean(errors?.name)}
                            helperText={errors?.name}
                        />
                        <CommonInput
                            label="Email"
                            keyboardType="email-address"
                            onChange={handleChange("email")}
                            value={values?.email}
                            error={errors?.email && Boolean(errors?.email)}
                            helperText={errors?.email}
                        />
                        <CommonInput
                            label="Password"
                            secureTextEntry={true}
                            onChange={handleChange("password")}
                            value={values?.password}
                            error={errors?.password && Boolean(errors?.password)}
                            helperText={errors?.password}
                        />
                    </View>

                    <TouchableOpacity style={styles.loginButton} onPress={handleSubmit} disabled={loading}>
                        {
                            !loading ?
                                <Text style={styles.loginButtonText}>Register</Text> :
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
        marginBottom: 20,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "KotoriRose-Regular"
    },
})