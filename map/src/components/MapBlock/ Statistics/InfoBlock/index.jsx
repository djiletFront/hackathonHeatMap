import React from 'react';
import "./index.css"

const InfoBlock = ({value, title}) => {
    return (
        <div className="infoBlock">
            <p>{title}</p>
            <p className="infoBlock-value"><b>{value}</b></p>
        </div>
    );
};

export default InfoBlock;
