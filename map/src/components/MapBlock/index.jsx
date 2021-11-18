import React from 'react';
import YandexMap from "./YandexMap";
import Statistics from "./ Statistics";
import "./index.css"

const MapBlock = () => {
    return (
        <div className="mapBlock">
            <YandexMap/>
            <Statistics/>
        </div>
    );
};

export default MapBlock;
