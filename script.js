import quizQuestions from './questions.js';


const quizStartBtn = document.querySelector('.btn-container');
const landingPage = document.querySelector('.landing-page');
const questionPage = document.querySelector('.questions');
const question = document.querySelector('.question-section2').children[0];
const timerBox = document.querySelector('.timer');
const timer = document.querySelector('.timer').children[0];
const next = document.querySelector('.next');
const options = [...document.querySelectorAll('.option')];
const op = [...document.querySelectorAll('.op')];
const optionStatus = [...document.querySelectorAll('.answer-status')];
const questionNumber = document.querySelector(".ques-number").children[0];
const highestScore = document.querySelector('.score');
const resultPage = document.querySelector('.result-page');
const retry = document.querySelector('.retry-btn-container');
const resultCorrectBar = document.querySelector('.correct');
const resultIncorrectBar = document.querySelector('.wrong');
const resultPageScore = document.querySelector('.result-page-score');
const volume = document.querySelector('.header').children[1];
const resultQuote = document.querySelector('.result-quote');

// Initialize variables
let isquestionCompleted = false;
let timerId;
let listeners = [];
const totalTime = 29;
const totalQuestions = quizQuestions.length;
let score = parseInt(localStorage.getItem('score')) || 0;
let highScore = parseInt(localStorage.getItem('highScore')) || 0;
let i = parseInt(localStorage.getItem('currentIndex')) || 0;  // Track current question index
let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;
let isVolumeUp = true;

// Audio Setup
const correctSound = new Audio('correctAudio.mp3');
const incorrectSound = new Audio('wrongAudio.wav');
const questionLeft = new Audio('questionLeft.mp3')
const tickingBuzzer = new Audio('tickingbuzzer.mp3');
const backgroundMusic = new Audio('backgroundMusic.mp3')

correctSound.volume = 0.7;
incorrectSound.volume = 0.1;
questionLeft.volume = 0.5;
tickingBuzzer.volume = 0.15;
backgroundMusic.volume = 0.1;

correctSound.preload = 'auto';
incorrectSound.preload = 'auto';

// Function to play sound for a specified duration
const playSoundWithDuration = (sound, duration) => {
    if (isVolumeUp) {
        sound.currentTime = 0; // Reset sound to start
        sound.play(); // Play sound

        // Stop the sound after the specified duration
        setTimeout(() => {
            sound.pause(); // Pause the sound
            sound.currentTime = 0; // Reset time for next play
        }, duration);
    }
};

// Display correct answer's status
const displayCorrectAns = (correctIndex) => {
    optionStatus[correctIndex].style.visibility = 'visible';
    optionStatus[correctIndex].setAttribute('src', 'correct.svg');
    options[correctIndex].classList.add('correct-answer');
};

// Reset the question text and options
const resetQuestion = () => {
    timer.innerText = `30`;
    questionPage.style.backgroundColor = '#CCE2C2';
    timerBox.style.backgroundColor = '#02A4096E';
    next.style.color = '#01AB08';
    options.forEach((option) => {
        option.classList.remove('correct-answer');
        option.classList.remove('wrong-answer');
        option.classList.remove('left-answer');
    });
    questionNumber.innerText = i + 1 <= 9 ? `0${i + 1}/${totalQuestions}` : `${i + 1}/${totalQuestions}`;
    question.innerText = quizQuestions[i].question;
    op[0].innerText = quizQuestions[i].options[0];
    op[1].innerText = quizQuestions[i].options[1];
    op[2].innerText = quizQuestions[i].options[2];
    op[3].innerText = quizQuestions[i].options[3];
};

// Handle the answer selection
const handleAns = (opt) => {
    if (!isquestionCompleted) {
        if (opt === quizQuestions[i].correctAnswer) {
            // correctSound.play();
            playSoundWithDuration(correctSound, 100);
            displayCorrectAns(quizQuestions[i].correctAnswer);
            score++;
            localStorage.setItem('score', score);
            highScore = score > highScore ? score : highScore;
            localStorage.setItem('highScore', highScore)
        } else if (opt !== quizQuestions[i].correctAnswer) {
            playSoundWithDuration(incorrectSound, 200);
            optionStatus[opt].style.visibility = 'visible';
            optionStatus[opt].setAttribute('src', 'wrong.svg');
            options[opt].classList.add('wrong-answer');
            displayCorrectAns(quizQuestions[i].correctAnswer);
        }
        isquestionCompleted = true;
        currentIndex++;
        localStorage.setItem('currentIndex', currentIndex);

        clearInterval(timerId); // Stop the timer
    }
};

