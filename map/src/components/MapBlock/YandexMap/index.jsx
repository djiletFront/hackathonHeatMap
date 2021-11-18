import React, {useEffect} from 'react';
import "./index.css"
import {useSelector} from "react-redux";
import FilterButton from "./FilterButton";
/* global ymaps */

const YandexMap = () => {
    const {coordinates, orders} = useSelector(state => state.formFilter);

    useEffect(() => {
        handleLoad()
    }, [coordinates, orders]);

    const handleLoad = () => {
        ymaps.ready(['Heatmap']).then(function init() {

            let myMap = new ymaps.Map('map', {
                center: coordinates,
                zoom: 12,
                controls: ["zoomControl"]
            });

            let data = [];
            for (let i = 0; i < orders.length; i++) {
                data.push(orders[i].point)
            }
            let heatmap = new ymaps.Heatmap(data, {
                // Радиус влияния.
                radius: 15,
                // Нужно ли уменьшать пиксельный размер точек при уменьшении зума. False - не нужно.
                dissipating: false,
                // Прозрачность тепловой карты.
                opacity: 0.8,
                // Прозрачность у медианной по весу точки.
                intensityOfMidpoint: 0.2,
                // JSON описание градиента.
                gradient: {
                    0.1: 'rgba(128, 255, 0, 0.7)',
                    0.2: 'rgba(255, 255, 0, 0.8)',
                    0.7: 'rgba(234, 72, 58, 0.9)',
                    1.0: 'rgba(162, 36, 25, 1)'
                }
            });
            heatmap.setMap(myMap);
        });
    };


    return (
        <div className="yandexMap" id="map">
            <FilterButton />
        </div>
    );
};

export default YandexMap;
