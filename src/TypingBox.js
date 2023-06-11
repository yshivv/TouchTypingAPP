import React, { useEffect } from 'react';

const TypingBox = ({
    typedKeys,
    handleKeyPress,
    setTypedKeys,
    maxInputLength,
    showFailureMessage
}) => {
    const handleChange = (event) => {
        const { value } = event.target;
        setTypedKeys(value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Tab' || event.key === 'Escape') {
            setTypedKeys('');
        }
    };

    useEffect(() => {
        const handleEnterKey = (event) => {
            if (event.key === 'Enter') {
                if (typedKeys === 'FAIL') {
                    // Handle failure message logic here
                }
            }
        };

        document.addEventListener('keydown', handleEnterKey);

        return () => {
            document.removeEventListener('keydown', handleEnterKey);
        };
    }, [typedKeys]);

    return (
        <div className="typing-box">
            <input
                type="text"
                value={typedKeys}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                maxLength={maxInputLength}
                autoFocus
                className={`form-control ${showFailureMessage ? 'is-invalid' : ''}`}
                style={{
                    background: '#FCE4EC',
                    border: '2px solid #F48FB1',
                    borderRadius: '5px',
                    padding: '10px',
                    fontSize: '16px',
                    color: '#333',
                }}
                placeholder={typedKeys ? '' : "<Re-type if failed, press <TAB> or <ESC> to reset>"}
            />
            {showFailureMessage && (
                <div className="text-danger">Wrong key! Try again.</div>
            )}
        </div>
    );
};

export default TypingBox;
