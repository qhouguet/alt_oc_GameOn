import { ERROR_MESSAGE, VALIDATION_DIV } from './constant.js'
import { closeModal } from './modal.js'

// check if a field is checked / valid
const checkField = (input) => {
	return input.type === 'checkbox' ? input.checked : input.checkValidity()
}
// updating our datasets
const updateStates = (element, isValid) => {
	updateErrorMessage(element, isValid)
	updateErrorState(element, isValid)
}
// updating our data-error to trigger css changes
const updateErrorState = (element, isValid) => {
	element.dataset.error = !isValid
}
// updating our data-error-message to show it on our span
const updateErrorMessage = (element, isValid) => {
	const errorDiv = element.parentNode.querySelector('.error-message')
	errorDiv.dataset.errorMessage = !isValid ? ERROR_MESSAGE[element.name] : ''
}
// we check for every input that have class text-control or id checkbox1
// if it is valid and returns true only if everyone is valid
const validateTextAndCheckboxFields = () => {
	let isValid = true
	document.querySelectorAll('#checkbox1, .text-control').forEach((e) => {
		const fieldIsValid = checkField(e)
		updateStates(e, fieldIsValid)
		if (!fieldIsValid) {
			isValid = false
		}
	})
	return isValid
}
// we check our radios and if at least one is valid, we return true
const validateLocationFields = () => {
	const locationInputs = document.querySelectorAll('input[name="location"]')
	const isOneLocationChecked = Array.from(locationInputs).some(checkField)
	updateStates(document.getElementById('location1'), isOneLocationChecked)
	return isOneLocationChecked
}
// we check every input and return true only if everyone is valid
const checkFields = () => {
	const textAndCheckboxFieldsValid = validateTextAndCheckboxFields()
	const locationFieldsValid = validateLocationFields()
	return textAndCheckboxFieldsValid && locationFieldsValid
}
// because we can't use properly our css with :valid and :invalid
// selectors for input type date and radios, we're adding multiple event listeners
// that trigger on change / blur to check validity of our fields
document.querySelectorAll('.text-control, #checkbox1').forEach((input) => {
	const handleEvent = ({ target }) => {
		updateStates(target, checkField(target))
	}
	input.onchange = handleEvent
	input.onblur = handleEvent
})
document
	.querySelectorAll('input[name="location"]')
	.forEach((input) => (input.onchange = validateLocationFields))
// our event listener on the submit button to check the full form validity
// and trigger our validation div with our validation message if its valid
// we're also using preventDefault method as we're not really sending an API request
// and we don't want the page to reload
document.querySelector('.btn-submit').addEventListener('click', (event) => {
	event.preventDefault()

	const form = document.querySelector('form')

	if (checkFields()) {
		form.style.display = 'none'
		form.parentNode.insertAdjacentHTML('beforeend', VALIDATION_DIV)
		const closeBtn = document.querySelector('.close-btn')
		closeBtn.addEventListener('click', closeModal)
	}
})
