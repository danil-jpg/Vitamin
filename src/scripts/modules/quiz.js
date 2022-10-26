function quizPage () {
  const DATA = [
      // 1==================
      {
          question: 'What’s your first name?',
          classUl: '',
          answers: [
              {
                classLi: 'quiz-list-1',
                classLi2: 'icon-questions-1',
                textP: '<p>First Name</p>',
                textT: '',
                btnClass: 'btn__next-question',
                icon1: '<img src="../img/Quiz/quiz 1-1.svg" alt="Img-decor">',
                icon2: '<img src="../img/Quiz/quiz 1-2.svg" alt="Img-decor">',
                type: 'text',
                btn: 'button',
              },
          ]
      },
      // 2==================
      {
        question: 'Do you smoke?',
        classUl: 'question-2',
        answers: [
          {
            classLi: 'quiz-list-1 quiz-list-2',
            classLi2: 'icon-questions-2',
            textP: '',
            textT: 'Yes',
            btnClass: 'btn__next-question btn__next',
            icon1: '<img src="../img/Quiz/quiz 2-1.svg" alt="Img-decor">',
            icon2: '<img src="../img/Quiz/quiz 2-2.svg" alt="Img-decor">',
            type: 'text',
            btn: 'button',
          },
          {
            classLi: 'quiz-list-1 quiz-list-2',
            classLi2: '',
            textP: '',
            textT: 'No',
            btnClass: 'btn__next-question btn__next',
            icon1: '',
            icon2: '',
            type: 'text',
            btn: 'button',
          },
        ]
      },
      // 3==================
      {
      question: 'What is your eating habits?',
      classUl: 'question-3',
      answers: [
          {
            classLi: 'quiz-list-1 quiz-list-3',
            classLi2: 'icon-questions-1 icon-questions-3',
            textP: '',
            textT: 'Vegan diet',
            btnClass: 'btn__next-question btn__next',
            icon1: '<img src="../img/Quiz/quiz 3-1.svg" alt="Img-decor">',
            icon2: '<img src="../img/Quiz/quiz 3-2.svg" alt="Img-decor">',
            type: 'text',
            btn: 'button',
          },
          {
            classLi: 'quiz-list-1 quiz-list-3',
            classLi2: '',
            textP: '',           
            textT: 'Vegetarian diet',
            btnClass: 'btn__next-question btn__next',
            icon1: '',
            icon2: '',
            type: 'text',
            btn: 'button',
          },
          {
            classLi: 'quiz-list-1 quiz-list-3 quiz-list_3-three',
            classLi2: '',
            textP: '',            
            textT: 'My diet is generally healthy and includes animal protein, fish and veggies',
            btnClass: 'btn__next-question btn__next',
            icon1: '',
            icon2: '',
            type: 'text',
            btn: 'button',
          },
          {
            classLi: 'quiz-list-1 quiz-list-3 quiz-list_3-four',
            classLi2: '',
            textP: '',
            textT: 'My diet includes fast food and soft drinks',
            btnClass: 'btn__next-question btn__next',
            icon1: '',
            icon2: '',
            type: 'text',
            btn: 'button',
          },
      ]
      },
      // 4==================
      {
    question: 'How frequently do you consume alcoholic beverages?',
    classUl: 'question-4',
    answers: [
        {
          classLi: 'quiz-list-1 quiz-list-3 quiz-list-4',
          classLi2: 'icon-questions-1 icon-questions-4',
          textP: '',
          textT: '≤ 3 times per week',
          btnClass: 'btn__next-question btn__next',
          icon1: '<img src="../img/Quiz/quiz 4-1.svg" alt="Img-decor">',
          icon2: '<img src="../img/Quiz/quiz 4-2.svg" alt="Img-decor">',
          type: 'text',
          btn: 'button',
        },
        {
          classLi: 'quiz-list-1 quiz-list-3 quiz-list-4',
          classLi2: '',
          textP: '',           
          textT: '4 - 7 times per week',
          btnClass: 'btn__next-question btn__next',
          icon1: '',
          icon2: '',
          type: 'text',
          btn: 'button',
        },
        {
          classLi: 'quiz-list-1 quiz-list-3 quiz-list-4',
          classLi2: '',
          textP: '',            
          textT: '7+ times per week',
          btnClass: 'btn__next-question btn__next',
          icon1: '',
          icon2: '',
          type: 'text',
          btn: 'button',
        },
    ]
      },
      // 5==================
      {
      question: 'How frequently do you have cold/flu symptoms?',
      classUl: 'question-4',
      answers: [
        {
          classLi: 'quiz-list-1 quiz-list-3 quiz-list-4',
          classLi2: 'icon-questions-1 icon-questions-5',
          textP: '',
          textT: '≤ 2 per year',
          btnClass: 'btn__next-question btn__next',
          icon1: '<img src="../img/Quiz/quiz 5-1.svg" alt="Img-decor">',
          icon2: '<img src="../img/Quiz/quiz 5-2.svg" alt="Img-decor">',
          type: 'text',
          btn: 'button',
        },
        {
          classLi: 'quiz-list-1 quiz-list-3 quiz-list-4',
          classLi2: '',
          textP: '',           
          textT: '3 - 5 times per year',
          btnClass: 'btn__next-question btn__next',
          icon1: '',
          icon2: '',
          type: 'text',
          btn: 'button',
        },
        {
          classLi: 'quiz-list-1 quiz-list-3 quiz-list-4',
          classLi2: '',
          textP: '',            
          textT: '5+ times per week',
          btnClass: 'btn__next-question btn__next',
          icon1: '',
          icon2: '',
          type: 'text',
          btn: 'button',
        },
      ]
      },
      // 6==================
      {
        question: 'Describe your stress level',
        classUl: 'question-3',
        answers: [
            {
              classLi: 'quiz-list-1 quiz-list-3',
              classLi2: 'icon-questions-1 icon-questions-6',
              textP: '',
              textT: 'I feel calm and relaxed most of the time',
              btnClass: 'btn__next-question btn__next',
              icon1: '<img src="../img/Quiz/quiz 6-1.svg" alt="Img-decor">',
              icon2: '<img src="../img/Quiz/quiz 6-2.svg" alt="Img-decor">',
              type: 'text',
              btn: 'button',
            },
            {
              classLi: 'quiz-list-1 quiz-list-3',
              classLi2: '',
              textP: '',           
              textT: 'I get nerevous from time to time',
              btnClass: 'btn__next-question btn__next',
              icon1: '',
              icon2: '',
              type: 'text',
              btn: 'button',
            },
            {
              classLi: 'quiz-list-1 quiz-list-3',
              classLi2: '',
              textP: '',            
              textT: 'I’m under a lot of stress most of the time',
              btnClass: 'btn__next-question btn__next',
              icon1: '',
              icon2: '',
              type: 'text',
              btn: 'button',
            },
        ]
      },
      // 7==================
      {
        question: 'Have you ever been diagnosted with high blood glucose level?',
        classUl: 'question-2',
        answers: [
          {
            classLi: 'quiz-list-1 quiz-list-2',
            classLi2: 'icon-questions-2 icon-questions-7',
            textP: '',
            textT: 'Yes',
            btnClass: 'btn__next-question btn__next',
            icon1: '<img src="../img/Quiz/quiz 7-1.svg" alt="Img-decor">',
            icon2: '<img src="../img/Quiz/quiz 7-2.svg" alt="Img-decor">',
            type: 'text',
            btn: 'button',
          },
          {
            classLi: 'quiz-list-1 quiz-list-2',
            classLi2: '',
            textP: '',
            textT: 'No',
            btnClass: 'btn__next-question btn__next',
            icon1: '',
            icon2: '',
            type: 'text',
            btn: 'button',
          },
        ]
      },
      // 8==================
      {
        question: 'Tell us what you want to focus on?',
        classUl: 'question-8',
        answers: [
          {
            classLi: 'quiz-list-1 quiz-list-8',
            classLi2: 'icon-questions-2',
            textP: '',
            textT: 'Weight managment',
            btnClass: 'btn__next-question btn__next',
            icon1: '<img src="../img/Quiz/quiz 8-1.svg" alt="Img-decor">',
            icon2: '<img src="../img/Quiz/quiz 8-2.svg" alt="Img-decor">',
            type: 'text',
            btn: 'button',
          },
          {
            classLi: 'quiz-list-1 quiz-list-8',
            classLi2: '',
            textP: '',
            textT: 'Stress relief',
            btnClass: 'btn__next-question btn__next',
            icon1: '',
            icon2: '',
            type: 'text',
            btn: 'button',
          },
          {
            classLi: 'quiz-list-1 quiz-list-8',
            classLi2: '',
            textP: '',
            textT: 'Immune boost',
            btnClass: 'btn__next-question btn__next',
            icon1: '',
            icon2: '',
            type: 'text',
            btn: 'button',
          },
          {
            classLi: 'quiz-list-1 quiz-list-8 quiz-list__fore-8',
            classLi2: '',
            textP: '',
            textT: 'Need to solve a sprcific problem',
            btnClass: 'btn__next-question btn__next',
            icon1: '',
            icon2: '',
            type: 'text',
            btn: 'button',
          },
          {
            classLi: 'quiz-list-1 quiz-list-8 quiz-list__five-8',
            classLi2: '',
            textP: '',
            textT: 'I need a bassic kit for a daily intake',
            btnClass: 'btn__next-question btn__next',
            icon1: '',
            icon2: '',
            type: 'text',
            btn: 'button',
          },
          {
            classLi: 'quiz-list-1 quiz-list-8',
            classLi2: '',
            textP: '',
            textT: 'All in one',
            btnClass: 'btn__next-question btn__next',
            icon1: '',
            icon2: '',
            type: 'text',
            btn: 'button',
          },
        ]
      },
      // 9==================
      {
        question: 'What’s your email address?',
        classUl: '',
        answers: [
            {
              classLi: 'quiz-list-1',
              classLi2: 'icon-questions-1',
              textP: '<p>Email</p>',
              textT: '',
              btnClass: 'btn__next-question',
              icon1: '<img src="../img/Quiz/quiz 9-1.svg" alt="Img-decor">',
              icon2: '<img src="../img/Quiz/quiz 9-2.svg" alt="Img-decor">',
              type: 'text',
              btn: 'a',
              link: 'pack.html',
            },
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
                  ${answer.textP}
                  <div class="label">
                    <textarea class="answer-input" type=${answer.type} name=${index} value="${answer.id}" draggable="true">${answer.textT}</textarea>
                    <${answer.btn} href="${answer.link}" class='${answer.btnClass}' id="btn-next" type="submit"></${answer.btn}>
                  </div>
              </li>
              <li class="${answer.classLi2}">
                ${answer.icon1}
                ${answer.icon2}
              </li>
          `)
        .join('')
  
      questions.innerHTML = `
      <div class="quiz-questions-item">
        <div class="quiz-questions-item__question"><p>${DATA[index].question}</p></div>
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
      if (event.target.classList.contains('btn__next-question')) {
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
  