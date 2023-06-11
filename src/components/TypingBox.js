import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_ENDPOINT = 'http://localhost:3000/api/data';


function TypingBox() {
    const [typedKeys, setTypedKeys] = useState('');
    const [accuracy, setAccuracy] = useState(100);
    const [nextKeys, setNextKeys] = useState('asdfjkl;');


    const handleKeyPress = (event) => {
        const typedKey = event.key;
        const remainingKeys = nextKeys.slice(typedKeys.length);

        if (typedKey === remainingKeys[0]) {
            setTypedKeys((prevTypedKeys) => prevTypedKeys + typedKey);
            submitResponse();
        }

        const newAccuracy =
            (typedKeys.length / (typedKeys.length + remainingKeys.length)) * 100;
        setAccuracy(newAccuracy.toFixed(2));
    };

    const submitResponse = async () => {
        try {
            const response = await axios.post(SERVER_ENDPOINT, {
                typedKeys,
                accuracy,
            });

            console.log('Server response:', response.data);

            setTypedKeys('');
        } catch (error) {
            console.log('Error submitting response:', error);
        }
    };

    useEffect(() => {
        document.addEventListener('keypress', handleKeyPress);
        return () => {
            document.removeEventListener('keypress', handleKeyPress);
        };
    }, [typedKeys]);

    return (
        <div className="typing-box-container">
            <h2 className="section-title">Typing Box</h2>
            <input
                type="text"
                value={typedKeys}
                onChange={(event) => setTypedKeys(event.target.value)}
            />
            <p className="accuracy">Accuracy: {accuracy}%</p>
            <button onClick={submitResponse}>Submit</button>
        </div>
    );
}

export default TypingBox;
