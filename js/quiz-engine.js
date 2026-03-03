/**
 * quiz-engine.js — Gemensam quizmotor för alla quiz
 * Varje quiz-specifik fil anropar: initQuiz(questions, quizTitle)
 */

let currentQuestion = 0;
let userAnswers = [];
let shuffledQuestions = [];

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function saveProgress() {
    const key = `quiz_${document.title}`;
    sessionStorage.setItem(key, JSON.stringify({ currentQuestion, userAnswers }));
}

function loadProgress() {
    const key = `quiz_${document.title}`;
    const saved = sessionStorage.getItem(key);
    if (saved) {
        const data = JSON.parse(saved);
        currentQuestion = data.currentQuestion;
        userAnswers = data.userAnswers;
        return true;
    }
    return false;
}

function clearProgress() {
    const key = `quiz_${document.title}`;
    sessionStorage.removeItem(key);
}

function loadQuestion() {
    const q = shuffledQuestions[currentQuestion];
    const total = shuffledQuestions.length;

    document.getElementById('question-number').textContent = `Fråga ${currentQuestion + 1} av ${total}`;
    document.getElementById('question-text').textContent = q.question;

    const progress = ((currentQuestion + 1) / total) * 100;
    document.getElementById('progress').style.width = `${progress}%`;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.textContent = option;
        btn.setAttribute('tabindex', '0');

        if (userAnswers[currentQuestion] !== null && userAnswers[currentQuestion] !== undefined) {
            btn.disabled = true;
            if (index === q.correct) {
                btn.classList.add('correct');
            } else if (index === userAnswers[currentQuestion]) {
                btn.classList.add('incorrect');
            }
        } else {
            btn.addEventListener('click', () => selectAnswer(index));
            btn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectAnswer(index);
                }
            });
        }

        optionsContainer.appendChild(btn);
    });

    document.getElementById('prev-btn').disabled = currentQuestion === 0;

    const nextBtn = document.getElementById('next-btn');
    if (currentQuestion === total - 1) {
        nextBtn.textContent = 'Se resultat';
    } else {
        nextBtn.textContent = 'Nästa';
    }

    hideError();
}

function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    saveProgress();
    loadQuestion();
}

function hideError() {
    const errorDiv = document.getElementById('error-message');
    if (errorDiv) errorDiv.classList.add('hidden');
}

function showError(message) {
    const errorDiv = document.getElementById('error-message');
    if (!errorDiv) return;
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => errorDiv.classList.add('hidden'), 5000);
}

function nextQuestion() {
    if (userAnswers[currentQuestion] === null || userAnswers[currentQuestion] === undefined) {
        showError('Du måste svara på frågan innan du går vidare!');
        return;
    }
    if (currentQuestion < shuffledQuestions.length - 1) {
        currentQuestion++;
        saveProgress();
        loadQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        saveProgress();
        loadQuestion();
    }
}

function showResults() {
    clearProgress();
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('results-section').classList.remove('hidden');

    let correctCount = 0;
    shuffledQuestions.forEach((q, i) => {
        if (userAnswers[i] === q.correct) correctCount++;
    });

    const percentage = Math.round((correctCount / shuffledQuestions.length) * 100);
    document.getElementById('score').textContent = `${correctCount} / ${shuffledQuestions.length}`;
    document.getElementById('score-percent').textContent = `${percentage}%`;

    let message = '';
    if (percentage >= 90) message = '🏆 Utmärkt! Du behärskar ämnet!';
    else if (percentage >= 70) message = '👍 Bra jobbat! Solid kunskap!';
    else if (percentage >= 50) message = '📚 Godkänt! Fortsätt öva!';
    else message = '💪 Du behöver studera mer. Fortsätt öva!';

    document.getElementById('score-message').textContent = message;
    displayReview();
}

function displayReview() {
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';

    shuffledQuestions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.correct;
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : ''}`;

        let html = `<div class="review-question">Fråga ${i + 1}: ${q.question}</div>`;

        if (!isCorrect) {
            const userAnswerText = userAnswers[i] !== null && userAnswers[i] !== undefined
                ? q.options[userAnswers[i]]
                : 'Ej besvarad';
            html += `
                <div class="review-answer your-answer">Ditt svar: ${userAnswerText}</div>
                <div class="review-answer correct-answer">Rätt svar: ${q.options[q.correct]}</div>
                <div class="review-explanation">${q.explanation}</div>
            `;
        } else {
            html += `<div class="review-answer correct-answer">✓ ${q.options[q.correct]}</div>`;
        }

        reviewItem.innerHTML = html;
        reviewList.appendChild(reviewItem);
    });
}

function restartQuiz() {
    currentQuestion = 0;
    shuffledQuestions = shuffle(window.quizQuestions);
    userAnswers = new Array(shuffledQuestions.length).fill(null);
    document.getElementById('quiz-section').classList.remove('hidden');
    document.getElementById('results-section').classList.add('hidden');
    loadQuestion();
}

function initQuiz(questions) {
    window.quizQuestions = questions;
    shuffledQuestions = shuffle(questions);
    userAnswers = new Array(shuffledQuestions.length).fill(null);

    // Återställ sparad session om den finns
    const saved = loadProgress();
    if (saved) {
        // Validera att userAnswers har rätt längd (ifall frågorna ändrats)
        if (userAnswers.length !== shuffledQuestions.length) {
            userAnswers = new Array(shuffledQuestions.length).fill(null);
            currentQuestion = 0;
        }
    }

    document.getElementById('prev-btn').addEventListener('click', previousQuestion);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);

    loadQuestion();
}
