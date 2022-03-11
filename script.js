const myQuestions = [
    {
        question: 'What pet does Cartman have?',
        answers: {
            A: 'Gerbil',
            B: 'Fish',
            C: 'Cat', 
            D: 'Dog'
        },
        correctAnswer: 'C'
    },

    {
        question: 'What character did Issac Hayes play on on the show?',
        answers: {
            A: 'Randy Marsh',
            B: 'Chef',
            C: 'Mayor McDaniels', 
            D: 'Mr. Mackey'
        },
        correctAnswer: 'B'
    },

    {
        question: 'Which one of the following celebrities have not been impersonated on South Park?',
        answers: {
            A: 'Jack Dorsey',
            B: 'Russell Crowe',
            C: 'Mark Zuckerberg', 
            D: 'Kanye West'
        },
        correctAnswer: 'A'
    },

    {
        question: 'Which character wants to be a stand up comedian?',
        answers: {
            A: 'Token',
            B: 'Butters',
            C: 'Stan', 
            D: 'Jimmy'
        },
        correctAnswer: 'D'
    },

    {
        question: 'Which character is a Geologist?',
        answers: {
            A: 'Gerald Broflofski',
            B: 'Randy Marsh',
            C: 'Mr. Garrison', 
            D: 'Jimbo'
        },
        correctAnswer: 'B'
    },

    {
        question: 'According to South Park what kind of music gets rid of hippies',
        answers: {
            A: 'Pop',
            B: 'Country',
            C: 'Metal', 
            D: 'Rap'
        },
        correctAnswer: 'C'
    },

    {
        question: 'Jesus had a talk show called?',
        answers: {
            A: 'Talk Jesus',
            B: 'Jesus and Friends',
            C: 'Jesus and Pals', 
            D: 'Jesus Live'
        },
        correctAnswer: 'C'
    },

    {
        question: 'In the episode "Cartman Land" why does Cartman hate theme parks?',
        answers: {
            A: 'Not enough extreme rides',
            B: 'He is afraid of rides',
            C: 'He had an accident at a theme park when he was young', 
            D: 'Too many lines'
        },
        correctAnswer: 'D'
    },

    {
        question: 'What is Butters first name?', 
        answers: {
            A: 'Leopold',
            B: 'Clyde',
            C: 'Stan', 
            D: 'Kyle'
        },
        correctAnswer: 'A'
    },

    {
        question: 'In the episode "Smug Alert" what does Gerald Broflofski obsess over?',
        answers: {
            A: 'Hybrid cars',
            B: 'Pickup trucks',
            C: 'SUVs', 
            D: 'Sedans'
        },
        correctAnswer: 'A'
    }
]


let a = document.getElementById('A');
let b = document.getElementById('B');
let c = document.getElementById('C');
let d = document.getElementById('D');

let start = true;
let question = document.getElementById('questions')
let checkAnswer = document.getElementById('checkAnswer')
let nextQuestion = document.getElementById('next')
let answerSelected = false;

