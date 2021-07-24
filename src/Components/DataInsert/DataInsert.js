import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import {
    TextField,
    Select,
    MenuItem,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';
import { CustomFormControlLabel, ErrorLabel } from '../control/FormControlLabel';
import { CustomButton } from '../control/Button';

const selectStyles = {
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

const DataInsert = () => {
    const [code, SetCode] = useState('');
    const [price, SetPrice] = useState(0);
    const [currency, SetCurrency] = useState('CNY');
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isCodeExist, setIsCodeExist] = useState(false);

    const handleInsert = () => {
        setIsConfirmOpen(true);
    };

    const handleClear = () => {
        SetCode(' ');
        SetPrice(0);
        SetCurrency('CNY');
    };

    const handleAgree = () => {
        searchCode();
    };

    const searchCode = () => {
        const url = `http://127.0.0.1:8081/searchYahoo?code=${code}`;
        axios.get(url).then((res) => {
            const result = res.data.chart.result;
            handleClose();
            if (!result) alert('Code do not exsit! please check the code.');
            else insertData();
        });
    };
    const insertData = () => {
        const url = 'http://127.0.0.1:8081/insert';
        const param = { code: code, price: price, currency: currency };
        const headers = { headers: { 'Content-Type': 'application/json; charset=utf-8' } };
        axios.post(url, param).then((res) => {
            if (res.err != 'null') alert('insert complete!');
            else alert(res.err);
        });
    };

    const handleClose = () => {
        setIsConfirmOpen(false);
    };

    return (
        <>
            <div style={{ display: 'flex' }}>
                <CustomFormControlLabel
                    control={
                        <TextField
                            value={code}
                            onChange={(e) => {
                                SetCode(e.target.value);
                            }}
                        />
                    }
                    label={<ErrorLabel labelText={'Code'} errorMessage={''} />}
                />
                <CustomFormControlLabel
                    control={
                        <TextField
                            value={price}
                            onChange={(e) => {
                                SetPrice(e.target.value);
                            }}
                        />
                    }
                    label={<ErrorLabel labelText={'Price'} errorMessage={''} />}
                />
                <CustomFormControlLabel
                    control={
                        <Select
                            value={currency}
                            style={(selectStyles, { width: '200px' })}
                            onChange={(e) => {
                                SetCurrency(e.target.value);
                            }}
                        >
                            <MenuItem value="JPY">JPY</MenuItem>
                            <MenuItem value="CNY">CNY</MenuItem>
                            <MenuItem value="HKD">HKD</MenuItem>
                            <MenuItem value="USD">USD</MenuItem>
                            <MenuItem value="SGD">SGD</MenuItem>
                        </Select>
                    }
                    label={<ErrorLabel labelText={'Currency'} errorMessage={''} />}
                />
            </div>
            <div style={{ display: 'flex', margin: '15px' }}>
                <CustomButton onClick={handleInsert}>Insert</CustomButton>
                <CustomButton onClick={handleClear} style={{ marginLeft: '30px' }}>
                    Clear
                </CustomButton>
                <Dialog
                    open={isConfirmOpen}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{'Save The Data?'}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <h2>Code : {code}</h2>
                            <h2>Price : {price}</h2>
                            <h2>Currency : {currency}</h2>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleAgree} color="primary" autoFocus>
                            Agree
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Disagree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
};

export default DataInsert;
