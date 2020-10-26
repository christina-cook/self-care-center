var receiveMessageButton = document.querySelector('.receive-message');
var image = document.querySelector('img');
var message = document.querySelector('.message');
var inputs = document.querySelectorAll('input');
var loginPage = document.querySelector('.login-page');
var mainPage = document.querySelector('.main-page');
var loginButton = document.querySelector('.login-button');
var welcomeMessage = document.querySelector('.welcome');
var userName = document.querySelector('#user-name');

var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
];

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
]

var messages = {
  affirmations: affirmations,
  mantras: mantras,
}

loginButton.addEventListener('click', displayMainPage);
receiveMessageButton.addEventListener('click', displayMessage);

function displayMainPage() {
  loginPage.classList.add('hidden');
  mainPage.classList.remove('hidden');
  event.preventDefault();
  showWelcomeMessage();
}

function showWelcomeMessage() {
  if (!userName.value) {
    welcomeMessage.classList.add('hidden');
  } else {
    welcomeMessage.innerText = `Welcome, ${userName.value}!`;
    welcomeMessage.classList.remove('hidden');
  }
}

function getRandomMessage(array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index]
}

function displayMessage() {
  var typeOfMessage;
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      typeOfMessage = inputs[i].value;
    }
  }
  var listOfMessages = messages[typeOfMessage]
    message.innerText = getRandomMessage(listOfMessages);
    image.style.display = "none";
}
