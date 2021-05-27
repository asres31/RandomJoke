

const newJokeBtn = document.getElementById('newJokeBtn');
const punchLineBtn = document.getElementById('punchLineBtn');
const jokeBox = document.getElementById('setup'); 
const punchLineBox = document.getElementById('punchline');
let punchLine;

punchLineBtn.addEventListener('click', getPunchline)
newJokeBtn.addEventListener('click', getJoke)

function getPunchline(){
	punchLineBox.innerHTML = punchLine;
	punchLineBox.classList.add('bubbel')
	punchLineBtn.classList.toggle('hidden')
	newJokeBtn.classList.toggle('hidden')
}


async function getJoke(){
	const getPromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
	const convertJoke = await getPromise.json();
	
	jokeBox.innerHTML = convertJoke[0].setup;
	punchLine = convertJoke[0].punchline;
	
	punchLineBox.innerHTML = ''
	punchLineBox.classList.remove('bubbel')
	
	punchLineBtn.classList.toggle('hidden')
	newJokeBtn.classList.toggle('hidden')
}

getJoke()
