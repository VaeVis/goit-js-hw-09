const form = document.querySelector('.feedback-form');

if (!form) {
  throw new Error('Form not found!');
}

const STORAGE_KEY = 'feedback-form-state';

function saveToLocal() {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const formData = { email, message };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log('Save test:', formData);
}

function loadFromLocal() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);


    form.elements.email.value = email || '';
    form.elements.message.value = message || '';
    console.log('Loading test:', { email, message });
  }
}

function handleInput(event) {
  saveToLocal();
}

function handleSubmit(event) {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if(email === '' || message === '') {
    alert('Complete the entire form');
    return;
  }
  const formData = {email, message};
  console.log('Sending test', formData);

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

loadFromLocal();

form.addEventListener('input', handleInput);

form.addEventListener('submit', handleSubmit);



