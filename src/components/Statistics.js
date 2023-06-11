import React, { useState, useEffect } from 'react';

function Statistics() {
    const [keyCount, setKeyCount] = useState(0);
    const [accuracy, setAccuracy] = useState(100);



    useEffect(() => {
        const timer = setInterval(() => {
            setKeyCount((prevKeyCount) => prevKeyCount + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        const newAccuracy = (keyCount / (keyCount * 100)) * 100;
        setAccuracy(newAccuracy.toFixed(2));
    }, [keyCount]);

    return (
        <div className="statistics-container">
            <h2 className="section-title">Statistics</h2>
            <p>Keys Pressed: {keyCount}</p>
            <p>Accuracy: {isNaN(accuracy) ? 100 : accuracy}%</p>
        </div>
    );
}

export default Statistics;
