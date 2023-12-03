import React from 'react';
import './AverageSessionsComponent.css';
import { LineChart, Line, XAxis, Tooltip, Legend, Text } from 'recharts';

function AverageSessionsComponent({ datas }) {
    // Formatter pour afficher les lettres correspondant aux jours de la semaine
    const dayFormatter = (day) => {
        const daysOfWeek = ["", "L", "M", "M", "J", "V", "S", "D"];
        return daysOfWeek[day];
    }

    function CustomTooltip({ active, payload, label }) {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip-sessions">
                    <p>{`${payload[0].value} min`}</p>
                </div>
            );
        }

        return null;
    }

    const chartStyle = { background: 'red' };

    return (
        <div className="averageSessionsContainer">
            <div className="averageSessionsContainerTitle">
                <p>Durée moyenne des sessions</p>
            </div>
            <LineChart width={260} height={260} data={datas.sessions} margin={{ top: 80, right: 10, left: 10, bottom: 15 }} style={chartStyle}>
                <XAxis dataKey="day" tickFormatter={dayFormatter} />
                <Tooltip content={<CustomTooltip />} />
                <Tooltip content={<CustomTooltip />} position={{ y: 0 }} />
                <Line type="natural" dataKey="sessionLength" stroke="#8884d8" dot={false} />
            </LineChart>
        </div>
    );
}

export default AverageSessionsComponent;
