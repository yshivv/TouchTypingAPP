import React, { useState, useEffect } from 'react';

function NextKeyDisplay() {
    const [nextKeys, setNextKeys] = useState('asdfjkl;');

    useEffect(() => {
        const handleKeyPress = (event) => {
            const typedKey = event.key;
            const remainingKeys = nextKeys.slice(1);

            if (typedKey === nextKeys[0]) {
                setNextKeys(remainingKeys + typedKey);
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div className="next-key-display-container">
            <h2 className="section-title">Next Key Display</h2>
            <p className="next-key">Next Key(s): {nextKeys}</p>
        </div>
    );
}

export default NextKeyDisplay;
