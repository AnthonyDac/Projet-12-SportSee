import React from 'react';
import PropTypes from 'prop-types';
import './ScoreComponent.css';
import {
    RadialBarChart,
    RadialBar,
} from 'recharts';

function ScoreComponent({ dataScore }) {

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
                <RadialBarChart width={260} height={260} cx="50%" cy="50%" innerRadius={90} outerRadius={170} barSize={8} data={[{ name: 'Score', value: scorePercent }]} startAngle={0} fill='#FF0000' endAngle={(360 * scorePercent) / 100}>
                    <RadialBar minAngle={0} background clockWise={true} dataKey='value' fill='#FF0000' />
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
