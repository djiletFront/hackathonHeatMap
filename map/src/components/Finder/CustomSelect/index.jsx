import React from 'react';
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import {Select} from "@mui/material";
import {Controller} from "react-hook-form";
import "./index.css"

const CustomSelect = ({control, title, name, defaultValue, listData}) => {
    return (
        <div className="select">
            <p className="select-title">{title}</p>
            <FormControl fullWidth>
                <Controller
                    control={control}
                    name={name}
                    defaultValue={defaultValue}
                    render={({field}) => (
                        <Select
                            {...field}
                            sx={{height: '37.5px'}}
                        >
                            {
                                Object.keys(listData).map((value, index) => (
                                    <MenuItem key={index} value={value}>
                                        {listData[value]}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    )}
                />
            </FormControl>
        </div>
    );
};

export default CustomSelect;
