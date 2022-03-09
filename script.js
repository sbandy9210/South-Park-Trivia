const myQuestions = [
    {
        question0: 'What pet does Cartman have?',
        answers: {
            A: 'Gerbil',
            B: 'Fish',
            C: 'Cat', 
            D: 'Dog'
        },
        correctAnswer: 'C'
    },

    {
        question1: 'What character did Issac Hayes play on on the show?',
        answers: {
            A: 'Randy Marsh',
            B: 'Chef',
            C: 'Mayor McDaniels', 
            D: 'Mr. Mackey'
        },
        correctAnswer: 'B'
    },

    {
        question2: 'Which one of the following celebrities have not been impersonated on South Park?',
        answers: {
            A: 'Jack Dorsey',
            B: 'Russell Crowe',
            C: 'Mark Zuckerberg', 
            D: 'Kanye West'
        },
        correctAnswer: 'A'
    },

    {
        question3: 'Which character wants to be a stand up comedian?',
        answers: {
            A: 'Token',
            B: 'Butters',
            C: 'Stan', 
            D: 'Jimmy'
        },
        correctAnswer: 'D'
    },

    {
        question4: 'Which character is a Geologist?',
        answers: {
            A: 'Gerald Broflofski',
            B: 'Randy Marsh',
            C: 'Mr. Garrison', 
            D: 'Jimbo'
        },
        correctAnswer: 'B'
    },

    {
        question5: 'According to South Park what kind of music gets rid of hippies',
        answers: {
            A: 'Pop',
            B: 'Country',
            C: 'Metal', 
            D: 'Rap'
        },
        correctAnswer: 'C'
    },

    {
        question6: 'Jesus had a talk show called?',
        answers: {
            A: 'Talk Jesus',
            B: 'Jesus and Friends',
            C: 'Jesus and Pals', 
            D: 'Jesus Live'
        },
        correctAnswer: 'C'
    },

    {
        question7: 'In the episode "Cartman Land" why does Cartman hate theme parks?',
        answers: {
            A: 'Not enough extreme rides',
            B: 'He is afraid of rides',
            C: 'He had an accident at a theme park when he was young', 
            D: 'Too many lines'
        },
        correctAnswer: 'D'
    },

    {
        question8: 'What is Butters first name?',
        answers: {
            A: 'Leopold',
            B: 'Clyde',
            C: 'Stan', 
            D: 'Kyle'
        },
        correctAnswer: 'A'
    },

    {
        question9: 'In the episode "Smug Alert" what does Gerald Broflofski obsess over?',
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

question.innerText = question[0]
let startGame = () => {
    
    if (myQuestions[0] === question.innerText) {
        a.innerText = 'Gerbil'
        b.innerText =  'Fish'
        c.innerText =  'Cat'
        d.innerText =  'Dog'
    } if (myQuestions[1] === question.innerText) {
        a.innerText = 'Randy Marsh'
        b.innerText =  'Chef'
        c.innerText =  'Mayor McDaniels'
        d.innerText =  'Mr. Mackey'
    } if (myQuestions[2] === question.innerText) {
        a.innerText = 'Jack Dorsey'
        b.innerText =  'Russll Crowe'
        c.innerText =  'Mark Zuckerberg'
        d.innerText =  'Kanye West'
    } if (myQuestions[3] === question.innerText) {
        a.innerText = 'Token'
        b.innerText =  'Butters'
        c.innerText =  'Stan'
        d.innerText =  'Jimmy'
    } if (myQuestions[4] === question.innerText) {
        a.innerText = 'Gerald Broflofski'
        b.innerText =  'Randy Marsh'
        c.innerText =  'MR. Garrison'
        d.innerText =  'Jimbo'
    } if (myQuestions[5] === question.innerText) {
        a.innerText = 'Pop'
        b.innerText =  'Country'
        c.innerText =  'Metal'
        d.innerText =  'Rap'
    } if (myQuestions[6] === question.innerText) {
        a.innerText = 'Talk Jesus'
        b.innerText =  'Jesus and Friends'
        c.innerText =  'Jesus and Pals'
        d.innerText =  'Jesus Live'
    } if (myQuestions[7] === question.innerText) {
        a.innerText = 'Not enough extrreme rides'
        b.innerText =  'He is afraid of rides'
        c.innerText =  'He had an accident as a child at at theme park'
        d.innerText =  'Too many lines'
    } if (myQuestions[8] === question.innerText) {
        a.innerText = 'Leopold'
        b.innerText =  'Clyde'
        c.innerText =  'Stan'
        d.innerText =  'Kyle'
    } if (myQuestions[9] === question.innerText) {
        a.innerText = 'Hybrid cars'
        b.innerText =  'Pickup trucks'
        c.innerText =  'SUVs'
        d.innerText =  'sedans'
    } 
    











    // // setting the question text
    // question.innerText = myQuestions[0].q
    
    // getting the options 
    
    // let a = document.getElementById('A');
    // let b = document.getElementById('B');
    // let c = document.getElementById('C');
    // let d = document.getElementById('D');

    // answer1.innerText = myQuestions[0].answers[2].text
    // answer2.innerText = myQuestions[1].answers[1].text
    // answer3.innerText = myQuestions[2].answers[0].text
    // answer4.innerText = myQuestions[3].answers[3].text
    // answer5.innerText = myQuestions[4].answers[1].text
    // answer6.innerText = myQuestions[5].answers[2].text
    // answer7.innerText = myQuestions[6].answers[2].text
    // answer8.innerText = myQuestions[7].answers[3].text
    // answer9.innerText = myQuestions[8].answers[0].text
    // answer10.innerText = myQuestions[9].answers[0].text 

    //show selection for answer choices

    // a.addEventListener('click', () => {
    //     a.style.backgroundColor = 'green';
    //     b.style.backgroundColor = 'red';
    //     c.style.backgroundColor = 'red';
    //     d.style.backgroundColor = 'red';
    // })
    
    // b.addEventListener('click', () => {
    //     a.style.backgroundColor = 'red';
    //     b.style.backgroundColor = 'green';
    //     c.style.backgroundColor = 'red';
    //     d.style.backgroundColor = 'red';
        
    // })

    // c.addEventListener('click', () => {
    //     a.style.backgroundColor = 'red';
    //     b.style.backgroundColor = 'red';
    //     c.style.backgroundColor = 'green';
    //     d.style.backgroundColor = 'red';
        
    // })

    // d.addEventListener('click', () => {
    //     a.style.backgroundColor = 'red';
    //     b.style.backgroundColor = 'red';
    //     c.style.backgroundColor = 'red';
    //     d.style.backgroundColor = 'green';
        
    // })

    



}
startGame();


taget question sextion set to varianle inner text