let n = 0 // question counter
question.innerText = myQuestions[n].question
let startGame = () => {
    
    if (myQuestions[0].question === question.innerText) {
        a.innerText = 'Gerbil'
        b.innerText = 'Fish'
        c.innerText = 'Cat'
        d.innerText = 'Dog'
    } if (myQuestions[1].question === question.innerText) {
        a.innerText = 'Randy Marsh'
        b.innerText = 'Chef'
        c.innerText = 'Mayor McDaniels'
        d.innerText = 'Mr. Mackey'
    } if (myQuestions[2].question === question.innerText) {
        a.innerText = 'Jack Dorsey'
        b.innerText = 'Russell Crowe'
        c.innerText = 'Mark Zuckerberg'
        d.innerText = 'Kanye West'
    } if (myQuestions[3].question === question.innerText) {
        a.innerText = 'Token'
        b.innerText = 'Butters'
        c.innerText = 'Stan'
        d.innerText = 'Jimmy'
    } if (myQuestions[4].question === question.innerText) {
        a.innerText = 'Gerald Broflofski'
        b.innerText = 'Randy Marsh'
        c.innerText = 'Mr. Garrison'
        d.innerText = 'Jimbo'
    } if (myQuestions[5].question === question.innerText) {
        a.innerText = 'Pop'
        b.innerText = 'Country'
        c.innerText = 'Metal'
        d.innerText = 'Rap'
    } if (myQuestions[6].question === question.innerText) {
        a.innerText = 'Talk Jesus'
        b.innerText = 'Jesus and Friends'
        c.innerText = 'Jesus and Pals'
        d.innerText = 'Jesus Live'
    } if (myQuestions[7].question === question.innerText) {
        a.innerText = 'Not enough extreme rides'
        b.innerText = 'He is afraid of rides'
        c.innerText = 'He had an accident as a child at at theme park'
        d.innerText = 'Too many lines'
    } if (myQuestions[8].question === question.innerText) {
        a.innerText = 'Leopold'
        b.innerText = 'Clyde'
        c.innerText = 'Stan'
        d.innerText = 'Kyle'
    } if (myQuestions[9].question  === question.innerText) {
        a.innerText = 'Hybrid cars'
        b.innerText = 'Pickup trucks'
        c.innerText = 'SUVs'
        d.innerText = 'Sedans'
    } 
}

    a.addEventListener('click', () => {
        answerSelected = true
        a.style.backgroundColor = 'blue';
        b.style.backgroundColor = 'white';
        c.style.backgroundColor = "white";
        d.style.backgroundColor = "white";
    })
    
    b.addEventListener('click', () => {
        answerSelected = true
        a.style.backgroundColor = "white";
        b.style.backgroundColor = 'blue';
        c.style.backgroundColor = "white";
        d.style.backgroundColor = "white";
        
    })

    c.addEventListener('click', () => {
        answerSelected = true
        a.style.backgroundColor = "white";
        b.style.backgroundColor = "white";
        c.style.backgroundColor = 'blue';
        d.style.backgroundColor = "white";
        
    })

    d.addEventListener('click', () => {
        answerSelected = true
        a.style.backgroundColor = "white";
        b.style.backgroundColor = "white";
        c.style.backgroundColor = "white";
        d.style.backgroundColor = 'blue';
    })



    checkAnswer.addEventListener('click', () => {
        if (answerSelected){
            if (myQuestions[0].question === question.innerText) {
                document.getElementById(myQuestions[0].correctAnswer).style.backgroundColor = 'green'
            
            }  else if (myQuestions[1].question === question.innerText) {
                document.getElementById(myQuestions[1].correctAnswer).style.backgroundColor = 'green'
            
            } else if (myQuestions[2].question === question.innerText) {
                document.getElementById(myQuestions[2].correctAnswer).style.backgroundColor = 'green'
        
            } else if (myQuestions[3].question === question.innerText) {
                document.getElementById(myQuestions[3].correctAnswer).style.backgroundColor = 'green'
            
            } else if (myQuestions[4].question === question.innerText) {
                document.getElementById(myQuestions[4].correctAnswer).style.backgroundColor = 'green'
            } else if (myQuestions[5].question === question.innerText) {
                document.getElementById(myQuestions[5].correctAnswer).style.backgroundColor = 'green'
            } else if (myQuestions[6].question === question.innerText) {
                document.getElementById(myQuestions[6].correctAnswer).style.backgroundColor = 'green'
            } else if (myQuestions[7].question === question.innerText) {
                document.getElementById(myQuestions[7].correctAnswer).style.backgroundColor = 'green'
            } else if (myQuestions[8].question === question.innerText) {
                document.getElementById(myQuestions[8].correctAnswer).style.backgroundColor = 'green'
            } else if (myQuestions[9].question  === question.innerText) {
                document.getElementById(myQuestions[9].correctAnswer).style.backgroundColor = 'green'
            } else {
                document.getElementsID(myQuestions.answers).style.backgroundColor = 'white'
            }
        }
})


    nextQuestion.addEventListener('click', () => {
        answerSelected = false
        n++
        question.innerText = myQuestions[n].question
        startGame();
        a.style.backgroundColor = 'white';
        b.style.backgroundColor = 'white';
        c.style.backgroundColor = "white";
        d.style.backgroundColor = "white";
    })
    startGame();
    














    