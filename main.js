const magicBall = document.querySelector('.magic-ball');
const answerMsg = document.querySelector('.answer');
const errorMsg = document.querySelector('.error');
const input = document.querySelector('input');

const answers = [
	'Tak',
	'Zdecydowanie tak',
	'Bez wątpienia',
	'Możesz na nim polegać',
	'Pewnie!',
	'Najprawdopodobniej',
	'Znaki wskazują na tak',
	'Odpowiedź niewyraźna, spróbuj ponownie',
	'Zapytaj ponownie później',
	'Lepiej nie mówić ci teraz',
	'Nie można teraz przewidzieć',
	'Nie licz na to',
	'Moja odpowiedź brzmi nie',
	'Moje źródła mówią nie',
	'Nie',
	'Zdecydowanie nie',
];

const randomAnswer = (answer) => {
	const randomElement = Math.floor(Math.random() * answer.length);
	answerMsg.innerHTML = `<span>Odpowiedź: </span> ${answer[randomElement]}`;
};

const checkInput = () => {
	if (input.value === '') {
		errorMsg.textContent = 'Musisz zadać pytanie!';
		answerMsg.innerHTML = '';
	} else if (input.value.endsWith('?') === false) {
		errorMsg.textContent = 'Pytanie musi kończyć się znakiem zapytania "?"';
		answerMsg.innerHTML = '';
	} else {
		randomAnswer(answers);
		errorMsg.textContent = '';
		input.value = '';
	}
};

const removeAnimation = () => {
	magicBall.classList.remove('shake-animation');
};

const showAnimation = () => {
	magicBall.classList.add('shake-animation');
	setTimeout(checkInput, 1000);
	setTimeout(removeAnimation, 1000);
};

magicBall.addEventListener('click', showAnimation);
