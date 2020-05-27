// USE CLASSES AND CONSTRUCTORS FOR CREATING THE GOALS AND THE REST OF THE ITEMS TO BE CREATED
// YOU ARE SUCH A BOSS***

const Item = {
	constructor() {}
};

const createInput = ({ element, label, placeholder }) => {
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

	const input = element.querySelector('input');
	input.focus();

	const submitBtn = element.querySelector('.submit');
	submitBtn.addEventListener('click', () => {
		createItem();
	});

	const createItem = () => {
		const itemText = input.value;

		let item = document.createElement('div');
		item.classList.add('notification', 'is-primary');
		item.innerHTML = `
            ${itemText} 
            <div class="buttons">
                <button class="button is-small is-success">Done</button>
            </div>
        `;

		element.appendChild(item);

		input.value = '';

		const doneButtons = document.querySelectorAll('.button.is-small.is-success');
		// console.log(doneButton);
		doneButtons.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				console.log(e.target);
				e.target.remove();
			});
		});
		// for (let doneBtn of doneButtons) {
		// 	console.log(doneBtn);
		// 	doneBtn.addEventListener('click', () => {
		// 		element.removeChild(item);
		// 	});
	};
};
createInput({
	element: document.querySelector('#goals'),
	label: 'Goals',
	placeholder: 'What are your goals for today?'
});
