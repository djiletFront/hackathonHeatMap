import React from 'react'
import './index.css'
import {closeFinder} from "../../../store/slices/finderSlice";
import {useDispatch} from "react-redux";

const Backdrop = ({show = true}) => {
    const dispatch = useDispatch()
    return (
        <>
        {
            show && <div className="Backdrop" onClick={() => dispatch(closeFinder())}/>
        }
        </>
    )
}



export default Backdrop