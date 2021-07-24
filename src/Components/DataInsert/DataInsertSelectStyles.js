export const selectStyles = {
    control: (base, state) => ({
        ...base,
        minHeight: 27,
        height: 27,
        width: 240,
        fontWeight: 100,
        borderRadius: 0,
        borderColor: state.isFocused ? 'blue' : 'gainsboro',
        '&:hover': {
            borderColor: state.isFocused ? 'blue' : 'gainsboro',
        },
    }),
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'blue' : 'black',
        padding: 10,
        fontWeight: 100,
    }),
    dropdownIndicator: (base) => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
        fontWeight: 100,
    }),
    clearIndicator: (base) => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
    }),
    valueContainer: (base) => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
        fontWeight: 100,
    }),
};
