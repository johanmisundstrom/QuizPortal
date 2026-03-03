const QUIZ_DURATION = 60 * 60; // 60 minuter

let currentQuestion = 0;
let userAnswers = [];
let shuffledQuestions = [];
let timerInterval = null;
let secondsRemaining = QUIZ_DURATION;

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
    sessionStorage.setItem(key, JSON.stringify({ currentQuestion, userAnswers, secondsRemaining }));
}

function loadProgress() {
    const key = `quiz_${document.title}`;
    const saved = sessionStorage.getItem(key);
    if (saved) {
        const data = JSON.parse(saved);
        currentQuestion = data.currentQuestion;
        userAnswers = data.userAnswers;
        secondsRemaining = data.secondsRemaining ?? QUIZ_DURATION;
        return true;
    }
    return false;
}

function clearProgress() {
    sessionStorage.removeItem(`quiz_${document.title}`);
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        secondsRemaining--;
        saveProgress();
        updateTimerDisplay();
        if (secondsRemaining <= 0) {
            clearInterval(timerInterval);
            showResults(true);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimerDisplay() {
    const el = document.getElementById('timer');
    if (!el) return;
    el.textContent = formatTime(secondsRemaining);
    el.classList.toggle('timer-warning', secondsRemaining <= 300);
}

function calculateScore() {
    return shuffledQuestions.filter((q, i) => userAnswers[i] === q.correct).length;
}

function updateLiveScore() {
    const el = document.getElementById('live-score');
    if (!el) return;
    const correct = calculateScore();
    const answered = userAnswers.filter(a => a !== null && a !== undefined).length;
    el.textContent = `Poäng: ${correct} / ${shuffledQuestions.length}  (${answered} besvarade)`;
}

function loadQuestion() {
    const q = shuffledQuestions[currentQuestion];
    const total = shuffledQuestions.length;

    document.getElementById('question-number').textContent = `Fråga ${currentQuestion + 1} av ${total}`;
    document.getElementById('question-text').textContent = q.question;
    document.getElementById('progress').style.width = `${((currentQuestion + 1) / total) * 100}%`;

    updateLiveScore();

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.textContent = option;
        btn.setAttribute('tabindex', '0');

        const answered = userAnswers[currentQuestion] !== null && userAnswers[currentQuestion] !== undefined;
        if (answered) {
            btn.disabled = true;
            if (index === q.correct) btn.classList.add('correct');
            else if (index === userAnswers[currentQuestion]) btn.classList.add('incorrect');
        } else {
            btn.addEventListener('click', () => selectAnswer(index));
            btn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectAnswer(index); }
            });
        }
        optionsContainer.appendChild(btn);
    });

    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    document.getElementById('next-btn').textContent = currentQuestion === total - 1 ? 'Se resultat' : 'Nästa';
    hideError();
}

function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    saveProgress();
    loadQuestion();
}

function hideError() {
    document.getElementById('error-message')?.classList.add('hidden');
}

function showError(msg) {
    const el = document.getElementById('error-message');
    if (!el) return;
    el.textContent = msg;
    el.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => el.classList.add('hidden'), 5000);
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
        stopTimer();
        showResults(false);
    }
}

function previousQuestion() {
    if (currentQuestion > 0) { currentQuestion--; saveProgress(); loadQuestion(); }
}

function showResults(timeRanOut = false) {
    stopTimer();
    clearProgress();
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('results-section').classList.remove('hidden');

    const correctCount = calculateScore();
    const total = shuffledQuestions.length;
    const answered = userAnswers.filter(a => a !== null && a !== undefined).length;
    const percentage = Math.round((correctCount / total) * 100);

    document.getElementById('score').textContent = `${correctCount} / ${total}`;
    document.getElementById('score-percent').textContent = `${percentage}%`;

    let message = timeRanOut
        ? `⏰ Tiden tog slut! Du hann svara på ${answered} av ${total} frågor.`
        : percentage >= 90 ? '🏆 Utmärkt! Du behärskar ämnet!'
        : percentage >= 70 ? '👍 Bra jobbat! Solid kunskap!'
        : percentage >= 50 ? '📚 Godkänt! Fortsätt öva!'
        : '💪 Du behöver studera mer. Fortsätt öva!';

    document.getElementById('score-message').textContent = message;

    const timeoutInfo = document.getElementById('timeout-info');
    if (timeoutInfo) {
        const unanswered = total - answered;
        if (timeRanOut && unanswered > 0) {
            timeoutInfo.textContent = `${unanswered} frågor hann inte besvaras och räknas som fel.`;
            timeoutInfo.classList.remove('hidden');
        } else {
            timeoutInfo.classList.add('hidden');
        }
    }

    displayReview();
}

function displayReview() {
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';

    shuffledQuestions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.correct;
        const isUnanswered = userAnswers[i] === null || userAnswers[i] === undefined;
        const item = document.createElement('div');
        item.className = `review-item ${isCorrect ? 'correct' : ''} ${isUnanswered ? 'unanswered' : ''}`;

        let html = `<div class="review-question">Fråga ${i + 1}: ${q.question}</div>`;
        if (isUnanswered) {
            html += `<div class="review-answer your-answer">⏰ Ej besvarad — tiden tog slut</div>
                     <div class="review-answer correct-answer">Rätt svar: ${q.options[q.correct]}</div>
                     <div class="review-explanation">${q.explanation}</div>`;
        } else if (!isCorrect) {
            html += `<div class="review-answer your-answer">Ditt svar: ${q.options[userAnswers[i]]}</div>
                     <div class="review-answer correct-answer">Rätt svar: ${q.options[q.correct]}</div>
                     <div class="review-explanation">${q.explanation}</div>`;
        } else {
            html += `<div class="review-answer correct-answer">✓ ${q.options[q.correct]}</div>`;
        }

        item.innerHTML = html;
        reviewList.appendChild(item);
    });
}

function restartQuiz() {
    stopTimer();
    currentQuestion = 0;
    secondsRemaining = QUIZ_DURATION;
    shuffledQuestions = shuffle(window.quizQuestions);
    userAnswers = new Array(shuffledQuestions.length).fill(null);
    document.getElementById('quiz-section').classList.remove('hidden');
    document.getElementById('results-section').classList.add('hidden');
    document.getElementById('timeout-info')?.classList.add('hidden');
    loadQuestion();
    startTimer();
}

function initQuiz(questions) {
    window.quizQuestions = questions;
    shuffledQuestions = shuffle(questions);
    userAnswers = new Array(shuffledQuestions.length).fill(null);

    const hadSaved = loadProgress();
    if (hadSaved && userAnswers.length !== shuffledQuestions.length) {
        userAnswers = new Array(shuffledQuestions.length).fill(null);
        currentQuestion = 0;
        secondsRemaining = QUIZ_DURATION;
    }

    document.getElementById('prev-btn').addEventListener('click', previousQuestion);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);

    loadQuestion();
    startTimer();
}
