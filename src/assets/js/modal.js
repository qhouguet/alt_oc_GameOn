// DOM Elements
const modalBg = document.querySelector('.bground')
const modalContent = document.querySelector('.content')
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')
const closeModalBtn = document.querySelectorAll('.close')
const menuBtn = document.getElementById('menu')
const form = document.querySelector('form')
const body = document.querySelector('body')

// launch modal form
const launchModal = () => {
    modalBg.style.display = 'block'
    body.classList.add('no-scroll')

    // add event listener on body to close modal if clicked outside
    body.addEventListener('click', closeModalOutsideIfClickedOutside)
}
// hide modal form
export const closeModal = () => {
    // We're targeting our div in the function because it can only exist if the modal was open
    const validationDiv = document.querySelector('.validation')
    modalBg.style.display = 'none'
    body.classList.remove('no-scroll')

    // form reset
    form.style.display = 'flex'
    form.reset()
    // We remove datasets to "reset" the state of the form
    form.querySelectorAll(
        '#checkbox1, .text-control, input[name="location"]'
    ).forEach((i) => {
        i.removeAttribute('data-error')
        i.removeAttribute('data-error-message')
    })

    // we remove the validation div if it exists
    if (validationDiv) {
        const closeBtn = document.querySelector('.close-btn')
        closeBtn.removeEventListener('click', closeModal)
        validationDiv.remove()
    }

    // remove event listener when modal is closed
    body.removeEventListener('click', closeModalOutsideIfClickedOutside)
}

const isModalBtn = (clickedElement) => {
    // we need to check if the clicked element is one of the button to open modal
    // we need to use the Array.from() method on modalBtn because querySelectorAll returns a nodelist
    return Array.from(modalBtn).some((btn) => btn.contains(clickedElement))
}

const closeModalOutsideIfClickedOutside = (event) => {
    // we check if clicked element is in the modal content or if its not the button to open the modal itself
    if (!modalContent.contains(event.target) && !isModalBtn(event.target)) {
        closeModal()
    }
}

const editNav = () => {
    var x = document.getElementById('myTopnav')
    if (x.className === 'topnav') {
        x.className += ' responsive'
    } else {
        x.className = 'topnav'
    }
}

// launch events
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))
closeModalBtn.forEach((btn) => btn.addEventListener('click', closeModal))
menuBtn.addEventListener('click', editNav)
