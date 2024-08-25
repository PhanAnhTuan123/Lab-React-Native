<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guessing Game</title>
    <style>
        body {
            background-color: #222;
            color: white;
            font-family: Arial, sans-serif;
        }
        .number {
            width: 15rem;
            height: 15rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #333;
            border-radius: 50%;
            font-size: 6rem;
            color: #fff;
        }
        .message, .score, .guess {
            font-size: 1.5rem;
        }
        .again {
            font-size: 1.5rem;
            padding: 0.5rem 1rem;
            background-color: #555;
            border: none;
            color: white;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="message">Start guessing...</div>
    <div class="number">?</div>
    <div class="score">Score: 20</div>
    <input class="guess" type="number" placeholder="Enter a number">
    <button class="again">Again!</button>

    <script>
        // Constants
        const INITIAL_SCORE = 20;
        const INITIAL_BACKGROUND_COLOR = '#222';
        const INITIAL_NUMBER_WIDTH = '15rem';

        // Select elements
        const elements = {
            message: document.querySelector('.message'),
            number: document.querySelector('.number'),
            score: document.querySelector('.score'),
            guessInput: document.querySelector('.guess'),
            againButton: document.querySelector('.again')
        };

        // Initialize game state
        let state = {
            score: INITIAL_SCORE,
            secretNumber: generateSecretNumber()
        };

        // Function to generate a new secret number
        function generateSecretNumber() {
            return Math.trunc(Math.random() * 20) + 1;
        }

        // Function to reset the game
        function resetGame() {
            state = {
                score: INITIAL_SCORE,
                secretNumber: generateSecretNumber()
            };

            elements.message.textContent = 'Start guessing...';
            elements.number.textContent = '?';
            elements.score.textContent = `Score: ${state.score}`;
            elements.guessInput.value = '';

            document.body.style.backgroundColor = INITIAL_BACKGROUND_COLOR;
            elements.number.style.width = INITIAL_NUMBER_WIDTH;
        }

        // Attach click event handler to the 'Again!' button
        elements.againButton.addEventListener('click', resetGame);

        // For demonstration purposes, log initial state
        console.log('Initial Secret Number:', state.secretNumber);
        console.log('Initial Score:', state.score);
    </script>
</body>
</html>
