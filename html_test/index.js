console.log("javaScript");

const ladders = {
    6: 40,
    19: 24,
    52: 19,
    57: 41
};
const snakes = {
    96: 21,
    62: 22,
    48: 31
};
// const dice = document.querySelector(".dice");
const tile = document.querySelectorAll(".tile");
let userWonCount = 0;
let systemWonCount = 0;


// dice.addEventListener('dragstart',(e)=>{
//     console.log("Drag started...");
// })
// dice.addEventListener('dragend',(e)=>{
//     console.log("Drag ended...");
// })


let diceNumber = 0;
for (const singleTile of tile) {
    diceNumber++;
    const nodeElement = document.createElement('span');
    nodeElement.classList.add('tile-number')
    // nodeElement.attributes('data-d0',0);
    nodeElement.innerHTML = diceNumber
    // singleTile.appendChild(nodeElement);
    // singleTile.addEventListener('dragover',(e)=>{
    //     e.preventDefault();
    //     console.log("Drag over it");
    // })
    singleTile.addEventListener('drop', (e) => {
        console.log('drop here');
        e.target.append(dice);
    })

}
const rollDiceWithUI = (randomNumber) => {
    let dice = document.querySelector(".dice-rolling");
    console.log("dice ", dice);
    let innerDiceElement = dice.children;

    let innerDice = innerDiceElement[0];
    innerDice.remove();
    let className = 'dice_' + randomNumber;
    const diceValue = document.createElement('span');
    diceValue.classList.add(className)
    dice.appendChild(diceValue)

}
const generateDiceRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1
}
const changeCoinPosition = (previousDiceNumber, diceType) => {
    const currentPosition = getNextPointerPosition(previousDiceNumber);
    console.log("currentPosition: ", currentPosition);
    // console.log("previousDiceNumber: ",previousDiceNumber);
    let previousDiceChildren = currentPosition.children;
    let previousDiceElement = '';
    for (let index = 0; index < previousDiceChildren.length; index++) {
        const element = previousDiceChildren[index];
        if (element.className === diceType) {
            previousDiceElement = element;
            break;
        }
    }
    // Removing the dice from previous location
    previousDiceElement.remove();
}

const checkLadderObjectMatches = (currentSumOfDiceNumber) => {
    let present = false;
    if (ladders[currentSumOfDiceNumber]) {
        currentSumOfDiceNumber += ladders[currentSumOfDiceNumber];
        present = true;
    }
    return [currentSumOfDiceNumber, present];
}

const checkSnakeObjectMatches = (currentSumOfDiceNumber) => {
    let present = false;
    if (snakes[currentSumOfDiceNumber]) {
        currentSumOfDiceNumber -= snakes[currentSumOfDiceNumber];
        present = true;
    }
    return [currentSumOfDiceNumber, present];
}

const getNextPointerPosition = (nextBoardPosition) => {
    let nextPointerElement = '';
    for (const singleTile of tile) {
        //Check next element value
        if (singleTile.getAttribute('data-id') == nextBoardPosition) {
            console.log("singleTile: ", singleTile);
            console.log("singleTile: ", singleTile.getAttribute('data-id'));
            nextPointerElement = singleTile;
            break;
        }
    }
    return nextPointerElement;
}
const addCoinFinalPosition = (currentSumOfDiceNumber, diceType) => {
    const diceElement = document.createElement('span');
    diceElement.classList.add(diceType)

    // setTimeout(()=>{
    // tile[currentSumOfDiceNumber].appendChild(diceElement)
    // },500)
    // console.log("currentSumOfDiceNumber: ",currentSumOfDiceNumber);
    // console.log("tile: ",tile);
    // console.log("tile id: ",tile[currentSumOfDiceNumber].getAttribute('data-id'));
    const nextElementPosition = getNextPointerPosition(currentSumOfDiceNumber);
    console.log("nextElementPosition: ", nextElementPosition);
    nextElementPosition.appendChild(diceElement);
}


const userSucess = () => {
    userWonCount = userWonCount + 1;
    alert("User success")
    const userCount = document.getElementById("userWonCount")
    userCount.innerHTML = userWonCount;
    resetGame();
    return;
}

const systemSuccess = () => {
    systemWonCount = systemWonCount + 1;
    alert("System success")

    const systemCount = document.getElementById("systemWonCount")
    systemCount.innerHTML = systemWonCount;
    resetGame();
    return;
}

const resetGame = () => {
    const diceNumber = getNextPointerPosition(lastDiceNumber);
    const systemDiceNumber = getNextPointerPosition(lastDiceNumberSystem);
    console.log("Remove diceNumber: ", diceNumber.children);
    console.log("systemDiceNumber diceNumber: ", systemDiceNumber.children);
    diceChildren = diceNumber.children;
    diceSystemChildren = systemDiceNumber.children;
    console.log("diceChildren: ", diceChildren);

    setTimeout(() => {
        diceChildren[1].remove();
        diceSystemChildren[1].remove();
        addCoinFinalPosition(lastDiceNumber, 'dice')
        addCoinFinalPosition(lastDiceNumberSystem, 'dice-system')
        resetPoiner();
    }, 1000)
    lastDiceNumber = 1;
    lastDiceNumberSystem = 1;

}
const resetPoiner = () => {
    const btn = document.getElementById('dice');
    btn.disabled = false;
    const systemBtn = document.getElementById('systemDice');
    systemBtn.disabled = false;
}

