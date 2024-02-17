import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CommonInput from "./CommonInput";
import WhiteModal from "./WhiteModal";
import sx from "../../helpers/style";
import NextTextInput from 'react-native-next-input'
import { HelperText } from "react-native-paper";
import { isAfter, sub } from "date-fns";
import { defaultInputTheme } from "../../helpers/constants";

const SelectDate = ({ onClose, setValue, value, label }) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [day, setDay] = React.useState([]);
    const [month, setMonth] = React.useState([]);
    const [year, setYear] = React.useState([]);
    const [date, setDate] = React.useState();

    React.useEffect(() => {
        if (value) {
            const dateVal = new Date(value);

            if (!isNaN(dateVal)) {
                setDay((dateVal.getDate() < 10 ? "0" + dateVal.getDate() : dateVal.getDate()).toString().split(""))
                setMonth(((dateVal.getMonth() + 1) < 10 ? "0" + (dateVal.getMonth() + 1) : (dateVal.getMonth() + 1)).toString().split(""))
                setYear((dateVal.getFullYear() < 10 ? "0" + dateVal.getFullYear() : dateVal.getFullYear()).toString().split(""))
                setDate(value);
            }

            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    }, [value])

    React.useEffect(() => {
        if (day.length > 0 && month.length > 0 && year.length > 3) {
            let properDate = year.join("") + "-" + month.join("") + "-" + day.join("")
            if (label === "Date") {
                if (properDate && isAfter(new Date(properDate), sub(new Date(), {days: 1}))) {
                    setDate(properDate);
                } else {
                    setDate(null);
                    setError("Please enter valid future date only.")
                }
            } else if (properDate && isAfter(new Date(properDate)), sub(new Date(), {days: 1})) {
                setDate(properDate);
            } else {
                setDate(null);
                setError("Please enter valid future date only.")
            }
        }
    }, [day, month, year])

    const handleDay = (combinedValueArray, currentValue, refForTheCurrentValue) => {
        let joinedVal = parseInt(combinedValueArray.join(""));
        if (joinedVal <= 0 || joinedVal > 31)
            setError("Enter a valid day");
        else
            setError(null);

        setDay(combinedValueArray)
    }
    const handleMonth = (combinedValueArray, currentValue, refForTheCurrentValue) => {
        let joinedVal = parseInt(combinedValueArray.join(""));
        if (joinedVal <= 0 || joinedVal > 12)
            setError("Enter a valid month");
        else
            setError(null);
        setMonth(combinedValueArray)
    }
    const handleYear = (combinedValueArray, currentValue, refForTheCurrentValue) => {
        let joinedVal = parseInt(combinedValueArray.join(""));
        if (joinedVal <= 1900 || joinedVal > new Date().getFullYear())
            setError("Enter a valid year");
        else
            setError(null);
        setYear(combinedValueArray)
    }

    const handleSubmit = () => {
        setValue(date);
        onClose()
    }

    return (

        <View style={styles.dateContainer}>
            {
                label === "Date"
                    ?
                    null
                    :
                    <React.Fragment>
                        <Text style={[sx.PrimaryFontRe, { fontSize: 24 }]}>When is your birthday</Text>
                        <Text style={[sx.SecFontRe, sx.font14]}>Let us know more about you!</Text>
                    </React.Fragment>
            }


            {
                !isLoading
                    ?
                    <View style={[sx.flex, sx.row, sx.alignCenter, { justifyContent: "center", marginTop: 20 }]}>
                        <NextTextInput
                            noOfTextInput={2}
                            placeholder={['D', 'D']}
                            textInputStyle={[sx.PrimaryFontRe, sx.font16, { padding: 5, margin: 5, borderBottomColor: "#FCB8A4", borderBottomWidth: 2 }]}
                            onChangeValue={handleDay}
                            parentViewStyle={{ padding: 5 }}
                            value={day}
                        />
                        <Text style={[sx.PrimaryFontRe, sx.font16]}>/</Text>
                        <NextTextInput
                            noOfTextInput={2}
                            placeholder={['M', 'M']}
                            textInputStyle={[sx.PrimaryFontRe, sx.font16, { padding: 5, margin: 5, borderBottomColor: "#FCB8A4", borderBottomWidth: 2 }]}
                            onChangeValue={handleMonth}
                            parentViewStyle={{ padding: 5 }}
                            value={month}
                        />
                        <Text style={[sx.PrimaryFontRe, sx.font16]}>/</Text>
                        <NextTextInput
                            noOfTextInput={4}
                            placeholder={['Y', 'Y', 'Y', 'Y']}
                            textInputStyle={[sx.PrimaryFontRe, sx.font16, { padding: 5, margin: 5, borderBottomColor: "#FCB8A4", borderBottomWidth: 2 }]}
                            onChangeValue={handleYear}
                            parentViewStyle={{ padding: 5 }}
                            value={year}
                        />
                    </View>
                    :
                    null
            }

            {
                error ? <HelperText type="error" style={{ textAlign: 'right', margin: 0 }} theme={defaultInputTheme} visible={true}>
                    {error}
                </HelperText> : null
            }

            <TouchableOpacity style={[styles.loginButton, !date ? styles.disabledButton : null]} onPress={handleSubmit} disabled={!date || (Boolean(error) || false)}>
                <Text style={styles.loginButtonText}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

const DatePicker = (props) => {
    const [show, setShow] = React.useState(false);

    return (
        <View>
            <TouchableOpacity onPress={() => setShow(!show)}>
                <View pointerEvents="none">
                    <CommonInput
                        {...props}
                        value={props.value}
                        placeholder="DD / MM / YYYY"
                        rightIcon="chevron-right"
                        readOnly
                    />
                </View>
            </TouchableOpacity>
            <WhiteModal
                isVisible={show}
                onClose={() => setShow(!show)}
                title={props.label}
                ChildComponent={<SelectDate onClose={() => setShow(!show)} setValue={(val) => props.onChange(val)} value={props.value} label={props.label} />}
                containerStyle={styles.containerStyle}
                backgroundColor="#FFF"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: "#FFF",
        width: "100%",
        height: "100%",
    },
    dateContainer: {
        flex: 1,
        justifyContent: "center",
    },
    loginButton: {
        width: '100%',
        backgroundColor: 'black',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 30
    },
    disabledButton: {
        backgroundColor: "#707070",
        color: "#fff"
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "KotoriRose-Regular"
    },
});

export default DatePicker;