const contactForm = document.getElementById('myform');
const errorMessage = document.getElementById('errorDisplay');
const errMsg = 'Please type your email in lower case';

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  email.trim();
  if (email !== email.toLowerCase()) {
    errorMessage.textContent = errMsg;
  } else {
    contactForm.submit();
    contactForm.reset();
  }
});