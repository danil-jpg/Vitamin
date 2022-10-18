function quizPage () {
  const DATA = [
    {
      question: 'What’s your first name?',
      answers: [
        {
          id: '',
          value: 'First Name',
          btnClass: 'btn-next',
          type: 'text'
        }
      ]
    },
    {
      question: 'Do you smoke?',
      answers: [
        {
          id: 'Yes',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        },
        {
          id: 'No',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        }
      ]
    },
    {
      question: 'What is your eating habits?',
      answers: [
        {
          id: 'Vegan diet',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        },
        {
          id: 'Vegetarian diet',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        },
        {
          id: 'My diet is generally healthy and includes animal protein, fish and veggies',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        },
        {
          id: 'My diet includes fast food and soft drinks',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        }
      ]
    },
    {
      question: 'How frequently do you consume alcoholic beverages?',
      answers: [
        {
          id: '≤ 3 times per week',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        },
        {
          id: '4 - 7 times per week',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        },
        {
          id: '7+ times per week',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        }
      ]
    },
    {
      question: 'How frequently do you have cold/flu symptoms?',
      answers: [
        {
          id: '≤ 2 per year',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        },
        {
          id: '3 - 5 times per year',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        },
        {
          id: '5+ times per week',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        }
      ]
    },
    {
      question: 'Describe your stress level',
      answers: [
        {
          id: 'I feel calm and relaxed most of the time',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        },
        {
          id: 'I get nerevous from time to time',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        },
        {
          id: 'I’m under a lot of stress most of the time',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        }
      ]
    },
    {
      question: 'Have you ever been diagnosted with high blood glucose level?',
      answers: [
        {
          id: 'Yes',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        },
        {
          id: 'No',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        }
      ]
    },
    {
      question: 'Tell us what you want to focus on',
      answers: [
        {
          id: 'Weight managment',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        },
        {
          id: 'Stress relief',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        },
        {
          id: 'Immune boost',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        },
        {
          id: 'Need to solve a sprcific problem',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        },
        {
          id: 'I need a bassic kit for a daily intake',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        },
        {
          id: 'All in one',
          value: '',
          type: 'button',
          btnClass: 'btn-next btn-new-next'
        }
      ]
    },
    {
      question: 'What’s your email address?',
      answers: [
        {
          id: '',
          value: 'Email',
          btnClass: 'btn-next',
          type: 'text'
        }
      ]
    }
  ]

  const localResults = {}

  const quiz = document.getElementById('quiz')
  const questions = document.getElementById('questions')
  const indicator = document.getElementById('indicator')
  const results = document.getElementById('results')
  const btnNext = document.getElementById('btn-next')
  const btnRestart = document.getElementById('btn-restart')

  const renderQuestions = (index) => {
    renderIndicator(index + 1)

    questions.dataset.currentStep = index

    const renderAnswers = () => DATA[index].answers
      .map((answer) => `
            <li>
                <p>${answer.value}</p>
                <label>
                    <input class="answer-input" type=${answer.type} name=${index} value="${answer.id}">
                    <button  class='${answer.btnClass}' id="btn-next">
                        <img src="./img/Lending/quiz-next.svg" alt="Next">
                    </button>
                </label>
            </li>
        `)
      .join('')

    questions.innerHTML = `
    <div class="quiz-questions-item">
        <div class="quiz-questions-item__question"><p>${DATA[index].question}</p></div>
        <ul class="quiz-questions-item__answers">${renderAnswers()}</ul>
    </div>
    `
  }

  const renderResults = () => {
    let content = ''

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
      .map((answer) => `<li>${answer.value}</li>`)
      .join('')

    DATA.forEach((question, index) => {
      content += ''
    })

    results.innerHTML = content
  }

  const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`
  }

  quiz.addEventListener('change', (event) => {
    // Логика ответа
    if (event.target.classList.contains('answer-input')) {
      localResults[event.target.name] = event.target.value
      btnNext.disabled = false
    }
  })

  quiz.addEventListener('click', (event) => {
    // Вперед или с начала
    if (event.target.classList.contains('btn-next')) {
      const nextQuestionIndex = Number(questions.dataset.currentStep) + 1

      if (DATA.length === nextQuestionIndex) {
        // Переходим к результатам
        questions.classList.add('questions--hidden')
        indicator.classList.add('indicator--hidden')
        results.classList.add('indicator--visible')
        btnNext.classList.add('btn-next--hidden')
        btnRestart.classList.add('btn-restart--visible')

        renderResults()
      } else {
        // Переход к следующему вопросу
        renderQuestions(nextQuestionIndex)
      }
    }

    if (event.target.classList.contains('btn-restart')) {

    };
  })
  renderQuestions(0)
}

export default quizPage
