const answerElement = document.querySelector('#answer')
const questionInput = document.querySelector('#questionInput')
const askButton = document.querySelector('#askButton')

const answers = [
  'The answer is yes.',
  'Most likely.',
  'Ask again later.',
  'I would not count on it.',
  'Absolutely.',
  'My sources say no.',
  'It is certain.',
  'Outlook not so good.',
  'Yes, definitely.',
  'No, not at this time.',
  'Signs point to yes.',
  'Better not tell you now.',
  'Yes.',
  'No.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Without a doubt.',
  'Very doubtful.',
  'You may rely on it.',
  "Don't count on it."
]

function askQuestion() {
  const questionText = questionInput.value.trim()

  if (!questionText) {
    alert('Please type a valid question.')
    return
  }

  askButton.setAttribute('disabled', 'true')
  answerElement.style.opacity = 0

  const randomIndex = Math.floor(Math.random() * answers.length)
  const selectedAnswer = answers[randomIndex]

  answerElement.innerHTML = ''

  const questionDisplay = document.createElement('div')
  questionDisplay.textContent = questionText
  const answerDisplay = document.createElement('p')
  answerDisplay.textContent = selectedAnswer

  answerElement.append(questionDisplay, answerDisplay)
  answerElement.style.opacity = 1

  setTimeout(() => {
    answerElement.style.opacity = 0
    askButton.removeAttribute('disabled')
  }, 3000)
}

askButton.addEventListener('click', askQuestion)
