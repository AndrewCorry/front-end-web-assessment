let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBrn = document.querySelector('#ritual')

function favoriteColor(event){
    event.preventDefault()
    alert('My favorite color is olive')

}
function favoritePlace(event){
    event.preventDefault()
    alert('My favorite place is my home')

}
function favoriteRitual(event){
    event.preventDefault()
    alert('My favorite ritual is a hot shower')

}




colorBtn.addEventListener('click', favoriteColor)
placeBtn.addEventListener('click',favoritePlace)
ritualBrn.addEventListener('click',favoriteRitual)

