// js-avancerat.js — Frågor för kursen "JavaScript Avancerat & Ramverk"
const questions = [
    {
        question: "Vad är en 'closure' i JavaScript?",
        options: ["En funktion som inte kan anropas", "En funktion som har tillgång till variabler i sitt omslutande scope", "En loop som avslutas tidigt", "Ett objekt som är låst"],
        correct: 1,
        explanation: "En closure är en funktion som 'stänger in' variabler från sitt omslutande scope och kan komma åt dem även efter att det yttre scopet avslutats."
    },
    {
        question: "Vad returnerar följande kod: typeof function(){}?",
        options: ["'object'", "'function'", "'callable'", "'undefined'"],
        correct: 1,
        explanation: "typeof på en funktion returnerar strängen 'function' i JavaScript."
    },
    {
        question: "Vad är 'hoisting' i JavaScript?",
        options: ["Att flytta kod till en annan fil", "Att variabel- och funktionsdeklarationer lyfts till toppen av sitt scope", "Att importera moduler", "Att optimera koden vid kompilering"],
        correct: 1,
        explanation: "Hoisting innebär att JS-motorn lyfter deklarationer (inte initieringar) till toppen av sitt scope innan koden körs."
    },
    {
        question: "Vad är skillnaden mellan == och === i JavaScript?",
        options: ["Ingen skillnad", "== jämför värde, === jämför värde OCH typ", "=== är snabbare", "== används bara för strängar"],
        correct: 1,
        explanation: "== gör typkonvertering innan jämförelse, medan === kräver att både värde och typ är identiska."
    },
    {
        question: "Vad är ett Promise i JavaScript?",
        options: ["En synkron funktion", "En variabel som aldrig ändras", "Ett objekt som representerar ett framtida (asynkront) resultat", "En typ av loop"],
        correct: 2,
        explanation: "Ett Promise representerar ett värde som kanske inte är tillgängligt än, men kommer att finnas i framtiden (eller misslyckas)."
    },
    {
        question: "Vilket nyckelord används för att vänta på ett Promise i en async-funktion?",
        options: ["wait", "pause", "await", "hold"],
        correct: 2,
        explanation: "await används inuti en async-funktion för att pausera körningen tills ett Promise är löst."
    },
    {
        question: "Vad gör Array.prototype.reduce()?",
        options: ["Tar bort dubbletter", "Reducerar arrayens storlek med hälften", "Ackumulerar alla värden i arrayen till ett enda värde", "Sorterar arrayen"],
        correct: 2,
        explanation: "reduce() itererar över arrayen och ackumulerar ett resultat med hjälp av en callback-funktion och ett startvärde."
    },
    {
        question: "Vad är 'event bubbling'?",
        options: ["Att skapa animationer", "Att ett event propagerar uppåt i DOM-trädet från barnelement till förälder", "Att flera events triggas samtidigt", "Att stoppa ett event"],
        correct: 1,
        explanation: "Event bubbling innebär att när ett event triggas på ett element, bubblar det uppåt genom DOM-trädet och triggar samma event på förälderelement."
    },
    {
        question: "Vad gör event.stopPropagation()?",
        options: ["Förhindrar standardbeteendet för ett event", "Stoppar eventet från att bubbla uppåt", "Tar bort event-lyssnaren", "Pausar alla events"],
        correct: 1,
        explanation: "stopPropagation() förhindrar att eventet fortsätter bubbla upp eller ner i DOM-trädet."
    },
    {
        question: "Vad är 'destructuring' i ES6?",
        options: ["Att ta bort ett objekt", "Att extrahera värden från arrays/objekt till egna variabler med kortare syntax", "Att komprimera kod", "Att importera moduler"],
        correct: 1,
        explanation: "Destructuring låter dig packa upp värden från arrays eller objekt till distinkta variabler: const {name, age} = person;"
    },
    {
        question: "Vad är 'spread operator' (...) i JavaScript?",
        options: ["Gör division", "Sprider ut ett iterabelt objekt till individuella element", "Skapar en kopia av en funktion", "Kommenterar kod"],
        correct: 1,
        explanation: "Spread-operatorn (...) expanderar ett itererbart objekt till individuella element, t.ex. [...arr1, ...arr2] slår ihop arrays."
    },
    {
        question: "Vad är skillnaden mellan 'call' och 'apply' i JavaScript?",
        options: ["Ingen skillnad", "call tar argument ett och ett, apply tar argument som en array", "apply är snabbare", "call används bara på klasser"],
        correct: 1,
        explanation: "Båda anropar en funktion med ett specifikt 'this', men call tar argument individuellt (func.call(ctx, a, b)) och apply tar en array (func.apply(ctx, [a, b]))."
    },
    {
        question: "Vad är en 'higher-order function'?",
        options: ["En funktion som körs på servern", "En funktion som tar en annan funktion som argument eller returnerar en funktion", "En funktion med fler än 5 parametrar", "En rekursiv funktion"],
        correct: 1,
        explanation: "Higher-order functions tar funktioner som argument och/eller returnerar funktioner. Exempel: map(), filter(), reduce()."
    },
    {
        question: "Vad gör Object.freeze()?",
        options: ["Sparar objektet till disk", "Förhindrar att ett objekt kan modifieras", "Kopierar ett objekt", "Serialiserar ett objekt till JSON"],
        correct: 1,
        explanation: "Object.freeze() gör ett objekt immutabelt — man kan inte lägga till, ta bort eller ändra properties."
    },
    {
        question: "Vad är 'optional chaining' (?.) i JavaScript?",
        options: ["En typ av loop", "Läser en property utan att kasta fel om mellanliggande värde är null/undefined", "Skapar ett optional objekt", "En metod för att jämföra objekt"],
        correct: 1,
        explanation: "Optional chaining (?.) gör att du kan läsa djupt nästlade properties utan att riskera TypeError om något i kedjan är null/undefined."
    },
    {
        question: "Vad är 'nullish coalescing operator' (??) i JavaScript?",
        options: ["Kontrollerar om ett värde är null", "Returnerar höger operand om vänster är null eller undefined", "Jämför två null-värden", "Skapar en nullbar variabel"],
        correct: 1,
        explanation: "?? returnerar höger sida om vänster sida är null eller undefined, till skillnad från || som reagerar på alla falsy-värden."
    },
    {
        question: "Vad är skillnaden mellan setTimeout och setInterval?",
        options: ["Ingen skillnad", "setTimeout körs en gång efter en fördröjning, setInterval körs upprepade gånger", "setInterval är asynkront, setTimeout inte", "setTimeout är nyare"],
        correct: 1,
        explanation: "setTimeout körs en gång efter angiven tid, medan setInterval fortsätter att köra med samma intervall tills det stoppas med clearInterval."
    },
    {
        question: "Vad är 'currying' i JavaScript?",
        options: ["En typ av asynkron programmering", "Att omvandla en funktion med flera argument till en kedja av funktioner med ett argument vardera", "Att formatera kod", "Att importera moduler"],
        correct: 1,
        explanation: "Currying omvandlar f(a, b, c) till f(a)(b)(c) — varje anrop returnerar en ny funktion tills alla argument är givna."
    },
    {
        question: "Vad är Web Storage API?",
        options: ["Ett API för att spara filer på servern", "localStorage och sessionStorage — möjlighet att spara data i webbläsaren", "Ett API för att komprimera data", "Ett API för webbkameran"],
        correct: 1,
        explanation: "Web Storage API innehåller localStorage (persistent) och sessionStorage (per session) för att lagra nyckel-värde-par i webbläsaren."
    },
    {
        question: "Vad är Fetch API?",
        options: ["Ett sätt att hämta bilder", "En modern metod för att göra HTTP-anrop som returnerar ett Promise", "En del av Node.js", "Ett verktyg för att installera paket"],
        correct: 1,
        explanation: "Fetch API är ett modernt webbläsar-API för att göra HTTP-anrop. Det returnerar ett Promise och ersätter den äldre XMLHttpRequest."
    },
    {
        question: "Vad är CORS?",
        options: ["En CSS-egenskap", "Cross-Origin Resource Sharing — säkerhetsmekanism som kontrollerar resurser från andra domäner", "En JavaScript-funktion", "En webbläsartillägg"],
        correct: 1,
        explanation: "CORS (Cross-Origin Resource Sharing) är en säkerhetspolicy som begränsar vilka webbplatser som kan hämta resurser från en annan domän."
    },
    {
        question: "Vad gör JSON.stringify()?",
        options: ["Konverterar en sträng till JSON", "Konverterar ett JavaScript-objekt till en JSON-sträng", "Validerar JSON", "Komprimerar data"],
        correct: 1,
        explanation: "JSON.stringify() serialiserar ett JavaScript-objekt eller värde till en JSON-formaterad sträng."
    },
    {
        question: "Vad är en 'pure function'?",
        options: ["En funktion utan parametrar", "En funktion som alltid ger samma output för samma input och inte har sidoeffekter", "En funktion som bara returnerar booleaner", "En arrow function"],
        correct: 1,
        explanation: "En pure function ger alltid samma resultat för samma argument och påverkar inte tillstånd utanför sig själv (inga sidoeffekter)."
    },
    {
        question: "Vad är 'memoization'?",
        options: ["Att skriva kommentarer", "En optimeringsstrategi där resultaten av dyra funktionsanrop sparas och återanvänds", "Att memorera API-nycklar", "Att komprimera minnesanvändning"],
        correct: 1,
        explanation: "Memoization cachelagrar resultaten av funktionsanrop baserat på indata, så att identiska anrop inte beräknas om."
    },
    {
        question: "Vad är skillnaden mellan shallow copy och deep copy?",
        options: ["Ingen skillnad", "Shallow copy kopierar bara toppnivån, nested objekt delas. Deep copy kopierar hela strukturen rekursivt", "Deep copy är långsammare och bör undvikas", "Shallow copy används bara för arrays"],
        correct: 1,
        explanation: "Shallow copy (t.ex. Object.assign, spread) kopierar bara toppnivåns properties. Nästlade objekt pekar fortfarande på samma referens. Deep copy skapar helt oberoende kopior."
    }
];

initQuiz(questions);
