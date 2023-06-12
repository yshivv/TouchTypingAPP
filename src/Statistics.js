import React, { useState, useEffect } from 'react';

const Statistics = ({ timer, keyCount, accuracy, isSoundOn }) => {
    const [wpm, setWPM] = useState(0);

    // Calculate WPM and update the state
    const calculateWPM = () => {
        const minutes = 5; // Total time in minutes
        const words = keyCount / 5; // Assuming each word is 5 characters long
        const wpm = (words / minutes).toFixed(2);
        setWPM(wpm);
    };

    useEffect(() => {
        calculateWPM();
    }, [keyCount]);

    return (
        <div className="statistics">
            <h2 className="section-title">Statistics</h2>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h3 className="card-title">Stopwatch</h3>
                            <p className="card-text">{timer < 10 ? `00:00:0${timer}` : `00:00:${timer}`}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h3 className="card-title">Keys Pressed</h3>
                            <p className="card-text">{keyCount}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h3 className="card-title">WPM</h3>
                            <p className="card-text">{wpm}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h3 className="card-title">Accuracy</h3>
                            <p className="card-text">{accuracy}%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className={`card bg-light ${isSoundOn ? 'text-success' : 'text-danger'}`}>
                        <div className="card-body">
                            <h3 className="card-title">Sound</h3>
                            <p className="card-text">{isSoundOn ? 'On' : 'Off'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
