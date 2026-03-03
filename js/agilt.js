const questions = [
    {
        question: "Vad är projekttriangeln?",
        options: ["En typ av diagram", "Ett verktyg för estimering", "En modell för teamarbete", "Balansen mellan tid, kostnad och omfattning"],
        correct: 3,
        explanation: "Projekttriangeln illustrerar utmaningen med projektledningens tre begränsningar: tid, kostnad och omfattning (scope)"
    },
    {
        question: "Vilket påstående stämmer om projekttriangeln?",
        options: ["Kvalitet påverkas aldrig", "Det är omöjligt att justera en variabel utan att påverka de andra två", "Man kan ändra alla tre samtidigt", "Endast tid kan justeras"],
        correct: 1,
        explanation: "Det är omöjligt att justera en variabel i projekttriangeln utan att påverka de andra två"
    },
    {
        question: "Vad kännetecknar vattenfallsmodellen?",
        options: ["Dagliga möten", "Kontinuerliga leveranser", "Flexibel och iterativ", "Sekventiell med fasta faser"],
        correct: 3,
        explanation: "Vattenfallsmodellen är sekventiell där varje fas måste vara klar innan nästa börjar"
    },
    {
        question: "Vilken är en NACKDEL med vattenfallsmodellen?",
        options: ["Enkelt att förstå", "Tydliga faser", "Noggrann dokumentation", "Motståndskraftig mot förändring"],
        correct: 3,
        explanation: "Vattenfallsmodellen är ofta rigid och motståndskraftig mot förändring i projektet"
    },
    {
        question: "Vilka är de fyra värderingarna i det Agila Manifestet?",
        options: ["Snabbhet, kvalitet, kostnad och tid", "Individer och interaktioner, fungerande mjukvara, kundsamverkan och att reagera på förändring", "Planering, dokumentation, processer och struktur", "Kod, tester, design och deployment"],
        correct: 1,
        explanation: "Det Agila Manifestet värderar: Individer och interaktioner framför processer och verktyg, Fungerande mjukvara framför omfattande dokumentation, Kundsamverkan framför kontraktsförhandling, Att reagera på förändring framför att följa en plan"
    },
    {
        question: "Vilket år formulerades det Agila Manifestet?",
        options: ["2001", "1995", "2015", "2010"],
        correct: 0,
        explanation: "Det Agila Manifestet formulerades år 2001 av en grupp programvaruutvecklare"
    },
    {
        question: "Vad står MVP för?",
        options: ["Maximum Value Production", "Most Valuable Player", "Minimum Viable Product", "Minimum Value Process"],
        correct: 2,
        explanation: "MVP står för Minimum Viable Product - den minsta fungerande version av en produkt som kan användas för att testa antaganden"
    },
    {
        question: "Vilken roll är ansvarig för att facilitera möten och ta bort hinder för teamet?",
        options: ["Stakeholder", "Product Owner", "Scrum Master", "Utvecklare"],
        correct: 2,
        explanation: "Scrum Master faciliterar möten, tar bort hinder och ser till att Scrum-processen följs"
    },
    {
        question: "Vad är syftet med en Daily Standup?",
        options: ["Att utvärdera hela projektet", "Att planera hela sprinten", "Att ge en kort daglig avstämning och identifiera problem", "Att skriva dokumentation"],
        correct: 2,
        explanation: "Daily Standup är ett kort dagligt möte där teamet stämmer av vad de gjort, ska göra och om de har några hinder"
    },
    {
        question: "Vilka tre frågor besvaras typiskt i en Daily Standup?",
        options: ["Budget, tid, kvalitet", "Igår, idag, hinder", "Design, test, deploy", "Vad, var, när"],
        correct: 1,
        explanation: "I Daily Standup diskuteras: Vad gjorde jag igår? Vad ska jag göra idag? Finns det några hinder?"
    },
    {
        question: "Vad innebär 'fail fast, learn faster'?",
        options: ["Att arbeta långsamt och noggrant", "Att misslyckas snabbt för att lära sig och anpassa", "Att aldrig testa nya idéer", "Att undvika alla misstag"],
        correct: 1,
        explanation: "Fail fast, learn faster innebär att snabbt testa antaganden, upptäcka fel tidigt och lära sig för att kunna anpassa sig"
    },
    {
        question: "Vilken roll prioriterar vad som ska byggas och kommunicerar med intressenter?",
        options: ["Product Owner", "Testare", "Scrum Master", "Utvecklare"],
        correct: 0,
        explanation: "Product Owner är ansvarig för produktens värde, prioriterar backloggen och kommunicerar med intressenter"
    },
    {
        question: "Vad är en User Story?",
        options: ["En projektplan", "En beskrivning av en funktion från användarens perspektiv", "En detaljerad teknisk specifikation", "En lista med buggar"],
        correct: 1,
        explanation: "En User Story beskriver en funktion från användarens perspektiv, ofta i format: 'Som [roll] vill jag [funktion] för att [syfte]'"
    },
    {
        question: "Vilket format används för User Stories?",
        options: ["Do-Check-Act", "Given-When-Then", "As a [user], I want [functionality] so that [benefit]", "If-Then-Else"],
        correct: 2,
        explanation: "User Stories följer formatet: As a [description of user] I want to [functionality] so that [benefit]"
    },
    {
        question: "Vad är Kanban?",
        options: ["En projektledare", "Ett verktyg för att visualisera arbetsflöde", "En programmeringsspråk", "En testmetod"],
        correct: 1,
        explanation: "Kanban är ett verktyg som visualiserar arbetsflödet med kolumner som 'Att göra', 'Pågår' och 'Klart'"
    },
    {
        question: "Vilka tre kolumner är typiska i en Kanban-tavla?",
        options: ["Input, Process, Output", "Planerade, Arbetar med, Klar", "Budget, Tid, Kvalitet", "Design, Build, Test"],
        correct: 1,
        explanation: "Typiska kolumner är: Planerade arbetsuppgifter, Arbetar med, och Klar"
    },
    {
        question: "Vad händer i en Sprint Review?",
        options: ["Teamet visar vad de byggt och samlar feedback", "Teamet diskuterar sina känslor", "Teamet skriver kod", "Teamet planerar nästa sprint"],
        correct: 0,
        explanation: "I Sprint Review visar teamet för intressenter vad de byggt under sprinten och samlar in feedback"
    },
    {
        question: "Vad är syftet med ett Sprint Retrospective?",
        options: ["Att planera nästa sprint", "Att visa produkten för kunden", "Att skriva dokumentation", "Att utvärdera vad som gick bra och vad som kan förbättras"],
        correct: 3,
        explanation: "I Sprint Retrospective utvärderar teamet vad som gick bra, vad som kan förbättras och planerar förändringar"
    },
    {
        question: "Vad innebär Lean Just-In-Time (JIT)?",
        options: ["Att arbeta övertid", "Att ha många möten", "Att bara starta arbete när det verkligen behövs", "Att planera allt i förväg"],
        correct: 2,
        explanation: "JIT innebär att bara starta arbete när det faktiskt behövs, för att minska onödigt arbete och hålla fokus"
    },
    {
        question: "Vilken av dessa är INTE en del av Scrum?",
        options: ["Waterfall-fas", "Sprint Review", "Sprint Planning", "Daily Standup"],
        correct: 0,
        explanation: "Waterfall är en traditionell projektmetod, inte en del av Scrum som är agil"
    },
    {
        question: "Vad är Definition of Done?",
        options: ["Kriterier som bestämmer när en uppgift är färdig", "När alla buggar är fixade", "När kunden är nöjd", "När projektet är helt klart"],
        correct: 0,
        explanation: "Definition of Done är gemensamma kriterier som teamet använder för att avgöra när en uppgift är färdig"
    },
    {
        question: "Vad är en Produktbacklog?",
        options: ["En lista över färdiga funktioner", "En tidsplan", "En lista över buggar", "En prioriterad lista över allt som ska byggas"],
        correct: 3,
        explanation: "Produktbackloggen är en prioriterad lista över alla funktioner, förbättringar och bugfixar som ska göras"
    },
    {
        question: "Vilken princip från Agila Manifestet handlar om att omfamna förändring?",
        options: ["Dokumentation framför kod", "Fast planering framför flexibilitet", "Att reagera på förändring framför att följa en plan", "Processer framför individer"],
        correct: 2,
        explanation: "Det Agila Manifestet värderar att reagera på förändring framför att följa en fast plan"
    },
    {
        question: "Vad är Acceptance Criteria?",
        options: ["Villkor som måste uppfyllas för att en User Story ska vara klar", "En lista över teammedlemmar", "Regler för möten", "En budget"],
        correct: 0,
        explanation: "Acceptance Criteria är specifika villkor som måste vara uppfyllda för att en User Story ska anses vara färdig"
    },
    {
        question: "Vilket format används för Acceptance Criteria?",
        options: ["Given-When-Then", "As a-I want-So that", "If-Then-Else", "Do-Check-Act"],
        correct: 0,
        explanation: "Acceptance Criteria skrivs ofta i Given/When/Then format (Givet-När-Då)"
    },
    {
        question: "Vad innebär build-measure-learn i Lean Startup?",
        options: ["Bygga något, mäta resultat, lära sig och anpassa", "Mäta före man bygger", "Bygga färdigt, mäta tid, lära sig senare", "Bara bygga utan att testa"],
        correct: 0,
        explanation: "Build-measure-learn är en cykel där man bygger något minimalt, mäter användarresponsen och lär sig för att anpassa"
    },
    {
        question: "Vad händer i Sprint Planning?",
        options: ["Teamet planerar vilka uppgifter som ska göras i kommande sprint", "Teamet fixar buggar", "Teamet visar produkten", "Teamet utvärderar sprinten"],
        correct: 0,
        explanation: "I Sprint Planning bestämmer teamet vilka uppgifter från backloggen som ska genomföras under nästa sprint"
    },
    {
        question: "Vad är scope creep?",
        options: ["När teamet arbetar snabbare", "När nya funktioner läggs till utan planering och ökar projektets omfattning", "När projektet blir billigare", "När man tar bort funktioner"],
        correct: 1,
        explanation: "Scope creep innebär att projektets omfattning växer okontrollerat genom att nya funktioner läggs till"
    },
    {
        question: "Vad är en Sprint i Scrum?",
        options: ["En snabb löprunda", "En typ av dokument", "Ett möte", "En tidsbestämd period (ofta 1-4 veckor) där teamet arbetar"],
        correct: 3,
        explanation: "En Sprint är en tidsbestämd iteration, vanligtvis 1-4 veckor, där teamet arbetar med utvalda uppgifter"
    },
    {
        question: "Varför använder man Story Points?",
        options: ["För att uppskatta komplexitet och arbetsinsats relativt", "För att räkna timmar exakt", "För att sätta deadlines", "För att mäta hastighet i km/h"],
        correct: 0,
        explanation: "Story Points används för att uppskatta komplexitet och arbetsinsats relativt, inte exakta timmar"
    },
    {
        question: "Vad innebär 'kontinuerlig förbättring' i agilt arbete?",
        options: ["Att bara fokusera på ny kod", "Att regelbundet reflektera och anpassa arbetssättet", "Att undvika retrospektiv", "Att aldrig ändra något"],
        correct: 1,
        explanation: "Kontinuerlig förbättring innebär att teamet regelbundet reflekterar över sitt arbete och gör förbättringar"
    },
    {
        question: "Vilken är en fördel med agilt arbete jämfört med traditionellt?",
        options: ["Mindre flexibilitet", "Snabbare feedback och anpassning till förändringar", "Mer dokumentation", "Färre möten med kunden"],
        correct: 1,
        explanation: "Agilt arbete ger snabbare feedback-loopar och möjlighet att anpassa sig till förändringar"
    },
    {
        question: "Vad är SAFe?",
        options: ["Scaled Agile Framework", "Safety Agile Framework", "Simple Agile Format", "Secure Application Framework"],
        correct: 0,
        explanation: "SAFe står för Scaled Agile Framework och används för att skala agila metoder till större organisationer"
    },
    {
        question: "Vilka tre nivåer finns i SAFe?",
        options: ["Design, Build, Test", "Team, Program, Portfölj", "Junior, Senior, Expert", "Front, Middle, Back"],
        correct: 1,
        explanation: "SAFe är uppdelat i tre segment: Team, Program och Portfölj"
    },
    {
        question: "Vad är en stakeholder?",
        options: ["En projektmetod", "En typ av möte", "En intressent som påverkas av eller påverkar projektet", "En utvecklare i teamet"],
        correct: 2,
        explanation: "En stakeholder är en intressent som har ett intresse i projektet, exempelvis kunder, användare eller ledning"
    },
    {
        question: "Vad är validerat lärande i Lean Startup?",
        options: ["Att lära sig genom att testa antaganden med verkliga användare", "Att gissa vad användare vill ha", "Att läsa böcker", "Att följa en manual"],
        correct: 0,
        explanation: "Validerat lärande innebär att testa antaganden med verkliga användare och data istället för att gissa"
    },
    {
        question: "Vilken fråga besvarar man INTE i en Daily Standup?",
        options: ["Hur ska vi arkitekturera hela systemet?", "Har jag några hinder?", "Vad ska jag göra idag?", "Vad gjorde jag igår?"],
        correct: 0,
        explanation: "Daily Standup fokuserar på daglig uppdatering (igår, idag, hinder) - inte djupa tekniska diskussioner"
    },
    {
        question: "Vad är ett Epic?",
        options: ["En budget", "Ett testverktyg", "Ett kort möte", "En stor arbetsuppgift som kan brytas ner i flera User Stories"],
        correct: 3,
        explanation: "Epics är stora arbetsuppgifter som kan brytas ner i ett antal mindre uppgifter (User Stories)"
    },
    {
        question: "Vad är 'T-formad kompetens'?",
        options: ["Endast generell kunskap", "Specialistkunskap i ett område", "Ingen specifik kunskap", "Bred kunskap med djup expertis i ett område"],
        correct: 3,
        explanation: "T-formad kompetens innebär bred kunskap inom många områden med djup expertis inom ett specifikt område"
    },
    {
        question: "Hur många personer rekommenderas i ett Scrum-team?",
        options: ["3-9 personer", "Över 20 personer", "1-3 personer", "10-20 personer"],
        correct: 0,
        explanation: "Ett Scrum-team består vanligtvis av 3-9 personer, eller ca 10 eller färre"
    },
    {
        question: "Vad visar ett Burndown Diagram?",
        options: ["Mängden arbete som slutförts och kvarvarande arbete", "Kundnöjdhet", "Antal teammedlemmar", "Budgetförbrukning"],
        correct: 0,
        explanation: "Ett burndown diagram visar mängden arbete som har slutförts och det totala kvarvarande arbetet"
    },
    {
        question: "Vilken Lean-princip handlar om att eliminera slöseri?",
        options: ["Öka lagret", "Dokumentera allt", "Minimera slöseri och maximera värde", "Planera i detalj"],
        correct: 2,
        explanation: "Lean fokuserar på att minimera slöseri och maximera värde för kunden"
    },
    {
        question: "Vad är WIP (Work in Progress) i Kanban?",
        options: ["Budgeten", "Antalet färdiga uppgifter", "Totala projekttiden", "Mängden pågående arbete"],
        correct: 3,
        explanation: "WIP (Work in Progress) är mängden pågående arbete som teamet arbetar med samtidigt"
    },
    {
        question: "Vad är CYNEFIN Framework?",
        options: ["Ett testverktyg", "Ett programmeringsspråk", "En modell för att kategorisera olika typer av problem", "En budgetmetod"],
        correct: 2,
        explanation: "CYNEFIN är en modell som visar hur man kan kategorisera olika typer av problem (Enkelt, Komplex, Komplext, Kaotiskt)"
    },
    {
        question: "Vilket av följande är EN av Leans 7 slöserier?",
        options: ["Dokumentation", "Testning", "Samarbete", "Väntan"],
        correct: 3,
        explanation: "Väntan är en av Leans 7 onödiga slöserier som ska undvikas"
    },
    {
        question: "Vad innebär 'självorganiserade team'?",
        options: ["Ingen struktur alls", "Chefen bestämmer allt", "Inget ansvar", "Teamet bestämmer internt vem som gör vad, när och hur"],
        correct: 3,
        explanation: "Självorganiserade team bestämmer internt vem som gör vad, när och hur, utan hierarki"
    },
    {
        question: "Vilka är de tre rollerna i ett Scrum-team?",
        options: ["Scrum Master, Product Owner, Utvecklare", "Chef, Anställd, Praktikant", "Designer, Kodare, Testare", "Junior, Senior, Lead"],
        correct: 0,
        explanation: "Ett Scrum-team består av Scrum Master, Product Owner och Utvecklare"
    },
    {
        question: "Vad är ett Initiative i agil terminologi?",
        options: ["En samling av Epics som driver mot ett gemensamt mål", "Ett möte", "En enskild uppgift", "En budget"],
        correct: 0,
        explanation: "Initiativ är samlingar av Epics som driver mot ett gemensamt mål"
    },
    {
        question: "Vad betyder 'velocity' i Scrum?",
        options: ["Mängden arbete (Story Points) som teamet klarar per sprint", "Antal möten", "Hur snabbt teamet springer", "Projektbudgeten"],
        correct: 0,
        explanation: "Velocity är mängden arbete (mätt i Story Points) som ett team klarar av under en sprint"
    },
    {
        question: "Vilken projektmodell passar bäst när kraven är väldefinierade och fasta?",
        options: ["Scrum", "Kanban", "Vattenfallsmodellen", "Agil"],
        correct: 2,
        explanation: "Vattenfallsmodellen passar bäst för projekt med väldefinierade krav och fast omfattning"
    }
];
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
        message = 'Utmärkt! Du behärskar agilt arbete!';
    } else if (percentage >= 70) {
        message = 'Bra jobbat! Du har god kunskap om agila metoder!';
    } else if (percentage >= 50) {
        message = 'Godkänt! Fortsätt öva för att bli bättre!';
    } else {
        message = 'Du behöver studera mer agila metoder. Fortsätt öva!';
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
