const testConnectionButton = document.getElementById('test-connection-btn');
const connectDbButton = document.getElementById('connect-db-btn');
const submitButton = document.getElementById('submit-btn')
const modeTitle = document.getElementById('mode-title')
const selectorResult = document.getElementById('selector-result');
const defaultTextForSelectorResult = document.getElementById('default-text')
const formsContainer = document.getElementById('container')
const sessionTime = document.getElementById('session-time')
const toggleCheckbox = document.getElementById('ssl');
const authText = document.getElementById('auth-text');
const authFields = document.getElementById('auth-fields');
const toggleContainer = document.querySelector('.toggle-container');
const form = document.getElementById('db-form');


const modeTitles = {
  test: {
    text: 'Test database connection',
    isUsed: false

  },
  connect: {
    text: 'Connect to the database',
    isUsed: false
  }
}

toggleContainer.addEventListener('click', () => {
  toggleCheckbox.checked = !toggleCheckbox.checked;
});

testConnectionButton.addEventListener('click', () => {
  // Option selected no need to show default text.
  defaultTextForSelectorResult.remove()

  // Session time only available for connect to database screen.
  sessionTime.style.display = 'none'

  submitButton.innerText = 'Test'
  modeTitle.innerText = modeTitles.test.text
  formsContainer.style.display = 'flex'
  testConnectionButton.classList.add('selected');
  connectDbButton.classList.remove('selected');

  modeTitles.test.isUsed = true
  modeTitles.connect.isUsed = false

  form.reset()
});

connectDbButton.addEventListener('click', () => {
  // Option selected no need to show default text
  defaultTextForSelectorResult.remove()

  sessionTime.style.display = 'block'


  submitButton.innerText = 'Connect'

  modeTitle.innerText = modeTitles.connect.text
  formsContainer.style.display = 'flex'
  connectDbButton.classList.add('selected');
  testConnectionButton.classList.remove('selected');

  modeTitles.test.isUsed = false
  modeTitles.connect.isUsed = true

  form.reset()
});



authText.addEventListener('click', () => {
  if (authFields.style.display === 'none') {
    authFields.style.display = 'block';
  } else {
    authFields.style.display = 'none';
  }
});