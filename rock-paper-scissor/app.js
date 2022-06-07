const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const gameGrid = document.getElementById('game')

gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);


const choices = ['rock', 'paper', 'scissors'];
let Userchoice;
let computerChoice;

let objectAdd = 'guns'

const operator = [...choices]

const addObject = () => {
    operator.push(objectAdd)
    operator.push('otra madre')
    console.log(operator);
}

addObject()

const handleClick = (e) => {
    Userchoice = e.target.innerHTML;
    userChoiceDisplay.innerHTML = Userchoice;
    generateComputerChoice();
    getResult()
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice;
    computerChoiceDisplay.innerHTML = `Computer choice ${randomChoice}`
}

// for (let i = 0; i < choices.length; i++) {
//     const button = document.createElement('button');
//     button.id = choices[i];
//     button.innerHTML = choices[i];
//     button.addEventListener('click', handleClick);
//     gameGrid.appendChild(button);

// }

choices.forEach(choice =>{
    const button = document.createElement('button');
    button.innerHTML = choice;
    button.addEventListener('click',handleClick)
    gameGrid.appendChild(button);
})

const getResult = () =>{
    switch (Userchoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissor':
        case 'paperrock':
            resultDisplay.innerHTML = 'you Win!'
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.innerHTML = 'you lose!'
            break
        case 'paperpaper':
        case 'scissorsscissor':
        case 'rockrock':
            resultDisplay.innerHTML = 'you drawn!'
            break
                     
    }
}