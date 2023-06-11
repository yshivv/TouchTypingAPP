import React, { useState, useEffect } from 'react';
import TypingBox from './TypingBox';
import NextKeyDisplay from './NextKeyDisplay';
import Statistics from './Statistics';
import correctLetterSound from './sounds/correct-letter.mp3';
import incorrectLetterSound from './sounds/incorrect-letter.mp3';
import passedThresholdSound from './sounds/passed-threshold.mp3';
import failedThresholdSound from './sounds/failed-threshold.mp3';
import { useDispatch, useSelector } from 'react-redux';
import { startTyping, stopTyping, updateAccuracy, updateKeyCount } from './redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { updateKeyCount } from './redux/actions';


const correctLetterAudio = new Audio(correctLetterSound);
const incorrectLetterAudio = new Audio(incorrectLetterSound);
const passedThresholdAudio = new Audio(passedThresholdSound);
const failedThresholdAudio = new Audio(failedThresholdSound);

const generateRandomKey = (challenge) => {
  const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'];
  let randomKey = '';

  switch (challenge) {
    case 2:
      randomKey = keys[Math.floor(Math.random() * keys.length)] + ' ' + keys[Math.floor(Math.random() * keys.length)];
      break;
    case 3:
      randomKey =
        keys[Math.floor(Math.random() * keys.length)] +
        ' ' +
        keys[Math.floor(Math.random() * keys.length)] +
        ' ' +
        keys[Math.floor(Math.random() * keys.length)];
      break;
    case 4:
      randomKey =
        keys[Math.floor(Math.random() * keys.length)] +
        ' ' +
        keys[Math.floor(Math.random() * keys.length)] +
        ' ' +
        keys[Math.floor(Math.random() * keys.length)] +
        ' ' +
        keys[Math.floor(Math.random() * keys.length)];
      break;
    case 5:
      randomKey =
        keys[Math.floor(Math.random() * keys.length)] +
        ' ' +
        keys[Math.floor(Math.random() * keys.length)] +
        ' ' +
        keys[Math.floor(Math.random() * keys.length)] +
        ' ' +
        keys[Math.floor(Math.random() * keys.length)] +
        ' ' +
        keys[Math.floor(Math.random() * keys.length)];
      break;
    case 6:
      randomKey =
        keys[Math.floor(Math.random() * keys.length)] +
        ' ' +
        keys[Math.floor(Math.random() * keys.length)] +
        ' ' +
        keys[Math.floor(Math.random() * keys.length)] +
        ' ' +
        keys[Math.floor(Math.random() * keys.length)] +
        ' ' +
        keys[Math.floor(Math.random() * keys.length)] +
        ' ' +
        keys[Math.floor(Math.random() * keys.length)];
      break;
    default:
      randomKey = keys[Math.floor(Math.random() * keys.length)];
      break;
  }

  return randomKey;
};

