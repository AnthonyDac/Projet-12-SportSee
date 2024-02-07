import React from 'react';
import './AverageSessionsComponent.css';
import { LineChart, Line, XAxis, Tooltip, Legend, Text, ReferenceArea } from 'recharts';

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
            <LineChart width={260} height={260} data={datas.sessions} margin={{ top: 80, right: 15, left: 15, bottom: 30 }} style={chartStyle}>
                <XAxis dataKey="day" tickFormatter={dayFormatter} tick={{ fill: "rgba(255, 255, 255, 0.5)", fontSize: 15 }} dy={10} />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceArea x1={'S'} x2={'D'} y1={60} y2={60} stroke="green" strokeOpacity={1} />
                <Line
                    type="natural"
                    dataKey="sessionLength"
                    dot={false}
                    stroke="url(#gradient)"
                />
                <defs>
                    <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="0">
                        <stop offset="50%" stopColor="#FFFFFF" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
                    </linearGradient>
                </defs>
            </LineChart>
        </div>
    );
}

export default AverageSessionsComponent;
