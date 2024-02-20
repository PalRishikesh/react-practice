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
    47: 32
};
// const dice = document.querySelector(".dice");
const tile = document.querySelectorAll(".tile");


// dice.addEventListener('dragstart',(e)=>{
//     console.log("Drag started...");
// })
// dice.addEventListener('dragend',(e)=>{
//     console.log("Drag ended...");
// })

{/* <div class="tile"></div> */ }

let diceNumber = 0;
for (const singleTile of tile) {
    diceNumber++;
    const nodeElement = document.createElement('span');
    nodeElement.classList.add('tile-number')
    // nodeElement.attributes('data-d0',0);
    nodeElement.innerHTML = diceNumber
    singleTile.appendChild(nodeElement);
    // singleTile.addEventListener('dragover',(e)=>{
    //     e.preventDefault();
    //     console.log("Drag over it");
    // })
    singleTile.addEventListener('drop', (e) => {
        console.log('drop here');
        e.target.append(dice);
    })

    if (diceNumber == 3) {
        // console.log("sss");
        // const diceElement = document.createElement('span');
        // diceElement.classList.add('dice')
        // singleTile.appendChild(diceElement)
    }
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
const generateDiceRandomNumber = ()=>{
    return Math.floor(Math.random() * 6) + 1
}
const changeCoinPosition = (previousDiceNumber,diceType) => {
    let previousDiceChildren = tile[previousDiceNumber].children;
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

const checkLadderObjectMatches=(currentSumOfDiceNumber)=>{
    if (ladders[currentSumOfDiceNumber + 1]) {
        currentSumOfDiceNumber += ladders[currentSumOfDiceNumber + 1];
    }
    return currentSumOfDiceNumber;
}

const checkSnakeObjectMatches=(currentSumOfDiceNumber)=>{
    if (snakes[currentSumOfDiceNumber + 1]) {
        currentSumOfDiceNumber -= snakes[currentSumOfDiceNumber + 1];
    }
    return currentSumOfDiceNumber;
}

const addCoinFinalPosition = (currentSumOfDiceNumber,diceType)=>{
    const diceElement = document.createElement('span');
    diceElement.classList.add(diceType)
    tile[currentSumOfDiceNumber].appendChild(diceElement)
}


let lastDiceNumber = 0;
function rollDice() {
    changeCoinPosition(lastDiceNumber,'dice');
    const randomNumber = generateDiceRandomNumber();
    lastDiceNumber += randomNumber;
    let value = document.getElementById("diceValue");
    value.innerHTML = lastDiceNumber;

    // Roll the dice with css start herr
    rollDiceWithUI(randomNumber);
    // Roll the dice css end here

    // Check for ladder value 
    lastDiceNumber = checkLadderObjectMatches(lastDiceNumber);
    lastDiceNumber = checkSnakeObjectMatches(lastDiceNumber);

    // Adding fincal coin poistion
    addCoinFinalPosition(lastDiceNumber,'dice');
}

let lastDiceNumberSystem = 0;
function rollDiceSystem() {
    changeCoinPosition(lastDiceNumberSystem,'dice-system');
    const randomNumber = generateDiceRandomNumber();
    lastDiceNumberSystem += randomNumber;
    let value = document.getElementById("systeDiceValue");
    value.innerHTML = lastDiceNumberSystem;

    // Roll the dice with css start herr
    rollDiceWithUI(randomNumber);
    // Roll the dice css end here

    // Check for ladder value 
    lastDiceNumberSystem = checkLadderObjectMatches(lastDiceNumberSystem);
    lastDiceNumberSystem = checkSnakeObjectMatches(lastDiceNumberSystem);

    // Adding fincal coin poistion
    addCoinFinalPosition(lastDiceNumberSystem,'dice-system');
    // let childElement = tile[lastDiceNumberSystem].childNodes;
    // // console.log("childElementL ", childElement);
    // let innerChild = childElement[2];
    // for (let index = 0; index < childElement.length; index++) {
    //     const element = childElement[index];
    //     if (element.className === 'dice-system') {
    //         innerChild = element;
    //         break;
    //     }
    // }
    // // let innerChild = childElement[2];
    // innerChild.remove()
    // // childElement[0].classList.remove('tile-number')
    // // console.log("innerChild: ",innerChild.remove());
    // const randomNumber = Math.floor(Math.random() * 6) + 1
    // lastDiceNumberSystem += randomNumber

    // console.log("lastDiceNumberSystem: ", lastDiceNumberSystem);
    // let value = document.getElementById("systeDiceValue");
    // value.innerHTML = randomNumber;
    // rollDiceWithUI(randomNumber);
    // // Check for ladder value 
    // if (ladders[lastDiceNumberSystem + 1]) {
    //     console.log("found ladder : ", lastDiceNumberSystem);
    //     console.log(ladders[lastDiceNumberSystem + 1]);
    //     lastDiceNumberSystem += ladders[lastDiceNumberSystem + 1];
    // }
    // // Check for snake value 
    // if (snakes[lastDiceNumberSystem + 1]) {
    //     console.log("found snake : ", lastDiceNumberSystem);

    //     console.log(snakes[lastDiceNumberSystem + 1]);
    //     lastDiceNumberSystem -= snakes[lastDiceNumberSystem + 1];
    // }
    // const diceElement = document.createElement('span');
    // diceElement.classList.add('dice-system')
    // tile[lastDiceNumberSystem].appendChild(diceElement)
}


function altLastRolldefaultPlace() {
    // <span class="dice" draggable="true"></span>
    const diceElement = document.createElement('span');
    diceElement.classList.add('dice')
    tile[0].appendChild(diceElement)
}
altLastRolldefaultPlace();

function altLastRolldefaultPlaceSystem() {
    // <span class="dice" draggable="true"></span>
    const diceElement = document.createElement('span');
    diceElement.classList.add('dice-system')
    tile[0].appendChild(diceElement)
}
altLastRolldefaultPlaceSystem();