// Start the quiz and handle timer, reset
const startQuiz = () => {

    isquestionCompleted = false;  // Reset question completed status
    resetQuestion();
    optionStatus.forEach((option) => {
        option.style.visibility = 'hidden';  // Hide answer status
    });

    // Reset the timer for each question
    let cnt = totalTime;
    timerId = setInterval(() => {
        if (cnt === (totalTime + 1) / 6) {
            playSoundWithDuration(tickingBuzzer, 5000);   // Play buzzer sound
        }
        if (cnt <= (totalTime + 1) / 6) {

            questionPage.style.backgroundColor = '#DBADAD';
            timerBox.style.backgroundColor = '#C50C006E';
            next.style.color = '#C50000';
        }
        else if (cnt <= (totalTime + 1) / 2) {
            questionPage.style.backgroundColor = '#E4E5C7';
            timerBox.style.backgroundColor = '#C5B1006E';
            next.style.color = '#C58800';
        }

        if (cnt === 0) { // If time is up
            clearInterval(timerId); // Stop the timer
            optionStatus[quizQuestions[i].correctAnswer].style.visibility = 'visible'; // Show correct answer
            optionStatus[quizQuestions[i].correctAnswer].setAttribute('src', 'leftAnswer.svg');
            options[quizQuestions[i].correctAnswer].classList.add('left-answer'); // Mark correct answer
            questionLeft.play(); // Play time left sound
            questionLeft.currentTime = 0; // Reset time for next play
            isquestionCompleted = true; // Mark question as completed
            currentIndex++; // Move to next question
            localStorage.setItem('currentIndex', currentIndex); // Save current index
        }
        timer.innerText = cnt <= 9 ? `0${cnt}` : `${cnt}`; // Update timer display
        cnt--; // Decrement timer
    }, 1000);

    // Remove old event listeners
    listeners.forEach((listener, opt) => {
        options[opt].removeEventListener('click', listener);
    });

    // Clear old listeners
    listeners = [];

    // Add new event listeners
    options.forEach((option, opt) => {
        const handleOptionClick = () => handleAns(opt); // Define option click handler
        option.addEventListener('click', handleOptionClick); // Add click listener
        listeners.push(handleOptionClick);  // Store reference to the listener
    });
};

// Display high score if available
if (highScore != 0) {
    highestScore.style.visibility = 'visible';
    highestScore.innerText = highScore <= 9 ? `High Score : 0${highScore}/${totalQuestions}` : `High Score : ${highScore}/${totalQuestions}`;
}

// Function to display the result after the quiz
const resultDisplay = () => {
    questionPage.style.display = 'none';
    resultPage.style.display = 'flex';
    resultPageScore.innerText = score <= 9 ? `0${score}/${totalQuestions}` : `${score}/${totalQuestions}`
    const correctScore = score; // Number of correct answers
    const incorrectScore = totalQuestions - score; // Number of incorrect answers

    // Calculate percentages
    const correctPercentage = (correctScore / totalQuestions) * 100;
    const incorrectPercentage = (incorrectScore / totalQuestions) * 100;

    // Set the widths of the result bars
    resultCorrectBar.style.width = `${correctPercentage}%`;
    resultIncorrectBar.style.width = `${incorrectPercentage}%`;
    score = 0;
    localStorage.setItem('score', score);
    i = currentIndex = 0;
    localStorage.setItem('currentIndex', currentIndex);
    resultQuote.innerText = correctPercentage >= 50 ? 'Keep learning you have a good score' : correctPercentage >= 25 ? 'Keep practicing, and you’ll do even better next time!' : "Don't be discouraged! This is a great opportunity to learn and improve";
}

// Start the quiz on button click
quizStartBtn.addEventListener('click', () => {
    landingPage.style.display = 'none';

    if (i == totalQuestions) {
        backgroundMusic.pause();
        resultDisplay();
    }
    else {
        questionPage.style.display = 'flex';
        console.log(isVolumeUp);
        if (isVolumeUp) {
            backgroundMusic.volume = 0.1;
            backgroundMusic.loop = true;
            backgroundMusic.currentTime = 0;
            backgroundMusic.play();
        }
        startQuiz();
    }
});

// Event listener for the next button
next.addEventListener('click', () => {
    if (isquestionCompleted && i < totalQuestions - 1) {  // Move to next question if not last
        i++;  // Move to the next question
        startQuiz();  // Load the next question
    } else if (isquestionCompleted && i === totalQuestions - 1) {  // Last question is completed
        i++;  // Increment i to match totalQuestions
        const fadeAudio = setInterval(() => {
            if (backgroundMusic.volume != 0) {
                backgroundMusic.volume -= 0.05;
            }
            else {
                clearInterval(fadeAudio);
                backgroundMusic.pause();
            }
        }, 50)
        resultDisplay();
    }
});

// Event listener for the retry button
retry.addEventListener('click', () => {
    resultPage.style.display = 'none';
    landingPage.style.display = 'flex';
    score = 0;
    localStorage.setItem('score', score);
    i = currentIndex = 0;
    localStorage.setItem('currentIndex', currentIndex);
    highScore = localStorage.getItem('highScore');
    if (highScore != 0) {
        highestScore.style.visibility = 'visible';
        highestScore.innerText = highScore <= 9 ? `High Score : 0${highScore}/${totalQuestions}` : `High Score : ${highScore}/${totalQuestions}`;
    }

})

// Event listener for volume toggle
volume.addEventListener('click', () => {
    if (volume.getAttribute('src') == `volumeUp.svg`) {
        volume.setAttribute('src', `volumeMute.svg`);
        isVolumeUp = false;
        backgroundMusic.pause();
    }
    else {
        volume.setAttribute('src', `volumeUp.svg`);
        isVolumeUp = true;
        backgroundMusic.loop = true;
        backgroundMusic.play();
    }
})



