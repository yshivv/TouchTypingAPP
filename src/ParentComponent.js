import React, { useState } from 'react';
import TypingBox from './TypingBox';

const ParentComponent = () => {
    const [typedKeys, setTypedKeys] = useState('');
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (typedKeys === 'FAIL') {
                setShowFailureMessage(true);
            } else {
                setShowFailureMessage(false);
            }
        }
    };

    return (
        <div>
            <TypingBox
                typedKeys={typedKeys}
                handleKeyPress={handleKeyPress}
                setTypedKeys={setTypedKeys}
                maxInputLength={50}
                showFailureMessage={showFailureMessage}
            />
        </div>
    );
};

export default ParentComponent;