function App() {
  const [inputValue, setInputValue] = useState('');
  const [nextKey, setNextKey] = useState('');
  const [keysPressed, setKeysPressed] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [challenge, setChallenge] = useState(1);
  const [isNextKeyValid, setIsNextKeyValid] = useState(true);

  const dispatch = useDispatch();
  const currentKey = useSelector((state) => state.currentKey);
  const keyCount = useSelector((state) => state.keyCount);
  const reduxAccuracy = useSelector((state) => state.accuracy);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return 300;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    if (isNextKeyValid) {
      setNextKey(generateRandomKey(challenge));
    }
  }, [inputValue, challenge, isNextKeyValid]);

  useEffect(() => {
    if (inputValue.length < nextKey.length) {
      setIsNextKeyValid(inputValue + nextKey[inputValue.length] === nextKey);
    }
  }, [inputValue, nextKey]);


  useEffect(() => {
    if (isNextKeyValid) {
      setNextKey(generateRandomKey(challenge));
    }
  }, [inputValue, challenge, isNextKeyValid]);

  useEffect(() => {
    if (inputValue.length < nextKey.length) {
      setIsNextKeyValid(inputValue + nextKey[inputValue.length] === nextKey);
    }
  }, [inputValue, nextKey]);

  const handleKeyPress = (event) => {
    const { key } = event;
    const currentKey = key && key.toLowerCase();

    const allowedKeys = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'];

    if (!allowedKeys.includes(currentKey)) {
      event.preventDefault();
      return;
    }

    const isKeyCorrect = currentKey === nextKey[inputValue.length];

    if (isKeyCorrect) {
      setInputValue((prevInputValue) => prevInputValue + currentKey);
      correctLetterAudio.play();
      setKeysPressed((prevKeysPressed) => prevKeysPressed + 1);
      setTimeout(() => {
        setInputValue('');
      }, 100);
    } else {
      failedThresholdAudio.play();
      setInputValue('FAIL');
      return; // Exit the function if the key is incorrect
    }

    if (inputValue.length + 1 === challenge) {
      if (inputValue + currentKey === nextKey) {
        passedThresholdAudio.play();
        setIsNextKeyValid(false); // Disable further key presses until the next key is generated
        setTimeout(() => {
          setChallenge((prevChallenge) => prevChallenge + 1); // Increase the challenge level
          setInputValue('');
          setIsNextKeyValid(true); // Enable key presses after generating the new next key
        }, 1000);
      } else {
        failedThresholdAudio.play();
        setInputValue('FAIL');
      }
    }
  };

  const handleKeyUp = () => {
    if (inputValue === 'FAIL') {
      setInputValue('');
    }
  };

  const handleChange = (event) => {
    if (inputValue === 'FAIL') {
      setInputValue('');
    } else {
      setInputValue(event.target.value);
    }
  };

  const toggleSound = () => {
    setIsSoundOn((prevIsSoundOn) => {
      if (!prevIsSoundOn) {
        correctLetterAudio.play();
        incorrectLetterAudio.play();
        passedThresholdAudio.play();
        failedThresholdAudio.play();
      } else {
        correctLetterAudio.pause();
        incorrectLetterAudio.pause();
        passedThresholdAudio.pause();
        failedThresholdAudio.pause();
        correctLetterAudio.currentTime = 0;
        incorrectLetterAudio.currentTime = 0;
        passedThresholdAudio.currentTime = 0;
        failedThresholdAudio.currentTime = 0;
      }
      return !prevIsSoundOn;
    });
  };




  const handleChallengeChange = (event) => {
    const selectedChallenge = Number(event.target.value);
    setChallenge(selectedChallenge);
    setInputValue('');
    setIsNextKeyValid(true);
    setNextKey(generateRandomKey(selectedChallenge));
  };

  const startTimer = () => {
    dispatch(startTyping());
    setTimer(setTimeout(() => {
      stopTimer();
      dispatch(stopTyping());
    }, 300000)); // 5 minutes
  };

  const stopTimer = () => {
    clearTimeout(timer);
    setTimer(null);
  };

  const handleKeyDown = (e) => {
    if (!timer) startTimer();

    const key = e.key.toLowerCase();
    currentKey(key);

    if (key === 'a' || key === 's' || key === 'd' || key === 'f' || key === 'j' || key === 'k' || key === 'l' || key === ';') {
      dispatch(updateKeyCount());
    }
  };
  const handleSubmit = () => {
    if (inputValue === nextKey) {
      // Handle correct submission logic here
      console.log('Correct submission');
      // Reset the typed keys
      setInputValue('');
      // Generate a new random key
      setNextKey(generateRandomKey(challenge));
    } else {
      // Handle incorrect submission logic here
      console.log('Incorrect submission');
      // Set inputValue to 'FAIL' to display failure message in TypingBox
      setInputValue('FAIL');
    }
  };

  const handleKeyPressChallenge = (e) => {
    const { key } = e;
    if (key === currentKey) {
      dispatch(updateAccuracy(true));
    } else {
      dispatch(updateAccuracy(false));
    }
  };

  return (
    <div className="container" style={{ background: 'linear-gradient(to right, #FF9A8B, #FF6A88)' }}>
      <header className="text-center mb-5">
        <h1>Touch Typing Application</h1>
        <p>Start typing without looking at the keyboard!</p>
        <div className="d-flex justify-content-end position-fixed top-0 end-0 mt-3 me-3">
          <button className="btn btn-secondary" onClick={toggleSound}>
            Sound {isSoundOn ? 'On' : 'Off'}
          </button>
        </div>

      </header>
      <main>
        <div className="row">
          <div className="col-md-6">
            <div className="card p-3">
              <TypingBox
                typedKeys={inputValue}
                handleKeyPress={handleKeyPress}
                handleKeyUp={handleKeyUp}
                handleChange={handleChange}
                setTypedKeys={setInputValue}
                maxInputLength={challenge}
                showFailureMessage={inputValue === 'FAIL'}
              />
              <div className="d-flex align-items-center mt-3">
                <NextKeyDisplay nextKey={nextKey} />
                {inputValue.length === nextKey.length && (
                  <button className="btn btn-success ms-3" onClick={() => setNextKey(generateRandomKey(challenge))}>
                    Pass
                  </button>
                )}
                {inputValue.length > 0 && inputValue.length < nextKey.length && (
                  <button className="btn btn-danger ms-3" onClick={() => setNextKey(generateRandomKey(challenge))}>
                    Fail
                  </button>
                )}
                {inputValue.length === nextKey.length && (
                  <button className="btn btn-primary ms-3" onClick={handleSubmit}>
                    Submit
                  </button>
                )}
              </div>

              <div className="form-group mt-3">
                <label htmlFor="challengeSelect">Challenge:</label>
                <select id="challengeSelect" className="form-control" value={challenge} onChange={handleChallengeChange}>
                  <option value="1">1 Word Key</option>
                  <option value="2">2 Word Key</option>
                  <option value="3">3 Word Key</option>
                  <option value="4">4 Word Key</option>
                  <option value="5">5 Word Key</option>
                  <option value="6">6 Word Key</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3">
              <div className="card-body">
                <Statistics keyCount={keyCount} accuracy={reduxAccuracy} timer={timer} startTimer={startTimer} stopTimer={stopTimer} isSoundOn={isSoundOn} />

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
