import React, { useState } from 'react';
import './BarchartComponent.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';


function BarchartComponenent({ data }) {
    // Créez des lignes pointillées à des intervalles de 100
    const yReferenceLines = [];
    for (let y = 100; y <= 1000; y += 100) {
        yReferenceLines.push(
            <ReferenceLine key={y} y={y} stroke="gray" strokeDasharray="5 5" />
        );
    }

    function CustomTooltip({ active, payload, label }) {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip-activity">
                    <p>{`${payload[0].value}kg`}</p>
                    <p>{`${payload[1].value}kCal`}</p>
                </div>
            );
        }

        return null;
    }

    return (
        <>
            <div className='barchartTitle'>
                <h2>Activité quotidienne</h2>
                <div className='barchartTitleLegend'>
                    <div className='barchartTitleLegendElement'>
                        <div className='barchartTitleLegendElementCircleKilogram'></div>
                        <p>Poids (kg)</p>
                    </div>
                    <div className='barchartTitleLegendElement'>
                        <div className='barchartTitleLegendElementCircleCalories'></div>
                        <p>Calories brûlées (kCal)</p>
                    </div>
                </div>
            </div>
            <BarChart width={850} height={320} data={data}>
                <XAxis dataKey="name" axisLine={false} textAnchor="end" />
                <YAxis domain={[0, 'auto']} allowDataOverflow={true} orientation="right" axisLine={false} />
                <Tooltip
                    content={<CustomTooltip />}
                />
                <Bar dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]} tickLine={false} />
                <Bar dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]} tickLine={false} />
                {yReferenceLines}
            </BarChart>
        </>
    )
}

export default BarchartComponenent
