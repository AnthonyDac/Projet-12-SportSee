import React from 'react';
import PropTypes from 'prop-types';
import './ScoreComponent.css';
import {
    RadialBarChart,
    RadialBar,
} from 'recharts';

function ScoreComponent({ dataScore, clockWise }) {

    function calculatePercent(data) {
        const score = Number(data);
        return Math.round(score * 100);
    }

    const scorePercent = calculatePercent(dataScore);

    return (
        dataScore !== undefined ? (
            <div className="scoreContainer">
                <div className="scoreContainerTitle">
                    <p>Score</p>
                </div>
                <div className="scoreContainerScore">
                    <div className="scoreDisplayer">
                        <span className="percent">{scorePercent}%</span><span className="text">de votre objectif</span>
                    </div>
                </div>
                <RadialBarChart width={260} height={260} cx="50%" cy="50%" innerRadius={90} outerRadius={170} barSize={8} data={[{ name: 'Score', value: scorePercent }]} fill='#FF0000' startAngle={90} endAngle={clockWise ? (90 + (-360 * (scorePercent % 100) / 100)) : (90 + (360 * (scorePercent % 100) / 100))}>
                    <RadialBar minAngle={0} background dataKey='value' fill='#FF0000' />
                </RadialBarChart>
            </div>
        ) : (
            <p>Chargement..</p>
        )
    );
}

ScoreComponent.propTypes = {
    dataScore: PropTypes.number.isRequired, // Modifié pour refléter le type correct
};

export default ScoreComponent;
