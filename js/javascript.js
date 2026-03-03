const questions = [
    {
        question: "Vad står DOM för?",
        options: ["Document Orientation Method", "Data Object Management", "Digital Object Model", "Document Object Model"],
        correct: 3,
        explanation: "DOM står för Document Object Model och representerar webbsidans struktur som ett träd av objekt"
    },
    {
        question: "Vilken metod används för att hitta det första elementet som matchar en CSS-väljare?",
        options: ["getElementById()", "findElement()", "getElementsByClassName()", "querySelector()"],
        correct: 3,
        explanation: "querySelector() returnerar det första elementet som matchar en CSS-väljare"
    },
    {
        question: "Vilken datatyp är 'Hello World'?",
        options: ["Boolean", "Object", "String", "Number"],
        correct: 2,
        explanation: "Text inom citationstecken är datatypen String"
    },
    {
        question: "Vad returnerar typeof null i JavaScript?",
        options: ["'object'", "'null'", "'undefined'", "'boolean'"],
        correct: 0,
        explanation: "typeof null returnerar 'object' vilket är ett känt quirk i JavaScript"
    },
    {
        question: "Hur skapar man en kommentar på en rad i JavaScript?",
        options: ["# kommentar", "// kommentar", "/* kommentar */", "<!-- kommentar -->"],
        correct: 1,
        explanation: "// används för enradskommentarer i JavaScript"
    },
    {
        question: "Vilken metod används för att lägga till ett element i slutet av en array?",
        options: ["shift()", "pop()", "unshift()", "push()"],
        correct: 3,
        explanation: "push() lägger till ett element i slutet av en array"
    },
    {
        question: "Vad är skillnaden mellan let och const?",
        options: ["const kan inte ändras, let kan ändras", "Ingen skillnad", "let har global scope, const har block scope", "let kan inte ändras, const kan ändras"],
        correct: 0,
        explanation: "const skapar en variabel som inte kan tilldelas om, medan let kan ändras"
    },
    {
        question: "Vilket event triggas när användaren klickar på ett element?",
        options: ["touch", "click", "press", "mousedown"],
        correct: 1,
        explanation: "click-eventet triggas när användaren klickar på ett element"
    },
    {
        question: "Vad returnerar console.log('5' + 3)?",
        options: ["'53'", "53", "Error", "8"],
        correct: 0,
        explanation: "JavaScript konverterar 3 till en sträng och konkatenerar, vilket ger '53'"
    },
    {
        question: "Hur skapar man en funktion i JavaScript?",
        options: ["create function myFunc() {}", "def myFunc() {}", "function myFunc() {}", "func myFunc() {}"],
        correct: 2,
        explanation: "function nyckelordet används för att skapa funktioner i JavaScript"
    },
    {
        question: "Vilken metod används för att omvandla en sträng till versaler?",
        options: ["toUpperCase()", "upper()", "uppercase()", "toUpper()"],
        correct: 0,
        explanation: "toUpperCase() konverterar alla bokstäver i en sträng till versaler"
    },
    {
        question: "Vad är Event-Driven Programming?",
        options: ["Programmering med loopar", "Programmering som styrs av händelser", "Programmering som körs i sekvens", "Programmering utan funktioner"],
        correct: 1,
        explanation: "Event-Driven Programming är när kodens exekvering styrs av händelser som användarinteraktioner"
    },
    {
        question: "Vilken loop används när man inte vet hur många gånger loopen ska köras?",
        options: ["do-while loop", "foreach loop", "while loop", "for loop"],
        correct: 2,
        explanation: "while loop fortsätter tills villkoret blir falskt, bra när antalet iterationer är okänt"
    },
    {
        question: "Vad gör metoden slice() på en array?",
        options: ["Sorterar arrayen", "Extraherar en del av arrayen utan att ändra originalet", "Lägger till element", "Tar bort element"],
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
        options: ["undefined", "false", "true", "null"],
        correct: 2,
        explanation: "Array.isArray() returnerar true eftersom argumentet är en array"
    },
    {
        question: "Hur får man tillgång till det tredje elementet i en array?",
        options: ["array.get(3)", "array.item(2)", "array[3]", "array[2]"],
        correct: 3,
        explanation: "Arrays är nollindexerade, så det tredje elementet har index 2"
    },
    {
        question: "Vad är Node.js?",
        options: ["Ett ramverk för frontend", "En databas", "En runtime-miljö för att köra JavaScript på servern", "Ett JavaScript-bibliotek"],
        correct: 2,
        explanation: "Node.js är en runtime-miljö som låter dig köra JavaScript utanför webbläsaren"
    },
    {
        question: "Vilken metod används för att ta bort det sista elementet från en array?",
        options: ["shift()", "remove()", "pop()", "delete()"],
        correct: 2,
        explanation: "pop() tar bort och returnerar det sista elementet från en array"
    },
    {
        question: "Vad gör addEventListener()?",
        options: ["Ändrar CSS", "Skapar ett nytt element", "Tar bort ett element", "Kopplar en händelsehanterare till ett element"],
        correct: 3,
        explanation: "addEventListener() kopplar en händelsehanterare som lyssnar efter specifika events"
    },
    {
        question: "Vilken metod används för att kombinera alla element i en array till en sträng?",
        options: ["combine()", "concat()", "merge()", "join()"],
        correct: 3,
        explanation: "join() sammanfogar alla element i en array till en sträng med en valfri separator"
    },
    {
        question: "Vad är skillnaden mellan == och === i JavaScript?",
        options: ["=== jämför värde och typ, == jämför bara värde", "== jämför värde och typ, === jämför bara värde", "Ingen skillnad", "== är för strängar, === är för nummer"],
        correct: 0,
        explanation: "=== jämför både värde och datatyp (strikt likhet), == jämför bara värde"
    },
    {
        question: "Vilket event triggas när en användare släpper en tangent?",
        options: ["keydown", "keyrelease", "keyup", "keypress"],
        correct: 2,
        explanation: "keyup-eventet triggas när användaren släpper en tangent"
    },
    {
        question: "Vad gör metoden filter() på en array?",
        options: ["Sorterar arrayen", "Ändrar varje element", "Skapar en ny array med element som passerar ett test", "Tar bort alla element"],
        correct: 2,
        explanation: "filter() skapar en ny array med alla element som passerar testet i callback-funktionen"
    },
    {
        question: "Hur skapar man ett objekt i JavaScript?",
        options: ["let obj = []", "let obj = ()", "let obj = {}", "let obj = new Array()"],
        correct: 2,
        explanation: "Måsvingar {} används för att skapa objekt i JavaScript"
    },
    {
        question: "Vad gör metoden map() på en array?",
        options: ["Sorterar arrayen", "Skapar en ny array genom att kalla en funktion på varje element", "Tar bort dubbletter", "Filtrerar element"],
        correct: 1,
        explanation: "map() skapar en ny array genom att applicera en funktion på varje element"
    },
    {
        question: "Vilket scope har variabler deklarerade med var?",
        options: ["Function scope", "Block scope", "Module scope", "Global scope alltid"],
        correct: 0,
        explanation: "var har function scope, till skillnad från let och const som har block scope"
    },
    {
        question: "Vad returnerar parseInt('123px')?",
        options: ["123", "123px", "Error", "NaN"],
        correct: 0,
        explanation: "parseInt() extraherar heltalet från början av strängen och returnerar 123"
    },
    {
        question: "Vilken metod används för att hitta indexet för ett element i en array?",
        options: ["indexOf()", "find()", "locate()", "search()"],
        correct: 0,
        explanation: "indexOf() returnerar indexet för det första förekomsten av ett element i en array"
    },
    {
        question: "Vad är callback-funktioner i JavaScript?",
        options: ["Funktioner som skickas som argument till andra funktioner", "Funktioner utan parametrar", "Funktioner som anropas automatiskt", "Funktioner som returnerar andra funktioner"],
        correct: 0,
        explanation: "En callback är en funktion som skickas som argument till en annan funktion och anropas senare"
    },
    {
        question: "Hur skriver man en for-loop i JavaScript?",
        options: ["for (i = 0; i < 10; i++)", "loop (i = 0 to 10)", "for i in range(10)", "repeat 10 times"],
        correct: 0,
        explanation: "En for-loop i JavaScript använder syntaxen: for (initiering; villkor; uppdatering)"
    },
    {
        question: "Vad är en if-sats?",
        options: ["En loop", "En villkorlig sats som kör kod om ett villkor är sant", "En funktion", "En variabel"],
        correct: 1,
        explanation: "En if-sats kör kod bara om ett specifikt villkor är sant"
    },
    {
        question: "Hur delar man upp en sträng i en array?",
        options: ["split()", "divide()", "separate()", "break()"],
        correct: 0,
        explanation: "split() delar upp en sträng i en array baserat på en separator"
    },
    {
        question: "Vad gör metoden toLowerCase()?",
        options: ["Gör alla bokstäver stora", "Gör alla bokstäver små", "Tar bort mellanslag", "Vänder på strängen"],
        correct: 1,
        explanation: "toLowerCase() konverterar alla bokstäver i en sträng till gemener (små bokstäver)"
    },
    {
        question: "Vad returnerar Math.floor(4.7)?",
        options: ["4", "5", "4.7", "Error"],
        correct: 0,
        explanation: "Math.floor() avrundar nedåt till närmaste heltal, så 4.7 blir 4"
    },
    {
        question: "Hur får man längden på en array?",
        options: ["array.size", "array.count", "array.length", "array.size()"],
        correct: 2,
        explanation: "array.length returnerar antalet element i en array"
    },
    {
        question: "Vad är skillnaden mellan null och undefined?",
        options: ["Ingen skillnad", "null är avsiktligt tomt, undefined betyder att variabeln inte har tilldelats ett värde", "undefined är avsiktligt tomt, null betyder ej tilldelat", "Båda är samma sak"],
        correct: 1,
        explanation: "null är ett avsiktligt tomt värde, medan undefined betyder att variabeln inte har tilldelats något värde ännu"
    },
    {
        question: "Vad används template literals för?",
        options: ["Kommentarer", "Strängar med variabler inbäddade", "Loopar", "Funktioner"],
        correct: 1,
        explanation: "Template literals (backticks) används för att skapa strängar med inbäddade variabler: `Hello ${name}`"
    },
    {
        question: "Vilken operator används för logiskt OCH?",
        options: ["&", "&&", "AND", "and"],
        correct: 1,
        explanation: "Operatorn && används för logiskt OCH i JavaScript"
    },
    {
        question: "Vilken operator används för logiskt ELLER?",
        options: ["|", "||", "OR", "or"],
        correct: 1,
        explanation: "Operatorn || används för logiskt ELLER i JavaScript"
    },
    {
        question: "Vad gör operatorn ! (utropstecken)?",
        options: ["Addition", "Negering (NOT)", "Multiplikation", "Jämförelse"],
        correct: 1,
        explanation: "Operatorn ! negerar ett booleskt värde (NOT), så !true blir false"
    },
    {
        question: "Hur kommer man åt en property i ett objekt?",
        options: ["object->property", "object.property eller object['property']", "object::property", "object@property"],
        correct: 1,
        explanation: "Man kommer åt properties med punkt-notation (object.property) eller bracket-notation (object['property'])"
    },
    {
        question: "Vad är ternary operator?",
        options: ["En loop", "En kortform för if-else: villkor ? värde1 : värde2", "En funktion", "En array-metod"],
        correct: 1,
        explanation: "Ternary operator är en kortform för if-else: (age >= 18) ? 'vuxen' : 'barn'"
    },
    {
        question: "Vad gör metoden includes() på en array?",
        options: ["Lägger till element", "Kollar om ett element finns i arrayen", "Tar bort element", "Sorterar arrayen"],
        correct: 1,
        explanation: "includes() returnerar true om elementet finns i arrayen, annars false"
    },
    {
        question: "Vad returnerar Math.random()?",
        options: ["Ett heltal mellan 0 och 10", "Ett decimaltal mellan 0 och 1", "Ett heltal mellan 1 och 100", "Alltid 0.5"],
        correct: 1,
        explanation: "Math.random() returnerar ett slumpmässigt decimaltal mellan 0 (inklusivt) och 1 (exklusivt)"
    }
];


initQuiz(questions);
