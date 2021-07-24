import { useState } from 'react';

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
    Divider,
} from '@material-ui/core';
import { CustomFormControlLabel, ErrorLabel } from '../control/FormControlLabel';
import { CustomButton } from '../control/Button';
import { DataTable } from './DataTable';
import { Server } from './function/Server';
import { selectStyles } from './DataInsertSelectStyles';

const DataInsert = () => {
    const [code, SetCode] = useState('');
    const [cost, SetCost] = useState(0);
    const [share, SetShare] = useState(0);
    const [currency, SetCurrency] = useState('CNY');
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const handleInsert = () => {
        setIsConfirmOpen(true);
    };

    const handleClear = () => {
        SetCode('');
        SetCost(0);
        SetCurrency('CNY');
    };

    const handleAgree = async () => {
        if (!code || !cost || !share) {
            alert('please input all value');
            handleClose();
            return;
        }

        await Server.INSERT_FILE(code, cost, share, currency);
        handleClose();
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
                            value={cost}
                            onChange={(e) => {
                                SetCost(e.target.value);
                            }}
                        />
                    }
                    label={<ErrorLabel labelText={'Cost'} errorMessage={''} />}
                />
                <CustomFormControlLabel
                    control={
                        <TextField
                            value={share}
                            onChange={(e) => {
                                SetShare(e.target.value);
                            }}
                        />
                    }
                    label={<ErrorLabel labelText={'Share'} errorMessage={''} />}
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
                            Code : {code} <br /> Cost : {cost}
                            <br /> Share : {share}
                            <br /> Currency : {currency}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleAgree} color="primary" autoFocus>
                            OK
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <Divider style={{ margin: '30px 15px' }} />
            <DataTable />
        </>
    );
};

export default DataInsert;
