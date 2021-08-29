/* Random Comp Choices*/

function getComputerChoice(){
    const comp = Math.random();

    if(comp<0.34) return 'batu';
    if (comp>=0.34 && comp<0.67) return 'kertas';
    return 'gunting';
}

/* WIN OR LOSE OR DRAW */

function getGameResult(comp,user){
    let result = '';
    if (user == comp) {
        result = 'DRAW';
        document.getElementById("result").style = "position: absolute; width: 271.11px; height: 166.93px; left: 620px; top: 489.89px; background: #035B0C; border-radius: 10px; transform: rotate(-28.87deg); font-size: 2rem; color: whitesmoke";
    } else if (user == 'batu' && comp == 'gunting') {
        result = 'PLAYER WIN!';
        document.getElementById("result").style = "position: absolute; width: 271.11px; height: 166.93px; left: 620px; top: 489.89px; background: #4C9654; border-radius: 10px; transform: rotate(-28.87deg); font-size: 2rem; color: whitesmoke";
    } else if (user == 'gunting' && comp == 'kertas') { 
        result = 'PLAYER WIN!';
        document.getElementById("result").style = "position: absolute; width: 271.11px; height: 166.93px; left: 620px; top: 489.89px; background: #4C9654; border-radius: 10px; transform: rotate(-28.87deg); font-size: 2rem; color: whitesmoke;";
    } else if (user == 'kertas' && comp == 'batu') {
        result = 'PLAYER WIN!';
        document.getElementById("result").style = "position: absolute; width: 271.11px; height: 166.93px; left: 620px; top: 489.89px; background: #4C9654; border-radius: 10px; transform: rotate(-28.87deg); font-size: 2rem; color: whitesmoke;";
    } else {
        result = 'COM WIN!';
        document.getElementById("result").style = "position: absolute; width: 271.11px; height: 166.93px; left: 620px; top: 489.89px; background: #4C9654; border-radius: 10px; transform: rotate(-28.87deg); font-size: 2rem; color: whitesmoke;";
    }
    return result;
}

/* User and Comp Choices and Change Comp Background */

const pilihBatu = document.querySelector('.batu');
pilihBatu.addEventListener('click', function(){
    const computerChoice = getComputerChoice();
    const userChoice = pilihBatu.className;
    const result = getGameResult(computerChoice, userChoice);

    const info = document.querySelector('.info');
    info.innerHTML = result;

    if (computerChoice == 'batu'){
        document.getElementById("bgComRock").style.backgroundColor = "#C4C4C4";
    } else if (computerChoice == 'kertas'){
        document.getElementById("bgComPaper").style.backgroundColor = "#C4C4C4";
    } else if (computerChoice == 'gunting'){
        document.getElementById("bgComScissor").style.backgroundColor = "#C4C4C4";
    }

    console.log('com: ' + computerChoice);
    console.log('player: ' + userChoice)
    console.log('result: ' + result);
    
});

const pilihKertas = document.querySelector('.kertas');
pilihKertas.addEventListener('click', function(){
    const computerChoice = getComputerChoice();
    const userChoice = pilihKertas.className;
    const result = getGameResult(computerChoice, userChoice);

    const info = document.querySelector('.info');
    info.innerHTML = result;

    if (computerChoice == 'batu'){
        document.getElementById("bgComRock").style.backgroundColor = "#C4C4C4";
    } else if (computerChoice == 'kertas'){
        document.getElementById("bgComPaper").style.backgroundColor = "#C4C4C4";
    } else if (computerChoice == 'gunting'){
        document.getElementById("bgComScissor").style.backgroundColor = "#C4C4C4";
    } 

    console.log('com: ' + computerChoice);
    console.log('player: ' + userChoice)
    console.log('result: ' + result);
    
});

const pilihGunting = document.querySelector('.gunting');
pilihGunting.addEventListener('click', function(){
    const computerChoice = getComputerChoice();
    const userChoice = pilihGunting.className;
    const result = getGameResult(computerChoice, userChoice);

    const info = document.querySelector('.info');
    info.innerHTML = result;

    if (computerChoice == 'batu'){
        document.getElementById("bgComRock").style.backgroundColor = "#C4C4C4";
    } else if (computerChoice == 'kertas'){
        document.getElementById("bgComPaper").style.backgroundColor = "#C4C4C4";
    } else if (computerChoice == 'gunting'){
        document.getElementById("bgComScissor").style.backgroundColor = "#C4C4C4";
    } 

    console.log('com: ' + computerChoice);
    console.log('player: ' + userChoice)
    console.log('result: ' + result);
    
});

/* User Click Choices and Change User Background */

const clickRock = () => {
    const bgColor = document.querySelector('.batu');
    bgColor.style.backgroundColor = "#C4C4C4";
} 

const clickPaper = () => {
    const bgColor = document.querySelector('.kertas');
    bgColor.style.backgroundColor = "#C4C4C4";
} 

const clickScissor = () => {
    const bgColor = document.querySelector('.gunting');
    bgColor.style.backgroundColor = "#C4C4C4";
} 

/* Refresh Button */

function refreshButton(){
    location.reload();
}