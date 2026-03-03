
let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);

function loadQuestion() {
    const question = questions[currentQuestion];
    
    document.getElementById('question-number').textContent = `Fråga ${currentQuestion + 1} av ${questions.length}`;
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.dataset.index = index;
        optionDiv.setAttribute('tabindex', '0');
        optionDiv.setAttribute('role', 'button');
        
        if (userAnswers[currentQuestion] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.textContent = option;
        optionsContainer.appendChild(optionDiv);
    });
    
    updateProgress();
    updateButtons();
}

document.querySelector('#options').addEventListener('click', function(event) {
    if (event.target.classList.contains('option')) {
        const index = parseInt(event.target.dataset.index);
        selectAnswer(index);
    }
});

document.querySelector('#options').addEventListener('keydown', function(event) {
    if (event.target.classList.contains('option')) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            const index = parseInt(event.target.dataset.index);
            selectAnswer(index);
        }
    }
});

function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    loadQuestion();
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function updateButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentQuestion === 0;
    
    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = 'Avsluta Quiz';
    } else {
        nextBtn.textContent = 'Nästa';
    }
}

function nextQuestion(event) {
    if (event) event.preventDefault();
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function previousQuestion(event) {
    if (event) event.preventDefault();
    
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function finishQuiz() {
    const unanswered = userAnswers.filter(a => a === null).length;
    
    if (unanswered > 0) {
        showError(`Du har ${unanswered} obesvarade frågor. Vänligen svara på alla frågor innan du avslutar.`);
        return;
    }
    
    showResults();
}

function showError(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
        errorDiv.classList.add('hidden');
    }, 5000);
}

function showResults() {
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('results-section').classList.remove('hidden');
    
    let correctCount = 0;
    questions.forEach((q, i) => {
        if (userAnswers[i] === q.correct) {
            correctCount++;
        }
    });
    
    const percentage = Math.round((correctCount / questions.length) * 100);
    
    document.getElementById('score').textContent = `${correctCount} / ${questions.length}`;
    
    let message = '';
    if (percentage >= 90) {
        message = 'Utmärkt! Du behärskar IT-grunderna!';
    } else if (percentage >= 70) {
        message = 'Bra jobbat! Du har god kunskap om IT!';
    } else if (percentage >= 50) {
        message = 'Godkänt! Fortsätt öva för att bli bättre!';
    } else {
        message = 'Du behöver studera mer IT-grunder. Fortsätt öva!';
    }
    document.getElementById('score-message').textContent = message;
    
    displayReview();
}

function displayReview() {
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    
    questions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.correct;
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : ''}`;
        
        let html = `<div class="review-question">Fråga ${i + 1}: ${q.question}</div>`;
        
        if (!isCorrect) {
            if (userAnswers[i] !== null) {
                html += `
                    <div class="review-answer your-answer">
                        Ditt svar: ${q.options[userAnswers[i]]}
                    </div>
                `;
            } else {
                html += `
                    <div class="review-answer your-answer">
                        Du svarade inte på denna fråga
                    </div>
                `;
            }
            html += `
                <div class="review-answer correct-answer">
                    Rätt svar: ${q.options[q.correct]}
                </div>
                <div style="margin-top: 10px; color: #666; font-style: italic;">
                    ${q.explanation}
                </div>
            `;
        } else {
            html += `
                <div class="review-answer correct-answer">
                    Rätt: ${q.options[q.correct]}
                </div>
            `;
        }
        
        reviewItem.innerHTML = html;
        reviewList.appendChild(reviewItem);
    });
}

function restartQuiz(event) {
    if (event) event.preventDefault();
    
    currentQuestion = 0;
    userAnswers = new Array(questions.length).fill(null);
    document.querySelector('#quiz-section').classList.remove('hidden');
    document.querySelector('#results-section').classList.add('hidden');
    loadQuestion();
}

document.getElementById('prev-btn').addEventListener('click', previousQuestion);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('restart-btn').addEventListener('click', restartQuiz);

loadQuestion();
