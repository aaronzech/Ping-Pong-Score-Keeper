
//Variables
let winningScore = 3;
let isGameOver = false;

const p1 = {

	score: 0,
	button: document.querySelector('#p1Button'),
	display:document.querySelector('#p1Score')
	
}

const p2 = {

	score: 0,
	button: document.querySelector('#p2Button'),
	display:document.querySelector('#p2Score')
	
}


function updateScores(player,opponent){
	if(!isGameOver){
		player.score +=1;
		if(player.score === winningScore){
			isGameOver = true;
			player.display.classList.add('has-text-success');
			opponent.display.classList.add('has-text-danger');
			player.button.disabled = true;
			opponent.button.disabled = true;
		}	
		player.display.textContent = player.score;
	}

	
}


// Grab Buttons
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');

winningScoreSelect.addEventListener('change', function(){
	
	winningScore = parseInt(this.value);
	reset();
	
})


// Update Score for Player 1
p1.button.addEventListener('click',function(){
	updateScores(p1,p2);
})

// Update Score for Player 2
p2.button.addEventListener('click',function(){
updateScores(p2,p1);
})


//Reset game
resetButton.addEventListener('click',reset)



// Reset Game displays and variables
function reset(){
	
	isGameOver = false;
	for (let p of [p1,p2]){
		p.score=0;
		p.display.textContent = 0;
		p.display.classList.remove('has-text-danger','has-text-success');
	
		p.button.disabled = false;
	}
	//p1.display.classList.remove('has-text-danger','has-text-success');
	///p2.display.classList.remove('has-text-danger','has-text-success');
}