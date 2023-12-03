import React from 'react';
import './RadarchartComponent.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const convertData = (data) => {

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    if (!data || !data.data) {
        return [];
    }

    const convertedData = data.data.map(item => ({
        subject: capitalizeFirstLetter(data.kind[item.kind]),
        A: item.value,
        fullMark: 150,
    }));

    return convertedData;
};

const RadarChartExample = ({ data }) => {
    const convertedData = convertData(data);

    return (
        <ResponsiveContainer style={{ backgroundColor: '#282D30', borderRadius: '10px' }} width={260} height={260} id="radarContainer">
            <RadarChart cx="50%" cy="50%" outerRadius="69%" data={convertedData}>
                <PolarAngleAxis dataKey="subject" />
                <PolarGrid />
                <Radar name="User" dataKey="A" fill="#ff0000" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default RadarChartExample;
