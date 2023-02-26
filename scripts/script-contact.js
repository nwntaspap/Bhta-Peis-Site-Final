document.addEventListener('DOMContentLoaded', () => {
	const formEl = document.querySelector('#contact-form');

	formEl.addEventListener('submit', e => {
		e.preventDefault();
		const formData = new FormData(formEl);
		const nameError = document.querySelector('#nameError');
		const emailError = document.querySelector('#emailError');
		const commentsError = document.querySelector('#commentsError');
		const phoneError = document.querySelector('#phoneError');
		const successMessage = document.querySelector('#successMessage');

		//clear old errors (reset)
		nameError.innerHTML = '';
		emailError.innerHTML = '';
		commentsError.innerHTML = '';
		phoneError.innerHTML = '';

		let errors = [];
		//Validate name
		if(formData.get('name').trim().length === 0) {
			nameError.innerHTML = 'Name is required';
			errors.push('name');
		}

		//Validate email
		if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.get('email'))) {
			emailError.innerHTML = 'Please enter a valid email!'
			errors.push('email');
		}

		//Validate comments
		if(formData.get('comments').trim().length === 0) {
			commentsError.innerHTML = 'Comments are required!!'
			errors.push('comments');
		} else if (formData.get('comments').trim().length < 10) {
			commentsError.innerHTML = 'Comments should have at least 10 characters but you have inserted: '
				+ formData.get('comments').length;
			errors.push('comments');
		}

		//Validate phone
		const phoneNumber = formData.get('phone').trim();
		if(isNaN(phoneNumber)) {
			phoneError.innerHTML = 'Phone number should be a number!'
			errors.push('phone');
		} else {
			if(phoneNumber.length !== 10) {
				phoneError.innerHTML = 'Phone number must have 10 digits!'
				errors.push('phone');
			}
		}


		if(errors.length === 0) {
			let message = '';
			message += `Your name is: ${formData.get('name').trim()} </br>`;
			message += `Your email is: ${formData.get('email').trim()} </br>`;
			message += `Your comments are: ${formData.get('comments').trim()} </br>`;
			message += `Your phone is: ${formData.get('phone').trim()} </br>`;

			successMessage.innerHTML = message;
			successMessage.style.display = 'block';
			formEl.reset();
		} else {
			successMessage.style.display = 'none';
		}
	})
})