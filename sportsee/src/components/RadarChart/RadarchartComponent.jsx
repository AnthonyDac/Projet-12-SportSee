import React from 'react';
import './RadarchartComponent.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const convertData = (data) => {

    // Convert the first letter of a string to uppercase and translate the string
    function capitalizeAndTranslate(str) {
        if (str === 'energy') return 'Energie';
        if (str === 'endurance') return 'Endurance';
        if (str === 'strength') return 'Force';
        if (str === 'speed') return 'Vitesse';
        if (str === 'intensity') return 'Intensité';
        if (str === 'cardio') return 'Cardio';
    }

    if (!data || !data.data) {
        return [];
    }

    const convertedData = data.data.map(item => ({
        subject: capitalizeAndTranslate(data.kind[item.kind]),
        A: item.value,
        fullMark: 150,
    }));

    return convertedData;
};

const RadarChartExample = ({ data }) => {
    const convertedData = convertData(data);

    return (
        <ResponsiveContainer width="90%" height="90%" padding="0px" id="radarContainer">
            <RadarChart cx="50%" cy="50%" outerRadius="85%" data={convertedData}>
                <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "white", fontSize: 12, angle: 0, textAnchor: "middle" }}
                />
                <PolarRadiusAxis tick={false} axisLine={false} />
                <PolarGrid stroke="white" radialLines={false} polarRadius={[0, 10, 30, 50, 70, 90]} />
                <Radar name="User" dataKey="A" fill="#ff0000" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default RadarChartExample;
