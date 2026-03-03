// frontend-ramverk.js — Frågor för "Frontend Ramverk: React & Angular"
const questions = [
    // --- REACT ---
    {
        question: "Vad är React?",
        options: ["Ett fullstack-ramverk", "Ett JavaScript-bibliotek för att bygga användargränssnitt", "En databas", "Ett CSS-ramverk"],
        correct: 1,
        explanation: "React är ett JavaScript-bibliotek (inte ett fullständigt ramverk) utvecklat av Meta, fokuserat på att bygga UI-komponenter."
    },
    {
        question: "Vad är JSX i React?",
        options: ["En ny version av JavaScript", "En syntax-utökning som låter dig skriva HTML-liknande kod i JavaScript", "En pakethanterare", "En typ av CSS"],
        correct: 1,
        explanation: "JSX är en syntaxutökning för JavaScript som ser ut som HTML. Det kompileras till React.createElement()-anrop."
    },
    {
        question: "Vad är en 'komponent' i React?",
        options: ["En CSS-klass", "En återanvändbar, självständig bit av UI-kod som kan ta emot props", "En databastabell", "En HTTP-anrop"],
        correct: 1,
        explanation: "En React-komponent är en oberoende och återanvändbar kodblocka som returnerar JSX och kan ta emot data via props."
    },
    {
        question: "Vad är 'props' i React?",
        options: ["Interna variabler i en komponent", "Data som skickas från en föräldrakomponent till en barnkomponent", "CSS-egenskaper", "Metoder för att hämta data"],
        correct: 1,
        explanation: "Props (properties) är data som skickas ned från förälder till barn. De är readonly — barnet ska inte modifiera sina props."
    },
    {
        question: "Vad är 'state' i React?",
        options: ["Extern data från ett API", "Intern data i en komponent som kan ändras och triggar omrendering", "En CSS-klass", "En route"],
        correct: 1,
        explanation: "State är lokal data i en komponent. När state ändras renderas komponenten om automatiskt med de nya värdena."
    },
    {
        question: "Vilket hook används för att hantera state i en funktionskomponent?",
        options: ["useEffect", "useContext", "useRef", "useState"],
        correct: 3,
        explanation: "useState är det primära hookret för att lägga till state i en funktionskomponent: const [count, setCount] = useState(0);"
    },
    {
        question: "Vad gör useEffect-hookret?",
        options: ["Skapar en ny state-variabel", "Kör sidoeffekter (t.ex. API-anrop, prenumerationer) efter rendering", "Hanterar formulär", "Skapar en context"],
        correct: 1,
        explanation: "useEffect låter dig utföra sidoeffekter i funktionskomponenter. Det körs efter rendering och kan rensa upp efter sig när komponenten avmonteras."
    },
    {
        question: "Vad är Virtual DOM i React?",
        options: ["En kopia av databasen", "En lätt, in-memory representation av det verkliga DOM som React använder för effektiva uppdateringar", "En speciell webbläsare", "En typ av komponent"],
        correct: 1,
        explanation: "Virtual DOM är en lightweight kopia av det riktiga DOM. React jämför (diffar) Virtual DOM-versioner och uppdaterar bara de delar av riktiga DOM som faktiskt ändrats."
    },
    {
        question: "Vad är skillnaden mellan en 'controlled' och 'uncontrolled' komponent i React?",
        options: ["Ingen skillnad", "Controlled: React state styr input-värdet. Uncontrolled: DOM hanterar värdet via ref", "Controlled är snabbare", "Uncontrolled används bara för knappar"],
        correct: 1,
        explanation: "I en controlled komponent kontrolleras input av React state. I en uncontrolled komponent hanteras formulärvärdet av DOM självt, och man accessar det via useRef."
    },
    {
        question: "Vad är React Context API?",
        options: ["En databas inbyggd i React", "Ett sätt att dela data globalt utan att behöva skicka props genom varje komponentnivå", "En router", "Ett CSS-ramverk"],
        correct: 1,
        explanation: "Context API låter dig skapa ett globalt state som är tillgängligt för alla komponenter i ett träd, utan prop drilling."
    },
    {
        question: "Vad är 'prop drilling'?",
        options: ["En teknik för att optimera props", "Att behöva skicka props genom många komponenter som inte behöver dem, bara för att nå en djupt nästlad komponent", "Att ta bort onödiga props", "En typ av event-hantering"],
        correct: 1,
        explanation: "Prop drilling sker när data måste skickas via props genom flera komponentnivåer, även om mellannivåerna inte använder datan — det gör koden svårunderhållen."
    },
    {
        question: "Vad är React Router?",
        options: ["En inbyggd del av React", "Ett tredjepartsbibliotek för att hantera URL-routing i React-appar", "En state manager", "En HTTP-klient"],
        correct: 1,
        explanation: "React Router är ett populärt bibliotek för klientside routing. Det låter dig mappa URL-paths till specifika komponenter."
    },
    // --- ANGULAR ---
    {
        question: "Vad är Angular?",
        options: ["Ett JavaScript-bibliotek för UI", "Ett fullständigt TypeScript-baserat frontend-ramverk utvecklat av Google", "En CSS-preprocessor", "Ett backend-ramverk"],
        correct: 1,
        explanation: "Angular är ett komplett frontend-ramverk från Google, skrivet i TypeScript. Det inkluderar routing, formulärhantering, HTTP-klient och mer inbyggt."
    },
    {
        question: "Vilket programmeringsspråk används primärt i Angular?",
        options: ["JavaScript", "CoffeeScript", "TypeScript", "Dart"],
        correct: 2,
        explanation: "Angular är byggt på och primärt använder TypeScript — ett statiskt typad superset av JavaScript."
    },
    {
        question: "Vad är en 'komponent' i Angular?",
        options: ["En CSS-klass", "En klass dekorerad med @Component som kontrollerar en del av UI", "En HTTP-tjänst", "En router-konfiguration"],
        correct: 1,
        explanation: "En Angular-komponent är en TypeScript-klass med @Component-dekoratorn. Den har en template (HTML), styles (CSS) och logik (TS)."
    },
    {
        question: "Vad är 'dependency injection' i Angular?",
        options: ["Att lägga till npm-paket", "Ett designmönster där beroenden (services) levereras utifrån istället för att skapas inuti klassen", "Att injicera CSS i komponenter", "Att importera moduler"],
        correct: 1,
        explanation: "Dependency Injection (DI) är Angulars centrala designmönster. Istället för att en komponent skapar sina egna beroenden ber den ramverket om dem via konstruktorn."
    },
    {
        question: "Vad är en 'service' i Angular?",
        options: ["En komponent utan template", "En klass med @Injectable som innehåller delad logik och data, t.ex. API-anrop", "En HTML-template", "En routing-guard"],
        correct: 1,
        explanation: "Services i Angular är klasser med @Injectable() som kan injiceras i komponenter och andra services. De används för delad logik, API-kommunikation och state-hantering."
    },
    {
        question: "Vad är 'two-way data binding' i Angular?",
        options: ["Att binda CSS till HTML", "Att data flödar i båda riktningar mellan komponent-logik och template, med [(ngModel)]", "Att koppla två komponenter", "Att synkronisera med en databas"],
        correct: 1,
        explanation: "Two-way binding med [(ngModel)] gör att ändringar i ett formulärfält direkt uppdaterar komponentens property, och vice versa."
    },
    {
        question: "Vad är skillnaden mellan *ngIf och *ngFor?",
        options: ["De gör samma sak", "*ngIf visar/döljer ett element baserat på ett villkor, *ngFor itererar över en lista", "*ngFor är nyare", "*ngIf används bara i formulär"],
        correct: 1,
        explanation: "*ngIf är ett structural directive som villkorligt renderar ett element. *ngFor är ett structural directive som renderar ett element för varje objekt i en lista."
    },
    {
        question: "Vad är en Angular 'module' (NgModule)?",
        options: ["En npm-modul", "En container som grupperar komponenter, direktiv, pipes och services som hör ihop", "En HTTP-modul", "En testfil"],
        correct: 1,
        explanation: "NgModules organiserar en Angular-app i sammanhängande block. Varje app har minst en root module (AppModule), och funktioner kan delas upp i feature modules."
    },
    {
        question: "Vad är ett Angular 'Observable' och varifrån kommer det?",
        options: ["En speciell typ av Promise, inbyggt i Angular", "En dataström från RxJS-biblioteket som Angular använder för asynkrona operationer", "En Angular-specifik loop", "En typ av event-lyssnare"],
        correct: 1,
        explanation: "Observables kommer från RxJS och representerar en ström av data över tid. Angular använder dem i t.ex. HttpClient och routing för att hantera asynkrona operationer."
    },
    // --- JÄMFÖRELSER ---
    {
        question: "Vad är en viktig skillnad mellan React och Angular?",
        options: ["React är gratis, Angular kostar pengar", "React är ett UI-bibliotek, Angular är ett komplett ramverk med inbyggda lösningar för routing, formulär m.m.", "Angular är äldre än React", "React använder TypeScript, Angular JavaScript"],
        correct: 1,
        explanation: "React är ett fokuserat UI-bibliotek — du väljer själv övriga delar (router, state management). Angular är opinionated och inkluderar allt inbyggt."
    },
    {
        question: "Vad är 'component lifecycle' i React och Angular?",
        options: ["Hur länge ett projekt lever", "De faser en komponent går igenom: skapas, uppdateras och avmonteras", "Hur komponentens CSS laddas", "Versionshantering av komponenter"],
        correct: 1,
        explanation: "Komponentlivscykeln beskriver faserna mounting (skapas), updating (data ändras) och unmounting (tas bort från DOM). Båda ramverken erbjuder hooks/lifecycle-metoder för att köra kod i dessa faser."
    },
    {
        question: "Vad är 'state management' och varför behövs det i stora applikationer?",
        options: ["Hantering av CSS-states", "Ett strukturerat sätt att hantera delat applikationstillstånd, eftersom props/services inte räcker i komplexa appar", "Versionshantering av kod", "Hantering av nätverksanrop"],
        correct: 1,
        explanation: "I stora appar kan det bli svårt att hålla data i sync via props/services. State management-bibliotek som Redux (React) eller NgRx (Angular) skapar en enda källan till sanning."
    },
    {
        question: "Vad är NPM och varför är det centralt för React/Angular-utveckling?",
        options: ["Node Package Manager — används för att installera och hantera externa bibliotek och verktyg", "En webbserver för React", "En Angular-specifik pakethanterare", "En typ av databas"],
        correct: 0,
        explanation: "NPM (Node Package Manager) är det centrala verktyget för att installera paket som react, @angular/core och tusentals andra bibliotek som moderna webbappar bygger på."
    }
];

initQuiz(questions);
