function quizPage () {
const DATA = [
    {
        question: 'What’s your first name?',
        answers: [
            {
                text: '',
                value: 'First Name',
                btnClass: 'btn-next',
                type: 'text',
                classLi: 'icon-quiz-1',
                classLi2: 'list-quiz__one-1',
                icon: './img/Quiz/quiz 1-1.svg',
                icon2: './img/Quiz/quiz 1-2.svg',
                btnLink: 'button',
                ref: 'href="#"'
            },
        ]
    },
    {
        question: 'Do you smoke?',
        classQuestion: 'question-page-2',
        classUl: 'answers-page-2',
        answers: [
            {
                text: 'Yes',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__two-1',
                classLi2: 'list-quiz__two-1',
                icon: './img/Quiz/quiz 2-1.svg',
                icon2: './img/Quiz/quiz 2-2.svg',
                btnLink: 'button'
            },
            {
                text: 'No',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__two-2',
                classLi2: 'list-quiz__two-2',
                icon: './img/Quiz/quiz 2-1.svg',
                icon2: './img/Quiz/quiz 2-2.svg',
                btnLink: 'button'
            }
        ]
    },
    {
        question: 'What is your eating habits?',
        classQuestion: 'question-page-3',
        classUl: 'answers-page-3',
        answers: [
            {
                text: 'Vegan diet',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__three-1',
                classLi2: 'list-quiz__three-1',
                icon: './img/Quiz/quiz 3-1.svg',
                icon2: './img/Quiz/quiz 3-2.svg',
                btnLink: 'button'
            },
            {
                text: 'Vegetarian diet',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__three-2',
                classLi2: 'list-quiz__three-2',
                icon: './img/Quiz/quiz 2-1.svg',
                icon2: './img/Quiz/quiz 2-2.svg',
                btnLink: 'button'
            },            
            {
                text: 'My diet is generally healthy and includes animal protein, fish and veggies',
                value: '',
                type: 'text',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__three-3',
                classLi2: 'list-quiz__three-3',
                icon: './img/Quiz/quiz 2-1.svg',
                icon2: './img/Quiz/quiz 2-2.svg',
                btnLink: 'button'
            },
            {
                text: 'My diet includes fast food and soft drinks',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__three-4',
                classLi2: 'list-quiz__three-4',
                icon: './img/Quiz/quiz 2-1.svg',
                icon2: './img/Quiz/quiz 2-2.svg',
                btnLink: 'button'
            }
        ]
    },
    {
        question: 'How frequently do you consume alcoholic beverages?',
        classQuestion: 'question-page-4',
        classUl: 'answers-page-4',
        answers: [
            {
                text: '≤ 3 times per week',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__four-1',
                classLi2: 'list-quiz__four-1',
                icon: './img/Quiz/quiz 4-1.svg',
                icon2: './img/Quiz/quiz 4-2.svg',
                btnLink: 'button'
            },
            {
                text: '4 - 7 times per week',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__four-2',
                classLi2: 'list-quiz__four-2',
                icon: './img/Quiz/quiz 3-1.svg',
                icon2: './img/Quiz/quiz 3-2.svg',
                btnLink: 'button'
            },
            {
                text: '7+ times per week',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__four-3',
                classLi2: 'list-quiz__four-3',
                icon: './img/Quiz/quiz 3-1.svg',
                icon2: './img/Quiz/quiz 3-2.svg',
                btnLink: 'button'
            }
        ]
    },
    {
        question: 'How frequently do you have cold/flu symptoms?',
        classQuestion: 'question-page-5',
        classUl: 'answers-page-5',
        answers: [
            {
                text: '≤ 2 per year',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__five-1',
                classLi2: 'list-quiz__five-1',
                icon: './img/Quiz/quiz 5-1.svg',
                icon2: './img/Quiz/quiz 5-2.svg',
                btnLink: 'button'
            },
            {
                text: '3 - 5 times per year',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__five-2',
                classLi2: 'list-quiz__five-2',
                icon: './img/Quiz/quiz 5-1.svg',
                icon2: './img/Quiz/quiz 5-2.svg',
                btnLink: 'button'
            },
            {
                text: '5+ times per week',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__five-3',
                classLi2: 'list-quiz__five-3',
                icon: './img/Quiz/quiz 5-1.svg',
                icon2: './img/Quiz/quiz 5-2.svg',
                btnLink: 'button'
            }
        ]
    },
    {
        question: 'Describe your stress level',
        classQuestion: 'question-page-6',
        classUl: 'answers-page-6',
        answers: [
            {
                text: 'I feel calm and relaxed most of the time',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__six-1',
                classLi2: 'list-quiz__six-1',
                icon: './img/Quiz/quiz 6-1.svg',
                icon2: './img/Quiz/quiz 6-2.svg',
                btnLink: 'button'
            },
            {
                text: 'I get nerevous from time to time',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__six-2',
                classLi2: 'list-quiz__six-2',
                icon: './img/Quiz/quiz 6-1.svg',
                icon2: './img/Quiz/quiz 6-2.svg',
                btnLink: 'button'
            },
            {
                text: 'I’m under a lot of stress most of the time',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__six-3',
                classLi2: 'list-quiz__six-3',
                icon: './img/Quiz/quiz 6-1.svg',
                icon2: './img/Quiz/quiz 6-2.svg',
                btnLink: 'button'
            }
        ]
    },
    {
        question: 'Have you ever been diagnosted with high blood glucose level?',
        classQuestion: 'question-page-7',
        classUl: 'answers-page-7',
        answers: [
            {
                text: 'Yes',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__seven-1',
                classLi2: 'list-quiz__two-1',
                icon: './img/Quiz/quiz 7-1.svg',
                icon2: './img/Quiz/quiz 7-2.svg',
                btnLink: 'button'
            },
            {
                text: 'No',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__two-2',
                classLi2: 'list-quiz__two-2',
                icon: './img/Quiz/quiz 7-1.svg',
                icon2: './img/Quiz/quiz 7-2.svg',
                btnLink: 'button'
            }
        ]
    },
    {
        question: 'Tell us what you want to focus on',
        classQuestion: 'question-page-8',
        classUl: 'answers-page-8',
        answers: [
            {
                text: 'Weight managment',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__eight-1',
                classLi2: 'list-quiz__eight-1',
                icon: './img/Quiz/quiz 8-1.svg',
                icon2: './img/Quiz/quiz 8-2.svg',
                btnLink: 'button'
            },
            {
                text: 'Stress relief',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__eight-2',
                classLi2: 'list-quiz__eight-2',
                icon: './img/Quiz/quiz 8-1.svg',
                icon2: './img/Quiz/quiz 8-2.svg',
                btnLink: 'button'
            },
            {
                text: 'Immune boost',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__eight-3',
                classLi2: 'list-quiz__eight-3',
                icon: './img/Quiz/quiz 8-1.svg',
                icon2: './img/Quiz/quiz 8-2.svg',
                btnLink: 'button'
            },
            {
                text: 'Need to solve a sprcific problem',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__eight-4',
                classLi2: 'list-quiz__eight-4',
                icon: './img/Quiz/quiz 8-1.svg',
                icon2: './img/Quiz/quiz 8-2.svg',
                btnLink: 'button'
            },
            {
                text: 'I need a bassic kit for a daily intake',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__eight-5',
                classLi2: 'list-quiz__eight-5',
                icon: './img/Quiz/quiz 8-1.svg',
                icon2: './img/Quiz/quiz 8-2.svg',
                btnLink: 'button'
            },
            {
                text: 'All in one',
                value: '',
                type: 'button',
                btnClass: 'btn-next btn-new-next',
                classLi: 'icon-quiz__eight-6',
                classLi2: 'list-quiz__eight-6',
                icon: './img/Quiz/quiz 8-1.svg',
                icon2: './img/Quiz/quiz 8-2.svg',
                btnLink: 'button'
            },
        ]
    },
    {
        question: 'What’s your email address?',
        classQuestion: 'question-page-9',
        classUl: 'answers-page-9',
        answers: [
            {
                text: '',
                value: 'Email',
                btnClass: 'btn-next',
                type: 'text',
                classLi: 'icon-quiz-1',
                classLi2: 'list-quiz__one-1',
                icon: './img/Quiz/quiz 1-1.svg',
                icon2: './img/Quiz/quiz 1-2.svg',
                btnLink: 'a',
                ref: 'href="pack.html"'
            }
        ]
    },
];

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
            <li class="${answer.classLi}">
                <img src="${answer.icon}" alt="Img">
                <img src="${answer.icon2}" alt="Img">
            </li>
            <li class="${answer.classLi2}">
                <p>${answer.value}</p>
                <label>
                    <textarea class="answer-input" type=${answer.type} name=${index} value="${answer.id}"  draggable="true">${answer.text}</textarea>
                    <${answer.btnLink}  class='${answer.btnClass}' id="btn-next" ${answer.ref}>
                        <img src="./img/Lending/quiz-next.svg" alt="Next">
                    </${answer.btnLink}>
                </label>
            </li>
        `)
      .join('')

    questions.innerHTML = `
    <div class="quiz-questions-item">
        <div class="quiz-questions-item__question ${DATA[index].classQuestion}"><p>${DATA[index].question}</p></div>
        <ul class="quiz-questions-item__answers ${DATA[index].classUl}">${renderAnswers()}</ul>
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
