
document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()
    var carYear = document.getElementById('car-year').value.trim()
    var carMake = document.getElementById('car-make')
    var carModel = document.getElementById('car-model') 
    clearError()
    clearCarError() 
  for (inputField of document.querySelectorAll('input')){
    if(inputField.value.trim() !== '' && inputField.parentElement.classList.value === "input-field"){
        inputField.parentElement.classList.add('input-valid')
    } 
    else if (inputField.value.trim() === '' && inputField.parentElement.classList.value === "input-field"){
        inputField.parentElement.classList.add('input-invalid')
    }
     else if (inputField.parentElement.classList.value === "input-group" && (carYear === '' || carMake === '' || carModel === '')) {
        inputField.parentElement.classList.add('input-invalid')
        inputField.parentElement.parentElement.classList.add('input-invalid')
    }
    else if(inputField.value.trim() !== '' && inputField.parentElement.classList.value === "input-group"){
        inputField.parentElement.classList.add('input-valid')
        inputField.parentElement.parentElement.classList.add('input-valid')
  }
  }
})

function clearError (){
    var field = document.querySelectorAll('.input-field')
    for (error of field){
        // console.log(error.id)
        if (error.id !== 'car-field'){
         error.classList.remove('input-invalid')
         error.classList.remove('input-valid')
        }    
    }
}

function clearCarError() {
    var field = document.querySelectorAll('.input-group')
    for (error of field){
        // console.log(error)
         error.classList.remove('input-invalid')
        // error.parentElement.classList.remove('input-invalid')
}
}