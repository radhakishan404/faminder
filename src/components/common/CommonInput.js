import * as React from 'react';
import { HelperText, TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const CommonInput = ({ label, leftIcon = false, rightIcon = false, value = "", mode = "outlined", keyboardType = null, placeholder = "Type here", onChange, inputStyle = {}, ...others }) => {
    const theme = {
        colors: { primary: '#626262', accent: "#626262", placeholder: "#B6B6B6", error: "#FE807F", underlineColor: 'transparent' },
        roundness: 10,
        fonts: {
            medium: { fontFamily: "Gilroy-Light" },
            bodyLarge: { fontFamily: "Gilroy-Light" }
        }
    }
    return (
        <React.Fragment>
            <TextInput
                keyboardType={keyboardType}
                mode={mode}
                label={label}
                placeholder={placeholder}
                value={value}
                left={leftIcon ? <TextInput.Icon icon={leftIcon} /> : null}
                right={rightIcon ? <TextInput.Icon icon={rightIcon} /> : null}
                autoCapitalize="none" autoCorrect={false}
                style={[styles.input, inputStyle]}
                theme={theme}
                outlineColor={'grey'}
                onChangeText={onChange}
                underlineColorAndroid={'rgba(0,0,0,0)'}
                {...others}
            />
            {
                others?.error ? <HelperText type="error" style={{ textAlign: 'right', margin: 0 }} theme={theme} visible={true}>
                    {others?.helperText}
                </HelperText> : null
            }
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    input: {
        fontFamily: "Gilroy-Light",
        fontSize: 14,
    }
});

export default CommonInput;