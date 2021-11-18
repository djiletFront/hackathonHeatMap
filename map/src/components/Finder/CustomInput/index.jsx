import React from 'react';
import {TextField} from "@mui/material";
import {Controller} from "react-hook-form";
import "./index.css"

const CustomInput = ({control, title, name, defaultValue, placeholder}) => {
    return (
        <div className="input">
            <p className="input-title">{title}</p>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({field}) => (
                    <TextField
                        {...field}
                        fullWidth
                        size="small"
                        id="outlined-basic"
                        variant="outlined"
                        placeholder={placeholder}
                    />
                )}
            />
        </div>
    );
};

export default CustomInput;
