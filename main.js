const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const yourScore = document.querySelector('[data-your-score');
const computerScore = document.querySelector('[data-computer-score');
const SELECTIONS = [
	{
		name:'rock',
		emoji:'✊',
		beat:'scissor'
	},
	{
		name:'paper',
		emoji:'✋',
		beat:'rock'
	},
	{
		name:'scissor',
		emoji:'✌️',
		beat:'paper'
	}
]


selectionButtons.forEach(selectionButton=>{
	selectionButton.addEventListener('click', e=>{
		const selectionName = selectionButton.dataset.selection;
		const selection = SELECTIONS.find(selection=>selection.name === selectionName);

		makeSelection(selection);
	})
})
function makeSelection(selection){
	const computerSelection = randomSelection();
	const yourWinner = isWinner(selection, computerSelection);
	const computerWinner = isWinner(computerSelection, selection);
	addSelectionResults(computerSelection, computerWinner);
	addSelectionResults(selection, yourWinner);
	if(yourWinner) incrementScore(yourScore);
	if(computerWinner) incrementScore(computerScore);
}
function addSelectionResults(selection, winner){
	const div = document.createElement('div');
	div.innerText = selection.emoji;
	div.classList.add('result-selection');
	if(winner) div.classList.add('winner');
	finalColumn.after(div);
}
function incrementScore(score){
	score.innerText = parseInt(score.innerText) + 1;
}

function isWinner(selection, opponentSelection){
	return selection.beat === opponentSelection.name
}

function randomSelection(){
	const  randomIndex = Math.floor(Math.random() * SELECTIONS.length);
	return SELECTIONS[randomIndex]
}