const checkFinishline = () => {
    // console.log("lastDiceNumber: ",lastDiceNumber);
    // console.log("lastDiceNumberSystem: ",lastDiceNumberSystem);
    if (lastDiceNumber == 100) {
        userSucess();
        return true;
    }
    if (lastDiceNumberSystem == 100) {
        systemSuccess();
        return true;
    }
}

let lastDiceNumber = 1;
function rollDice() {
    const boardPointerMessage = document.getElementById("boardPointerMessage");
    boardPointerMessage.innerHTML = '';
    boardPointerMessage.classList.remove('board-success-message')
    boardPointerMessage.classList.remove('board-fail-message')
    let userClickDiceRoll = '';
    let extraChange = false;
    changeCoinPosition(lastDiceNumber, 'dice');
    const randomNumber = generateDiceRandomNumber();
    if (randomNumber == 6) {
        extraChange = true;
    }

    if (lastDiceNumber + randomNumber <= 100) {
        lastDiceNumber += randomNumber;
    }
    let value = document.getElementById("diceValue");
    value.innerHTML = lastDiceNumber;

    // Roll the dice with css start herr
    rollDiceWithUI(randomNumber);
    // Roll the dice css end here

    // Check for ladder value 
    const ladderCheckList = checkLadderObjectMatches(lastDiceNumber);
    console.log("ladderCheckList: ", ladderCheckList);
    lastDiceNumber = ladderCheckList[0];
    const snakeCheckList = checkSnakeObjectMatches(lastDiceNumber);
    lastDiceNumber = snakeCheckList[0];


    // Adding fincal coin poistion
    if (lastDiceNumber <= 100) {
        addCoinFinalPosition(lastDiceNumber, 'dice');
    }
    else {
        lastDiceNumber -= randomNumber;
    }
    if (!extraChange) {
        const btn = document.getElementById('dice');
        btn.disabled = true;
        const systemBtn = document.getElementById('systemDice');
        systemBtn.disabled = false;
        console.log(btn);
        userClickDiceRoll = setTimeout(() => {
            rollDiceSystem();
        }, 500);


    }
    else {
        // console.log("ITs 6");
        const btn = document.getElementById('systemDice');
        btn.disabled = true;
        boardPointerMessage.classList.add('board-success-message')
        boardPointerMessage.innerHTML = "You Got Six..., Please Play again."


    }
    if (snakeCheckList[1]) {
        boardPointerMessage.classList.add('board-fail-message')
        boardPointerMessage.innerHTML = "You lose the poin with Snake..."
    }
    if (ladderCheckList[1]) {
        boardPointerMessage.classList.add('board-success-message')
        boardPointerMessage.innerHTML = "You Got Ladder..."
    }
    let isFinish = checkFinishline();
    if (isFinish) {
        clearTimeout(userClickDiceRoll);
    }
}

let lastDiceNumberSystem = 1;
function rollDiceSystem() {
    let extraChange = false;
    let userClickDiceRoll = '';
    changeCoinPosition(lastDiceNumberSystem, 'dice-system');
    const randomNumber = generateDiceRandomNumber();

    if (randomNumber == 6) {
        extraChange = true;
    }

    if (lastDiceNumberSystem + randomNumber <= 100) {
        lastDiceNumberSystem += randomNumber;
    }
    let value = document.getElementById("systeDiceValue");
    value.innerHTML = lastDiceNumberSystem;

    // Roll the dice with css start herr
    rollDiceWithUI(randomNumber);
    // Roll the dice css end here

    // Check for ladder value 
    const ladderCheckList = checkLadderObjectMatches(lastDiceNumberSystem);
    lastDiceNumberSystem = ladderCheckList[0];
    const snakeCheckList = checkSnakeObjectMatches(lastDiceNumberSystem);
    lastDiceNumberSystem = snakeCheckList[0];

    // Adding fincal coin poistion

    if (lastDiceNumber <= 100) {
        addCoinFinalPosition(lastDiceNumberSystem, 'dice-system');
    }
    else {
        lastDiceNumberSystem -= randomNumber;
    }
    if (!extraChange) {
        const btn = document.getElementById('dice');
        btn.disabled = false;
        const systemBtn = document.getElementById('systemDice');
        systemBtn.disabled = true;
        // console.log(btn);
        // setTimeout(() => {
        // rollDice();
        // }, 500);
    }
    else {
        userClickDiceRoll = setTimeout(() => {
            rollDiceSystem();
        }, 500);
    }
    let isFinish = checkFinishline();
    if (isFinish) {
        clearTimeout(userClickDiceRoll);
    }

}
