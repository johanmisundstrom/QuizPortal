// Array med alla quiz-frågor
const questions = [
    {
        question: "Vad står DOM för?",
        options: ["Document Object Model", "Data Object Management", "Digital Object Model", "Document Orientation Method"],
        correct: 0,
        explanation: "DOM står för Document Object Model och representerar webbsidans struktur som ett träd av objekt"
    },
    {
        question: "Vilken metod används för att hitta det första elementet som matchar en CSS-väljare?",
        options: ["getElementById()", "querySelector()", "getElementsByClassName()", "findElement()"],
        correct: 1,
        explanation: "querySelector() returnerar det första elementet som matchar en CSS-väljare"
    },
    {
        question: "Vilken datatyp är 'Hello World'?",
        options: ["Number", "Boolean", "String", "Object"],
        correct: 2,
        explanation: "Text inom citationstecken är datatypen String"
    },
    {
        question: "Vad returnerar typeof null i JavaScript?",
        options: ["'null'", "'undefined'", "'object'", "'boolean'"],
        correct: 2,
        explanation: "typeof null returnerar 'object' vilket är ett känt quirk i JavaScript"
    },
    {
        question: "Hur skapar man en kommentar på en rad i JavaScript?",
        options: ["<!-- kommentar -->", "/* kommentar */", "// kommentar", "# kommentar"],
        correct: 2,
        explanation: "// används för enradskommentarer i JavaScript"
    },
    {
        question: "Vilken metod används för att lägga till ett element i slutet av en array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0,
        explanation: "push() lägger till ett element i slutet av en array"
    },
    {
        question: "Vad är skillnaden mellan let och const?",
        options: ["Ingen skillnad", "let kan inte ändras, const kan ändras", "const kan inte ändras, let kan ändras", "let har global scope, const har block scope"],
        correct: 2,
        explanation: "const skapar en variabel som inte kan tilldelas om, medan let kan ändras"
    },
    {
        question: "Vilket event triggas när användaren klickar på ett element?",
        options: ["mousedown", "click", "press", "touch"],
        correct: 1,
        explanation: "click-eventet triggas när användaren klickar på ett element"
    },
    {
        question: "Vad returnerar console.log('5' + 3)?",
        options: ["8", "53", "'53'", "Error"],
        correct: 2,
        explanation: "JavaScript konverterar 3 till en sträng och konkatenerar, vilket ger '53'"
    },
    {
        question: "Hur skapar man en funktion i JavaScript?",
        options: ["function myFunc() {}", "def myFunc() {}", "func myFunc() {}", "create function myFunc() {}"],
        correct: 0,
        explanation: "function nyckelordet används för att skapa funktioner i JavaScript"
    },
    {
        question: "Vilken metod används för att omvandla en sträng till versaler?",
        options: ["toUpper()", "toUpperCase()", "uppercase()", "upper()"],
        correct: 1,
        explanation: "toUpperCase() konverterar alla bokstäver i en sträng till versaler"
    },
    {
        question: "Vad är Event-Driven Programming?",
        options: ["Programmering som körs i sekvens", "Programmering som styrs av händelser", "Programmering utan funktioner", "Programmering med loopar"],
        correct: 1,
        explanation: "Event-Driven Programming är när kodens exekvering styrs av händelser som användarinteraktioner"
    },
    {
        question: "Vilken loop används när man inte vet hur många gånger loopen ska köras?",
        options: ["for loop", "while loop", "do-while loop", "foreach loop"],
        correct: 1,
        explanation: "while loop fortsätter tills villkoret blir falskt, bra när antalet iterationer är okänt"
    },
    {
        question: "Vad gör metoden slice() på en array?",
        options: ["Tar bort element", "Extraherar en del av arrayen utan att ändra originalet", "Sorterar arrayen", "Lägger till element"],
        correct: 1,
        explanation: "slice() extraherar en del av arrayen och returnerar en ny array utan att ändra originalet"
    },
    {
        question: "Vilket nyckelord används för att kasta ett undantag?",
        options: ["throw", "error", "exception", "catch"],
        correct: 0,
        explanation: "throw används för att kasta ett undantag i JavaScript"
    },
    {
        question: "Vad returnerar Array.isArray([1, 2, 3])?",
        options: ["false", "true", "undefined", "null"],
        correct: 1,
        explanation: "Array.isArray() returnerar true eftersom argumentet är en array"
    },
    {
        question: "Hur får man tillgång till det tredje elementet i en array?",
        options: ["array[3]", "array[2]", "array.get(3)", "array.item(2)"],
        correct: 1,
        explanation: "Arrays är nollindexerade, så det tredje elementet har index 2"
    },
    {
        question: "Vad är Node.js?",
        options: ["Ett JavaScript-bibliotek", "En runtime-miljö för att köra JavaScript på servern", "Ett ramverk för frontend", "En databas"],
        correct: 1,
        explanation: "Node.js är en runtime-miljö som låter dig köra JavaScript utanför webbläsaren"
    },
    {
        question: "Vilken metod används för att ta bort det sista elementet från en array?",
        options: ["shift()", "pop()", "remove()", "delete()"],
        correct: 1,
        explanation: "pop() tar bort och returnerar det sista elementet från en array"
    },
    {
        question: "Vad gör addEventListener()?",
        options: ["Skapar ett nytt element", "Kopplar en händelsehanterare till ett element", "Tar bort ett element", "Ändrar CSS"],
        correct: 1,
        explanation: "addEventListener() kopplar en händelsehanterare som lyssnar efter specifika events"
    },
    {
        question: "Vilken metod används för att kombinera alla element i en array till en sträng?",
        options: ["combine()", "join()", "concat()", "merge()"],
        correct: 1,
        explanation: "join() sammanfogar alla element i en array till en sträng med en valfri separator"
    },
    {
        question: "Vad är skillnaden mellan == och === i JavaScript?",
        options: ["Ingen skillnad", "== jämför värde och typ, === jämför bara värde", "=== jämför värde och typ, == jämför bara värde", "== är för strängar, === är för nummer"],
        correct: 2,
        explanation: "=== jämför både värde och datatyp (strikt likhet), == jämför bara värde"
    },
    {
        question: "Vilket event triggas när en användare släpper en tangent?",
        options: ["keydown", "keypress", "keyup", "keyrelease"],
        correct: 2,
        explanation: "keyup-eventet triggas när användaren släpper en tangent"
    },
    {
        question: "Vad gör metoden filter() på en array?",
        options: ["Sorterar arrayen", "Skapar en ny array med element som passerar ett test", "Tar bort alla element", "Ändrar varje element"],
        correct: 1,
        explanation: "filter() skapar en ny array med alla element som passerar testet i callback-funktionen"
    },
    {
        question: "Hur skapar man ett objekt i JavaScript?",
        options: ["let obj = []", "let obj = {}", "let obj = ()", "let obj = new Array()"],
        correct: 1,
        explanation: "Måsvingar {} används för att skapa objekt i JavaScript"
    },
    {
        question: "Vad gör metoden map() på en array?",
        options: ["Filtrerar element", "Skapar en ny array genom att kalla en funktion på varje element", "Sorterar arrayen", "Tar bort dubbletter"],
        correct: 1,
        explanation: "map() skapar en ny array genom att applicera en funktion på varje element"
    },
    {
        question: "Vilket scope har variabler deklarerade med var?",
        options: ["Block scope", "Function scope", "Global scope alltid", "Module scope"],
        correct: 1,
        explanation: "var har function scope, till skillnad från let och const som har block scope"
    },
    {
        question: "Vad returnerar parseInt('123px')?",
        options: ["123px", "123", "NaN", "Error"],
        correct: 1,
        explanation: "parseInt() extraherar heltalet från början av strängen och returnerar 123"
    },
    {
        question: "Vilken metod används för att hitta indexet för ett element i en array?",
        options: ["find()", "search()", "indexOf()", "locate()"],
        correct: 2,
        explanation: "indexOf() returnerar indexet för det första förekomsten av ett element i en array"
    },
    {
        question: "Vad är callback-funktioner i JavaScript?",
        options: ["Funktioner som anropas automatiskt", "Funktioner som skickas som argument till andra funktioner", "Funktioner som returnerar andra funktioner", "Funktioner utan parametrar"],
        correct: 1,
        explanation: "En callback är en funktion som skickas som argument till en annan funktion och anropas senare"
    }
];

