//variables 
const form = document.querySelector('form');
const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const subjectInput = document.querySelector('#subjectInput');
const messageInput = document.querySelector('#textareaInput');
const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const subjectError = document.querySelector('#subjectError');
const messageError = document.querySelector('#messageError');
const submitBtn = document.querySelector('#submit');
const submitError = document.querySelector('#submitError');
const modal = document.querySelector('#modal');
const closeButton = document.getElementsByClassName('close')[0];
const inputs = form.querySelectorAll('input', 'textarea');
// validation of form
function validateName(){
    if(nameInput.value == '' || nameInput.value == null)
    {
        nameError.textContent = 'Please, inform your name.'
        submitBtn.disabled = true;
        nameInput.focus();
    }
    else 
    {
        nameError.textContent = '';
        submitBtn.disabled = false;
    }
} 

function validateEmail(){
    if(emailInput.value === '' || nameInput.value === null)
    {
        emailError.textContent = 'Please, inform your email.'
        submitBtn.disabled = true;
        emailInput.focus();
    }
    else if(!emailInput.checkValidity())
    {
        emailError.textContent = 'Please, inform a valid email address'
        submitBtn.disabled = true;
        emailInput.focus();
    }
    else
    {
        emailError.textContent = ''
        submitBtn.disabled = false;
    }
}

function validateSubject(){
    if(subjectInput.value === '' || subjectInput.value === null)
    {
        subjectError.textContent = 'Please, inform a subject.';
        subjectInput.focus();
        submitBtn.disabled = true;
    }
    else
    {
        subjectError.textContent = '';
        submitBtn.disabled = false;
    }
}

function validateMessage(){
    if(messageInput.value === '' || messageInput.value === null)
    {
        messageError.textContent = 'Please describe your service request clearly and concisely in this field.';
        messageInput.focus();
        submitBtn.disabled = true;
    }
    else if(!messageInput.checkValidity())
    {
        messageError.textContent = 'Make sure your message is at least 50 characters long'
        submitBtn.disabled = true;
        messageInput.focus();
    }
    else
    {
        messageError.textContent = '';
        submitBtn.disabled = false;
        submitError.textContent = ''
    }
}
submitBtn.addEventListener('click', (event) => {
    let valid = true;
    for(const input of inputs){
        if(!input.value)
        {
            submitError.textContent = 'Fill in the contact form'
            nameInput.focus();
            valid = false;            
        }
        
    }
    if(!valid)
    {
        event.preventDefault();
        
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Simula envio do formulário
    setTimeout(() => {
      // Exibe a modal
      modal.style.display = 'block';
    }, 1000);
  });
    

closeButton.addEventListener('click', () => {
    // Hide the modal when the close button is clicked
    modal.style.display = 'none';
    form.reset();
})




