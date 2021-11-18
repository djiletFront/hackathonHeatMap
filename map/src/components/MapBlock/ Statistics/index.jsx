import React from 'react';
import InfoBlock from "./InfoBlock";
import "./index.css"
import {useSelector} from "react-redux";
import Ranking from "./Ranking";

const Statistics = () => {
    const {
        totalOrder,
        totalLatecomers,
        averageTime,
        proceeds,
        ranking
    } = useSelector(state => state.formFilter);
    return (
        <div className="statistics">
            <Ranking ranking={ranking} />
            <InfoBlock value={totalOrder} title="Количество заказов"/>
            <InfoBlock value={totalLatecomers} title="Опоздавшие"/>
            <InfoBlock value={averageTime} title="Ср. время доставки"/>
            <InfoBlock value={proceeds} title="Выручка"/>
        </div>
    );
};

export default Statistics;
