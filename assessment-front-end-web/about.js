console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted')
}

function compliment(event){
	event.preventDefault()

	alert('You have good taste, User')
}
let catPic = document.querySelector('img')
let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
catPic.addEventListener('mouseover', compliment)