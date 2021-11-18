import React from 'react';
import "./index.css"
import {Rating} from "@material-ui/core";

const Ranking = ({ranking}) => {
    return (
        <div className="Ranking">
            <p>Оценка</p>
            <Rating name="read-only" value={ranking} precision={0.5} readOnly/>
        </div>
    );
};

export default Ranking;
