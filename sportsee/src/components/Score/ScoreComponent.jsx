import React from 'react';
import PropTypes from 'prop-types'
import './ScoreComponent.css';
//import { RadialBarChart, RadialBar, PolarAngleAxis, XAxis, Tooltip, Legend, Text } from 'recharts';
import {
    RadialBarChart,
    RadialBar,
    Legend,
    Tooltip,
} from 'recharts';

function ScoreComponent({ dataScore }) {

    function calculatePercent(data) {
        const score = Number(data)

        return Math.round(score * 100)
    }
    const scorePercent = calculatePercent(dataScore)

    return (
        <div className="scoreContainer">
            <div className="scoreContainerTitle">
                <p>Score</p>
            </div>
            <div class="scoreContainerScore">
                <div class="scoreDisplayer">
                    <span class="percent">{scorePercent}%</span><span class="text">de votre objectif</span>
                </div>
            </div>
            <RadialBarChart width={260} height={260} cx="50%" cy="50%" innerRadius={90} outerRadius={120} barSize={7} data={[{ name: 'Score', value: scorePercent }]} startAngle={0} fill='#FF0000' endAngle={(360 * scorePercent) / 100}>
                <RadialBar minAngle={0} background clockWise={true} dataKey='value' fill='#FF0000' />

            </RadialBarChart>


        </div>
    );
}

ScoreComponent.propTypes = {
    dataScore: PropTypes.object.isRequired
}

export default ScoreComponent;
