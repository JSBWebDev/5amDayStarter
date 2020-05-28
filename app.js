const createInput = ({ element, label, placeholder, isHidden }) => {
	element.innerHTML = `
        <div class="field">
            <label for="" class="label">${label}</label>
            <div class="control">
                <input class="input" type="text" placeholder="${placeholder}">
                <button class="submit button is-link">Submit</button>
            </div>
        </div>
        <hr>
	`;

	if (isHidden) {
		element.classList.add('is-hidden');
	}

	const input = element.querySelector('input');
	input.focus();

	const submitBtn = element.querySelector('.submit');
	submitBtn.addEventListener('click', () => {
		createItem();
		input.focus();
	});

	const createItem = () => {
		const itemText = input.value;

		const item = document.createElement('div');
		item.classList.add('notification', 'is-link');
		item.innerHTML = `
            ${itemText} 
			<button class="button is-small is-success">Done</button>
        `;

		element.appendChild(item);

		input.value = '';

		const doneButtons = document.querySelectorAll('.button.is-small.is-success');
		doneButtons.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				e.target.parentElement.remove();
			});
		});
	};
};

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
	});
});

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
