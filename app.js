createInput({
	element: document.querySelector('#goals'),
	label: 'Goals',
	placeholder: 'What are your goals for today?',
	isHidden: false
});

createInput({
	element: document.querySelector('#about-yesterday'),
	label: 'About Yesterday',
	placeholder: 'Name 3 good things that happened yesterday',
	isHidden: true
});

createInput({
	element: document.querySelector('#about-today'),
	label: 'About Today',
	placeholder: 'Name 3 things to improve upon today',
	isHidden: true
});

const mains = document.querySelectorAll('main');
const tabs = document.querySelectorAll('.tabs li');

tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		for (let tab of tabs) {
			tab.classList.remove('is-active');
		}

		for (let main of mains) {
			main.classList.add('is-hidden');
		}

		tab.classList.add('is-active');
		mains[index].classList.remove('is-hidden');

		const mainInput = document.querySelectorAll('main input');
		mainInput[index].focus();
	});
});
