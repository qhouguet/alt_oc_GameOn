const editNav = () => {
	var x = document.getElementById('myTopnav')
	if (x.className === 'topnav') {
		x.className += ' responsive'
	} else {
		x.className = 'topnav'
	}
}

// DOM Elements
const modalBg = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')
const closeModalBtn = document.querySelectorAll('.close')
const menuBtn = document.getElementById('menu')
const form = document.querySelector('form')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))
closeModalBtn.forEach((btn) => btn.addEventListener('click', closeModal))

// launch modal form
function launchModal() {
	modalBg.style.display = 'block'
}
// hide modal form
function closeModal() {
	// We're targeting our div in the function because it doesn't always exist
	// in the html, so we need to check every time
	const validationDiv = document.querySelector('.validation')
	modalBg.style.display = 'none'

	// form reset
	form.style.display = 'flex'
	form.reset()

	// we remove the validation div if it exists
	if (validationDiv) validationDiv.remove()
}

menuBtn.addEventListener('click', editNav)
