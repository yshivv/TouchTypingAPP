# Touch Typing Application

This is a React application for practicing touch typing skills. It provides a typing box where users can type without looking at the keyboard, and it generates random key sequences that need to be typed accurately to progress in the challenge. The application also includes features such as sound effects, statistics tracking, and a timer.

## Installation

To use this application, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running the command: `npm install`.
4. Start the application with the command: `npm start`.
5. Open your web browser and access the application at `http://localhost:3000`.

Make sure you have Node.js and npm installed on your machine before proceeding with the installation.

## Usage

Once the application is running, you can start typing in the provided typing box. The application will generate a random key sequence based on the selected challenge level. The goal is to type the keys accurately and progress to the next challenge level.

### Features

- Typing Box: Displays the current key sequence and allows users to type.
- Next Key Display: Shows the next key(s) that need to be typed.
- Statistics: Displays information such as key count, accuracy, and timer.
- Sound Effects: Plays sound effects for correct and incorrect key presses.
- Challenge Level: Allows users to select the challenge level (number of words in the key sequence).
- Timer: Tracks the time elapsed during typing practice.
- Submit: Allows users to submit their typed key sequence for evaluation.

### Keyboard Controls

- Typing: Press the corresponding keys on the keyboard to type the displayed key sequence.
- Pass: Click the "Pass" button when the entire key sequence has been typed correctly.
- Fail: Click the "Fail" button if the current key sequence is incorrect.
- Submit: Click the "Submit" button to submit the typed key sequence for evaluation.

### Configuration

The application provides configuration options for sound settings and challenge levels.

- Sound On/Off: Click the "Sound On/Off" button to toggle sound effects.
- Challenge Level: Select the desired challenge level from the dropdown menu.

## Dependencies

The following dependencies are required to run this application:

- React
- react-bootstrap
- redux
- react-redux

These dependencies will be installed automatically when you run the installation command mentioned earlier.

## Credits

This application was developed by Shivpal Yadav as a project for touch typing practice. It utilizes React, Redux, and Bootstrap for the implementation.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.
