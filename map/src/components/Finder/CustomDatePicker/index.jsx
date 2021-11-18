import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import ruLocale from 'date-fns/locale/ru';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import "./index.css"

export default function CustomDatePicker({dateRange, setDateRange}) {
    return (
        <div className="datePicker">
            <p className="datePicker-title">Период</p>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                <DateRangePicker
                    calendars={1}
                    value={dateRange}
                    onChange={(newValue) => {
                        setDateRange(newValue);
                    }}
                    maxDate={new Date()}
                    node={{start: 'll'}}
                    renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} size="small" label="" />
                            <Box sx={{mx: 2}}> - </Box>
                            <TextField {...endProps} size="small" label=""/>
                        </React.Fragment>
                    )}
                />
            </LocalizationProvider>
        </div>
    );
}
