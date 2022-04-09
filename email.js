const contactForm = document.getElementById('myform');
const errorMessage = document.getElementById('errorDisplay');
const errMsg = 'Please type your email in lower case';

contactForm.addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  email.trim();
  if (email !== email.toLowerCase()) {
    errorMessage.textContent = errMsg;
    event.preventDefault();
  } else {
    contactForm.submit();
    contactForm.reset();
  }
});