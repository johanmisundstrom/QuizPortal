const questions = [
    {
        question: "Vad står HTML för?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        correct: 0,
        explanation: "HTML står för HyperText Markup Language och är språket för att strukturera webbsidor"
    },
    {
        question: "Vilken HTML-tagg används för att skapa en hyperlänk?",
        options: ["<link>", "<href>", "<a>", "<url>"],
        correct: 2,
        explanation: "<a> (anchor) används för att skapa hyperlänkar med href-attributet"
    },
    {
        question: "Vad står CSS för?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"],
        correct: 1,
        explanation: "CSS står för Cascading Style Sheets och används för att styla HTML-element"
    },
    {
        question: "Vilken CSS-egenskap används för att ändra textfärg?",
        options: ["text-color", "font-color", "color", "foreground-color"],
        correct: 2,
        explanation: "Egenskapen 'color' används för att ändra textfärgen på ett element"
    },
    {
        question: "Vad är en pseudoklass?",
        options: ["En falsk CSS-klass", "En selektor som riktar sig mot ett specifikt tillstånd av ett element", "En HTML-tagg", "En JavaScript-funktion"],
        correct: 1,
        explanation: "Pseudoklasser (:hover, :active, etc.) riktar sig mot element baserat på deras tillstånd"
    },
    {
        question: "Vilket är rätt syntax för :hover pseudoklass?",
        options: ["a.hover { }", "a:hover { }", "a::hover { }", "a[hover] { }"],
        correct: 1,
        explanation: "Pseudoklasser använder ett kolon (:), till exempel a:hover"
    },
    {
        question: "Vad är skillnaden mellan ::before och ::after?",
        options: ["Ingen skillnad", "::before lägger till innehåll före, ::after lägger till efter", "::before är för text, ::after för bilder", "::after är föråldrad"],
        correct: 1,
        explanation: "::before lägger till innehåll före elementets innehåll, ::after lägger till efter"
    },
    {
        question: "Vilken enhet är relativ till rotelementets teckensnittsstorlek?",
        options: ["em", "rem", "px", "%"],
        correct: 1,
        explanation: "rem (root em) är alltid relativ till <html> elementets teckensnittsstorlek"
    },
    {
        question: "Vad är skillnaden mellan em och rem?",
        options: ["Ingen skillnad", "em är relativ till föräldern, rem till roten", "em är för text, rem för storlek", "rem är föråldrad"],
        correct: 1,
        explanation: "em är relativ till det direkta föräldraelementets storlek, rem till <html>-elementet"
    },
    {
        question: "Vilket värde för background-repeat gör att bilden inte upprepas?",
        options: ["repeat-none", "no-repeat", "none", "single"],
        correct: 1,
        explanation: "background-repeat: no-repeat gör att bakgrundsbilden inte upprepas"
    },
    {
        question: "Vilken CSS-egenskap används för att skapa en linjär gradient?",
        options: ["gradient", "linear-gradient", "background-gradient", "color-gradient"],
        correct: 1,
        explanation: "linear-gradient() används i background-egenskapen för att skapa linjära gradienter"
    },
    {
        question: "Vad används viewport meta-taggen till?",
        options: ["För SEO", "För att säkerställa korrekt skalning på olika enheter", "För att ladda CSS", "För att definiera språk"],
        correct: 1,
        explanation: "Viewport meta-taggen säkerställer korrekt skalning av webbinnehåll på olika enheter"
    },
    {
        question: "Vilken enhet är bäst för responsiv design?",
        options: ["px (pixlar)", "pt (points)", "Relativa enheter som %, em, rem", "cm (centimeter)"],
        correct: 2,
        explanation: "Relativa enheter som %, em och rem anpassar sig automatiskt efter skärmstorlek"
    },
    {
        question: "Vad gör display: flex?",
        options: ["Gör elementet osynligt", "Aktiverar Flexbox-layout", "Gör elementet fast", "Ändrar färgen"],
        correct: 1,
        explanation: "display: flex aktiverar Flexbox-layoutmodellen på elementet"
    },
    {
        question: "Vilka är de två axlarna i Flexbox?",
        options: ["X och Y", "Vertikal och horisontal", "Huvudaxeln (main axis) och korsaxeln (cross axis)", "Top och bottom"],
        correct: 2,
        explanation: "Flexbox har huvudaxeln (main axis) och korsaxeln (cross axis) som är perpendikulär mot huvudaxeln"
    },
    {
        question: "Vilken flex-direction gör att items staplas vertikalt?",
        options: ["row", "vertical", "column", "stack"],
        correct: 2,
        explanation: "flex-direction: column staplar flex items vertikalt"
    },
    {
        question: "Vad gör justify-content: center i Flexbox?",
        options: ["Centrerar items på korsaxeln", "Centrerar items på huvudaxeln", "Centrerar texten", "Gör ingenting"],
        correct: 1,
        explanation: "justify-content styr justering längs huvudaxeln, center centrerar items där"
    },
    {
        question: "Vad gör align-items: center i Flexbox?",
        options: ["Centrerar items på huvudaxeln", "Centrerar items på korsaxeln", "Centrerar texten", "Ändrar färgen"],
        correct: 1,
        explanation: "align-items styr justering längs korsaxeln, center centrerar items där"
    },
    {
        question: "Vad gör flex-wrap: wrap?",
        options: ["Gör texten omsluten", "Låter flex items radbryta till nästa rad vid behov", "Omsluter containern", "Gör ingenting"],
        correct: 1,
        explanation: "flex-wrap: wrap låter flex items radbryta när det inte finns tillräckligt med utrymme"
    },
    {
        question: "Vad gör flex-grow?",
        options: ["Ökar teckensnittsstorleken", "Bestämmer hur mycket ett flex item ska växa", "Ökar marginalerna", "Ökar padding"],
        correct: 1,
        explanation: "flex-grow bestämmer hur mycket av tillgängligt utrymme ett flex item ska ta upp"
    },
    {
        question: "Vad är CSS Grid?",
        options: ["En 1-dimensionell layoutmodell", "En 2-dimensionell layoutmodell", "Ett JavaScript-bibliotek", "Ett designverktyg"],
        correct: 1,
        explanation: "CSS Grid är en 2-dimensionell layoutmodell som hanterar både kolumner och rader"
    },
    {
        question: "Hur aktiverar man CSS Grid på ett element?",
        options: ["display: grid", "grid: true", "layout: grid", "enable-grid"],
        correct: 0,
        explanation: "display: grid aktiverar CSS Grid på ett element"
    },
    {
        question: "Vad används grid-template-columns för?",
        options: ["Att definiera antalet rader", "Att definiera storleken på kolumner", "Att ändra färgen", "Att sätta padding"],
        correct: 1,
        explanation: "grid-template-columns definierar antalet och storleken på kolumner i en grid"
    },
    {
        question: "Vilken CSS-egenskap används för att sätta marginaler?",
        options: ["padding", "margin", "spacing", "border-spacing"],
        correct: 1,
        explanation: "margin används för att sätta utrymme UTANFÖR ett elements border"
    },
    {
        question: "Vad är skillnaden mellan margin och padding?",
        options: ["Ingen skillnad", "margin är utanför border, padding inuti", "margin är för text, padding för bilder", "padding är föråldrad"],
        correct: 1,
        explanation: "margin är utrymme utanför border, padding är utrymme inuti border runt innehållet"
    },
    {
        question: "Vilken CSS-egenskap används för att göra text fetstilt?",
        options: ["font-style", "text-weight", "font-weight", "text-bold"],
        correct: 2,
        explanation: "font-weight används för att ändra textvikt, t.ex. font-weight: bold"
    },
    {
        question: "Vad gör position: relative?",
        options: ["Placerar elementet relativt från sin normala position", "Gör elementet osynligt", "Tar bort elementet", "Centrerar elementet"],
        correct: 0,
        explanation: "position: relative låter dig flytta elementet relativt från där det normalt skulle vara"
    },
    {
        question: "Vad gör position: absolute?",
        options: ["Placerar elementet relativt sitt närmaste positionerade förälder", "Fixerar elementet i viewporten", "Gör elementet genomskinligt", "Tar bort elementet"],
        correct: 0,
        explanation: "position: absolute placerar elementet relativt sitt närmaste positionerade föräldraelement"
    },
    {
        question: "Vad gör position: fixed?",
        options: ["Fixar elementet relativt föräldern", "Fixar elementet i viewporten (syns alltid på samma plats)", "Gör elementet osynligt", "Tar bort elementet"],
        correct: 1,
        explanation: "position: fixed fixar elementet i viewporten - det scrollar inte med sidan"
    },
    {
        question: "Vilken HTML-tagg används för att skapa en rubrik på nivå 1?",
        options: ["<header>", "<h1>", "<heading>", "<title>"],
        correct: 1,
        explanation: "<h1> är den högsta rubriknivån i HTML (h1-h6)"
    },
    {
        question: "Vilken HTML-tagg är semantisk för artikelinnehåll?",
        options: ["<div>", "<article>", "<content>", "<text>"],
        correct: 1,
        explanation: "<article> är en semantisk tagg för självständigt artikelinnehåll"
    },
    {
        question: "Vad är en semantisk HTML-tagg?",
        options: ["En tagg som ser bra ut", "En tagg som beskriver sin betydelse för innehållet", "En JavaScript-tagg", "En föråldrad tagg"],
        correct: 1,
        explanation: "Semantiska taggar (article, nav, header, footer, etc.) beskriver betydelsen av innehållet"
    },
    {
        question: "Vilken tagg används för navigation?",
        options: ["<navigation>", "<menu>", "<nav>", "<links>"],
        correct: 2,
        explanation: "<nav> är den semantiska taggen för navigationslänkar"
    },
    {
        question: "Vad gör <section>-taggen?",
        options: ["Skapar en sektion i dokumentet", "Skapar en meny", "Skapar en tabell", "Skapar en bild"],
        correct: 0,
        explanation: "<section> grupperar relaterat innehåll i en tematisk sektion"
    },
    {
        question: "Vilken CSS-egenskap används för att ändra bakgrundsfärg?",
        options: ["color", "bg-color", "background-color", "back-color"],
        correct: 2,
        explanation: "background-color används för att ändra bakgrundsfärgen på ett element"
    },
    {
        question: "Hur inkluderar man en extern CSS-fil i HTML?",
        options: ["<style src='style.css'>", "<css>style.css</css>", "<link rel='stylesheet' href='style.css'>", "<include>style.css</include>"],
        correct: 2,
        explanation: "<link rel='stylesheet' href='style.css'> i <head> inkluderar extern CSS"
    },
    {
        question: "Vad är z-index?",
        options: ["Teckensnittsstorlek", "Styr stapelordning av överlappande element", "Bakgrundsfärg", "Marginalstorlek"],
        correct: 1,
        explanation: "z-index styr vilka element som ligger ovanpå andra när de överlappar (högre värde = överst)"
    },
    {
        question: "Vilken pseudo-klass matchar det första barnet?",
        options: [":first", ":first-child", ":child(1)", ":begin"],
        correct: 1,
        explanation: ":first-child matchar elementet om det är det första barnet av sin förälder"
    },
    {
        question: "Vad gör @media queries?",
        options: ["Laddar bilder", "Tillämpar olika CSS-regler baserat på enhetens egenskaper", "Skapar animationer", "Importerar CSS"],
        correct: 1,
        explanation: "@media queries används för att tillämpa olika stilar baserat på skärmstorlek, upplösning etc."
    },
    {
        question: "Vilket värde för display tar bort ett element från flödet?",
        options: ["display: hidden", "display: none", "display: invisible", "display: remove"],
        correct: 1,
        explanation: "display: none tar bort elementet helt från dokumentflödet (tar inte plats)"
    },
    {
        question: "Vad är skillnaden mellan display: none och visibility: hidden?",
        options: ["Ingen skillnad", "display: none tar inte plats, visibility: hidden tar plats", "visibility: hidden tar inte plats", "display: none är permanent"],
        correct: 1,
        explanation: "display: none tar inte plats alls, visibility: hidden gömmer elementet men det tar fortfarande plats"
    },
    {
        question: "Vilken CSS-egenskap används för att göra text kursiv?",
        options: ["text-style", "font-style", "text-italic", "font-italic"],
        correct: 1,
        explanation: "font-style: italic används för att göra text kursiv"
    },
    {
        question: "Vad gör box-sizing: border-box?",
        options: ["Tar bort border", "Inkluderar padding och border i elementets totala bredd/höjd", "Ökar border", "Gör boxen genomskinlig"],
        correct: 1,
        explanation: "box-sizing: border-box inkluderar padding och border i den angivna width/height"
    },
    {
        question: "Vilken HTML-tagg används för att skapa en ordnad lista?",
        options: ["<ul>", "<list>", "<ol>", "<dl>"],
        correct: 2,
        explanation: "<ol> (ordered list) skapar en numrerad/ordnad lista"
    },
    {
        question: "Vilken HTML-tagg används för att skapa en oordnad lista?",
        options: ["<ol>", "<ul>", "<list>", "<unordered>"],
        correct: 1,
        explanation: "<ul> (unordered list) skapar en punktlista/oordnad lista"
    }
];


initQuiz(questions);
