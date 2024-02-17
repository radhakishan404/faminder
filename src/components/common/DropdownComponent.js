import React, { Fragment, useEffect } from 'react';
import { View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { HelperText } from 'react-native-paper';

const DropdownComponent = ({ selectedValue, onSelect, options, label, error, helperText }) => {
    return (
        <Fragment>
            <SelectList
                defaultOption={{ key: selectedValue, value: selectedValue }}
                setSelected={(val) => onSelect(val)}
                data={options}
                save="value"
                placeholder={label}
                search={false}
                fontFamily="Gilroy-Light"
                boxStyles={{ borderWidth: 0, borderBottomWidth: 1, borderBottomColor: "#E2E2E2", borderRadius: 3, marginLeft: -2, marginTop: 10 }}
                dropdownStyles={{ backgroundColor: "white", borderWidth: 0, marginTop: 0 }}
                dropdownItemStyles={{ borderBottomWidth: 1, borderColor: "#E2E2E2" }}
            />
            {
                error ? <HelperText type="error" style={{ textAlign: 'right', margin: 0 }} visible={true}>
                    {helperText}
                </HelperText> : null
            }
        </Fragment>
    );
};

export default DropdownComponent;