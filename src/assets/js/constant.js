// This object let us select a custom message by its key
// if our input.name = first, we can do a ERROR_MESSAGE[input.name]
// and get the value of the key "first"
export const ERROR_MESSAGE = {
	first: 'Le prénom doit contenir au moins 2 caractères.',
	last: 'Le nom doit contenir au moins 2 caractères.',
	email: "Le format de l'adresse email est incorrect",
	birthdate: 'Veuillez saisir une date de naissance',
	quantity: "Le nombre saisi n'est pas valide",
	location: 'Veuillez sélectionner une localisation pour le tournoi',
	gcu: 'Vous devez accepter les CGU'
}

// our validation div on a string, it will be injected
// in the dom if the form is valid
export const VALIDATION_DIV = `<div class="validation">
		<span>Merci pour votre inscription</span>
		<button class="close-btn">
          Fermer
        </button>
	</div>`
