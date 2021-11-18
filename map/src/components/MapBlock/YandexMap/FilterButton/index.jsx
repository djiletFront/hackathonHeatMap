import React from 'react';
import {useDispatch} from "react-redux";
import "./index.css"
import filterImage from "./filter.svg"
import {showFinder} from "../../../../store/slices/finderSlice";
const FilterButton = () => {
    const dispatch = useDispatch()
    return (

        <div className="FilterButton">
            <img src={filterImage} onClick={() => dispatch(showFinder())}/>
        </div>
    );
};

export default FilterButton;
