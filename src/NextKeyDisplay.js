import React from 'react';

const NextKeyDisplay = ({ nextKey }) => {
    return (
        <div className="next-key">
            <h2>Next Key:</h2>
            <div
                className="next-key-box bg-warning rounded p-3 text-center"
                style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                }}
            >
                {nextKey}
            </div>
        </div>
    );
};

export default NextKeyDisplay;
