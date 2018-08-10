
document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()
    var carYear = document.getElementById('car-year').value.trim()
    var carMake = document.getElementById('car-make').value.trim()
    var carModel = document.getElementById('car-model').value.trim()
    clearError()
    clearCarError()
    validCar() 
    validDate()
  for (inputField of document.querySelectorAll('input')){
    if(inputField.value.trim() !== '' && inputField.parentElement.classList.value === "input-field"){
        inputField.parentElement.classList.add('input-valid')
    } 
    else if (inputField.value.trim() === '' && inputField.parentElement.classList.value === "input-field"){
        inputField.parentElement.classList.add('input-invalid')
        inputField.parentElement.children[0].innerHTML += '<span class="errorMsg" style="color: red;"> - Required Field</span>'
    // } else if (validDate === false){
    //     document.getElementById('start-date-field').classList.add('input-invalid')
    // } else if(validDate === true){
    //     document.getElementById('start-date-field').classList.remove('input-invalid')
    //     document.getElementById('start-date-field').classList.add('input-valid')
    }
     else if (inputField.parentElement.classList.value === "input-group" && ((validCarYear === false) || (carMake === '') || (carModel === ''))) {
        // console.log(validCarYear)
        inputField.parentElement.classList.add('input-invalid')
        inputField.parentElement.parentElement.classList.add('input-invalid')
        inputField.parentElement.parentElement.children[0].innerHTML += '<span class="errorMsg" style="color: red;"> - Required Field</span>'
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
        if (error.id !== 'car-field'){
         error.classList.remove('input-invalid')
         error.classList.remove('input-valid')
        }   
    }
        var label = document.querySelectorAll('.errorMsg')
    for (errorMsg of label){
        if (errorMsg) {
            errorMsg.remove()
          }
    }
}

function clearCarError() {
    var field = document.querySelectorAll('.input-group')
    for (error of field){
         error.classList.remove('input-invalid')
         error.classList.remove('input-valid')
        error.parentElement.classList.remove('input-invalid')
        error.parentElement.classList.remove('input-valid')
        }
    var label = document.querySelectorAll('.errorMsg')
    for (errorMsg of label){
        if (errorMsg) {
             errorMsg.remove()
        }
    }
}
var validCarYear;
function validCar() {
    var carYear = parseInt(document.getElementById('car-year').value.trim())
    
    var year = new Date()
    if (!isNaN(carYear) && carYear>1900 && carYear !=='' && carYear<=year.getFullYear()){
        validCarYear = true
    } else {
        validCarYear = false
    }
}

var validDate;

function validDate(){
    var currentDate = new Date()
    var parkingDate = new Date(document.getElementById('start-date').value)
    // console.log(parkingDate)
    if(currentDate < parkingDate){
        validDate = true
        // document.getElementById('start-date-field').classList.remove('input-invalid')
        // document.getElementById('start-date-field').classList.add('input-valid')  
    } 
    else {
        validDate = false
        // document.getElementById('start-date-field').classList.add('input-invlaid')
    }

}