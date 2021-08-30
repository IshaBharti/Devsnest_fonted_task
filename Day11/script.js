let quesNo = 0
let score = 0
let selectedOption = ""
let correctAnsCount = 0
const question = document.querySelector('.question')
let options = document.querySelectorAll(".li") 
const submit = document.getElementById('submit');

const myQuestions = [
  {
    question: 'Who invented Computer?',
    answers: {
      0: 'Douglas Crockford',
      1: 'Sheryl Sandberg',
      2: 'Charles Babbage',
      3: 'Charles Baba',
    },
    correctAnswer: 'Charles Babbage',
  },
  {
    question: 'what is the Capital of India',
    answers: {
      0: 'Kolkata',
      1: 'Jaipur',
      2: 'Delhi',
      3: 'Mumbai',
    },
    correctAnswer: 'Delhi',
  },
  {
    question: 'What is a best for learning  Node js',
    answers: {
      0: 'Node.js',
      1: 'TypeScript',
      2: 'npm',
      3: 'Express.js',
    },
    correctAnswer: 'Express.js',
  },
  {
    question: 'What is the full form of HTML?',
    answers: {
      0: 'Hyper Text Makeup Language',
      1: 'Hyper Term Markup Language',
      2: 'Hyper Text Markup Language',
      3: 'Hyper Text Marksup Language',
    },
    correctAnswer: 'Hyper Text Markup Language',
  },
  {
    question: 'What is the National Bird of India?',
    answers: {
      0: 'Parrot',
      1: 'Peacock',
      2: 'Sparrow',
      3: 'Ostrich',
    },
    correctAnswer: 'Peacook',
  },
]

nextQuestions(quesNo)

function nextQuestions(quesNo) {
  getQuestions(myQuestions[quesNo])
  getOptions(myQuestions[quesNo])
}

function getQuestions(currentQues) {
  question.innerText = currentQues.question
}

function getOptions(currentQues) {
  for (i in options) {
    options[i].innerHTML = currentQues.answers[i]
  }
}

function optionSelect(t){
  selectedOption = t
  selectedOption.classList.toggle('selected')

}

submit.addEventListener('click', (e) => {
  let correctAnswer = myQuestions[quesNo].correctAnswer
  let choosenAnswer = selectedOption.innerText

  if (choosenAnswer == correctAnswer) {
    selectedOption.classList.toggle('correctAns')


    Swal.fire({
      icon: 'success',
      title: 'Congrugaltion! \n Your Answer is Corret...!',
      text: 'You scored 5 points.',
      showConfirmButton: true,
      confirmButtonText: '<i class="fa fa-right"></i> Next  ',
      showCancelButton: true,
    })

    choosenAnswer = ''
    score = score + 5
    document.getElementById("score").innerText=score 
    correctAnsCount++

    selectedOption.setAttribute('class', 'li')
    selectedOption.classList.remove('correctAns')
  } else {
    selectedOption.classList.toggle('wrongAns')
    Swal.fire({
      icon: 'error',
      title: `Sorry, Answer is Wrong \n You didn't Score anything!`,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Next!',
      timer: 5000,
    })

    selectedOption.classList.remove('wrongAns')
  }
  selectedOption.classList.remove('selected')
  quesNo++
  choosenAnswer = ''
  correctAnswer = ''
  selectedElement = ''
  if (quesNo === myQuestions.length){

     
Swal.fire({
  title: 'Your Quiz Score : '+ score + ' points.' +'\n' +   'Correct Answer ' + correctAnsCount+'/'+  myQuestions.length, 
  text: ' Great!',
  imageWidth: 400,
  imageHeight: 200,
  imageUrl: 'https://clipground.com/images/img-http-forum-kde-org-content-bcooksley_sig-clipart-img-5.jpg',
  imageAlt: 'Custom image',
  confirmButtonText: 'Try Again!'
}).then(() => {
     window.location.href = window.location.href;

})
  }else{
    nextQuestions(quesNo)

  }

})

function getEventTarget(e) {
  e = e || window.event
  return e.target || e.srcElement
}