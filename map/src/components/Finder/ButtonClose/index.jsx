import React from 'react';
import {IconButton} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./index.css"
import {useDispatch} from "react-redux";
import {closeFinder} from "../../../store/slices/finderSlice";

const ButtonClose = () => {
    const dispatch = useDispatch()

    return (
        <div className="ButtonClose">
            <IconButton onClick={() => dispatch(closeFinder())}>
                <KeyboardBackspaceIcon/>
            </IconButton>
            <p>Фильтр</p>
        </div>
    );
};

export default ButtonClose;
