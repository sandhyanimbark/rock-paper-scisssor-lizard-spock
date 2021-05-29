const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal');
openBtn.addEventListener('click',() => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click',() => {
    modal.style.display = 'none';
});


let [computer_score,user_score]=[0,0];
let result_ref = document.getElementById("result");
let choices_object = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose',
        'lizard' : 'win',
        'spock' : 'lose',
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win',
        'lizard' : 'win',
        'spock' : 'lose',
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw',
        'lizard' : 'lose',
        'spock' : 'win',
    },
    'lizard' : {
        'rock' : 'lose',
        'scissor' : 'lose',
        'paper' : 'win',
        'lizard' : 'draw',
        'spock' : 'win',
    },
    'spock' : {
        'rock' : 'win',
        'scissor' : 'win',
        'paper' : 'lose',
        'lizard' : 'lose',
        'spock' : 'draw',
    }

}

function checker(input){
    var choices = ["rock", "paper", "scissor", "lizard", "spock"];
    var num = Math.floor(Math.random()*5);

    document.getElementById("comp_choice").innerHTML = 
    ` Computer choose <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML = 
    ` You choose <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}