import React, { useState, useEffect } from 'react';

const Statistics = ({ timer, keysPressed, accuracy, isSoundOn }) => {
    return (
        <div className="statistics">
            <h2 className="section-title">Statistics </h2>
            <div className="stat-box bg-light rounded p-3">
                <h3>Stopwatch:</h3>
                <p>{timer < 10 ? `00:00:0${timer}` : `00:00:${timer}`}</p>
            </div>
            <div className="stat-box bg-light rounded p-3">
                <h3>Keys Pressed:</h3>
                <p>{keysPressed}</p>
            </div>
            <div className="stat-box bg-light rounded p-3">
                <h3>Accuracy:</h3>
                <p>{accuracy}%</p>
            </div>
            <div className={`stat-box bg-light rounded p-3 ${isSoundOn ? 'text-success' : 'text-danger'}`}>
                <h3>Sound:</h3>
                <p>{isSoundOn ? 'On' : 'Off'}</p>
            </div>
        </div>
    );
};

export default Statistics;