// Hämtar elementen från HTML
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const feedbackInput = document.getElementById('feedback');
const successMessage = document.getElementById('success-message');

// Visar felmeddelande
function showError(inputElement, errorElementId, message) {
    const errorElement = document.getElementById(errorElementId);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Döljer felmeddelande
function hideError(errorElementId) {
    const errorElement = document.getElementById(errorElementId);
    errorElement.classList.remove('show');
}

// Validerar namnfältet
function validateName() {
    const name = nameInput.value.trim();
    
    if (name.length === 0) {
        showError(nameInput, 'name-error', 'Namn är obligatoriskt');
        return false;
    }
    
    if (name.length < 2) {
        showError(nameInput, 'name-error', 'Namnet måste vara minst 2 tecken');
        return false;
    }
    
    hideError('name-error');
    return true;
}

// Validerar e-postfältet
function validateEmail() {
    const email = emailInput.value.trim();
    
    if (email.length === 0) {
        showError(emailInput, 'email-error', 'E-post är obligatorisk');
        return false;
    }
    
    if (!email.includes('@')) {
        showError(emailInput, 'email-error', 'E-posten måste innehålla @');
        return false;
    }
    
    // Kollar att det finns text både före och efter @
    const emailParts = email.split('@');
    if (emailParts[0].length === 0 || emailParts[1].length === 0) {
        showError(emailInput, 'email-error', 'Ange en giltig e-postadress');
        return false;
    }
    
    hideError('email-error');
    return true;
}

// Validerar meddelandefältet
function validateFeedback() {
    const feedback = feedbackInput.value.trim();
    
    if (feedback.length === 0) {
        showError(feedbackInput, 'feedback-error', 'Meddelande är obligatoriskt');
        return false;
    }
    
    if (feedback.length < 10) {
        showError(feedbackInput, 'feedback-error', 'Meddelandet måste vara minst 10 tecken');
        return false;
    }
    
    hideError('feedback-error');
    return true;
}

// När formuläret skickas
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stoppar sidan från att ladda om
    
    // Validerar alla fält
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isFeedbackValid = validateFeedback();
    
    // Om allt är korrekt
    if (isNameValid && isEmailValid && isFeedbackValid) {
        // Visar success-meddelande
        successMessage.classList.add('show');
        
        // Loggar datan (i verkligheten skulle detta skickas till en server)
        console.log('Formulär skickat!');
        console.log('Namn:', nameInput.value);
        console.log('E-post:', emailInput.value);
        console.log('Meddelande:', feedbackInput.value);
        
        // Rensar formuläret efter 2 sekunder
        setTimeout(() => {
            contactForm.reset();
            successMessage.classList.remove('show');
        }, 2000);
    }
});

// Validerar när användaren lämnar ett fält
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
feedbackInput.addEventListener('blur', validateFeedback);