// Håller koll på vilken fråga vi är på
let currentQuestion = 0;
// Sparar alla användarens svar
let userAnswers = new Array(questions.length).fill(null);

// Visar frågan på skärmen
function loadQuestion() {
    const question = questions[currentQuestion];
    
    document.getElementById('question-number').textContent = `Fråga ${currentQuestion + 1} av ${questions.length}`;
    document.getElementById('question-text').textContent = question.question;
    
    // Rensar gamla alternativ och skapar nya
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.dataset.index = index;
        optionDiv.setAttribute('tabindex', '0'); // Gör så man kan tabba till alternativet
        optionDiv.setAttribute('role', 'button'); // Berättar för skärmläsare att det är en knapp
        
        // Om användaren redan valt detta alternativ, markera det
        if (userAnswers[currentQuestion] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.textContent = option;
        optionsContainer.appendChild(optionDiv);
    });
    
    updateProgress();
    updateButtons();
}

// Event delegation - en eventlyssnare för alla alternativ istället för en för varje
document.querySelector('#options').addEventListener('click', function(event) {
    if (event.target.classList.contains('option')) {
        const index = parseInt(event.target.dataset.index);
        selectAnswer(index);
    }
});

// Samma som ovan men för tangentbord (Enter och Space)
document.querySelector('#options').addEventListener('keydown', function(event) {
    if (event.target.classList.contains('option')) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Stoppar Space från att scrolla
            const index = parseInt(event.target.dataset.index);
            selectAnswer(index);
        }
    }
});

