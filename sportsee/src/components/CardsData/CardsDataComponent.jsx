import React, { useState } from 'react';
import './CardsDataComponent.css'


function CardsDataComponent({ data }) {
    return (
        <>
            <div className="keyDataContainerElement">
                <div className="keyDataContainerElementIcon calorie">
                    <i className="fa-solid fa-fire"></i>
                </div>
                <div className="keyDataContainerElementTitle">
                    <p>{data.keyData && data.keyData.calorieCount}kCal</p>
                    <p>Calories</p>
                </div>
            </div>
            <div className="keyDataContainerElement">
                <div className="keyDataContainerElementIcon protein">
                    <i className="fa-solid fa-drumstick-bite"></i>
                </div>
                <div className="keyDataContainerElementTitle">
                    <p>{data.keyData && data.keyData.proteinCount}g</p>
                    <p>Protéines</p>
                </div>
            </div>
            <div className="keyDataContainerElement">
                <div className="keyDataContainerElementIcon carbohydrate">
                    <i className="fa-solid fa-apple-whole"></i>
                </div>
                <div className="keyDataContainerElementTitle">
                    <p>{data.keyData && data.keyData.carbohydrateCount}g</p>
                    <p>Glucides</p>
                </div>
            </div>
            <div className="keyDataContainerElement">
                <div className="keyDataContainerElementIcon lipid">
                    <i className="fa-solid fa-burger"></i>
                </div>
                <div className="keyDataContainerElementTitle">
                    <p>{data.keyData && data.keyData.lipidCount}g</p>
                    <p>Lipides</p>
                </div>
            </div>
        </>
    )
}

export default CardsDataComponent