// När användaren väljer ett svar
function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    loadQuestion(); // Laddar om så markeringen syns
}

// Uppdaterar progress bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

// Uppdaterar knapparna (disable/enable och text)
function updateButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Disable föregående-knappen om vi är på första frågan
    prevBtn.disabled = currentQuestion === 0;
    
    // Ändrar text på knappen beroende på om det är sista frågan
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

// Kollar om användaren svarat på allt innan avslut
function finishQuiz() {
    const unanswered = userAnswers.filter(a => a === null).length;
    
    if (unanswered > 0) {
        showError(`Du har ${unanswered} obesvarade frågor. Vänligen svara på alla frågor innan du avslutar.`);
        return;
    }
    
    showResults();
}

// Visar felmeddelande högst upp på sidan
function showError(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Döljer meddelandet efter 5 sekunder
    setTimeout(() => {
        errorDiv.classList.add('hidden');
    }, 5000);
}

// Visar resultat när quizet är klart
function showResults() {
    document.getElementById('quiz-section').classList.add('hidden');
    document.getElementById('results-section').classList.remove('hidden');
    
    // Räknar hur många rätt användaren fick
    let correctCount = 0;
    questions.forEach((q, i) => {
        if (userAnswers[i] === q.correct) {
            correctCount++;
        }
    });
    
    const percentage = Math.round((correctCount / questions.length) * 100);
    
    document.getElementById('score').textContent = `${correctCount} / ${questions.length}`;
    
    // Visar olika meddelanden beroende på resultat
    let message = '';
    if (percentage >= 90) {
        message = 'Utmärkt! Du behärskar JavaScript!';
    } else if (percentage >= 70) {
        message = 'Bra jobbat! Du har god kunskap om JavaScript!';
    } else if (percentage >= 50) {
        message = 'Godkänt! Fortsätt öva för att bli bättre!';
    } else {
        message = 'Du behöver studera mer JavaScript. Fortsätt öva!';
    }
    document.getElementById('score-message').textContent = message;
    
    displayReview();
}

// Visar genomgång av alla frågor och svar
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

// Startar om quizet från början
function restartQuiz(event) {
    if (event) event.preventDefault();
    
    currentQuestion = 0;
    userAnswers = new Array(questions.length).fill(null);
    document.querySelector('#quiz-section').classList.remove('hidden');
    document.querySelector('#results-section').classList.add('hidden');
    loadQuestion();
}

// Kopplar funktioner till knapparna
document.getElementById('prev-btn').addEventListener('click', previousQuestion);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('restart-btn').addEventListener('click', restartQuiz);

// Startar quizet när sidan laddas
loadQuestion();