
 
document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()
    var carYear = document.getElementById('car-year').value.trim()
    var carMake = document.getElementById('car-make').value.trim()
    var carModel = document.getElementById('car-model').value.trim()
    clearError()
    clearCarError()
    validCar() 
    validDate()
    daysValidation()
    validCVV()
    getPrice()
    for (inputField of document.querySelectorAll('input')){
        if(inputField.value.trim() !== '' && inputField.parentElement.classList.value === "input-field"){
            inputField.parentElement.classList.add('input-valid')
        } 
        else if (inputField.value.trim() === '' && inputField.parentElement.classList.value === "input-field"){
            inputField.parentElement.classList.add('input-invalid')
            inputField.parentElement.children[0].innerHTML += '<span class="errorMsg" style="color: red;"> - Required Field</span>'
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

function daysValidation (){
var numberOfDays = parseInt(document.getElementById('days').value, 10)
//   console.log(numberOfDays)
  if(!isNaN(numberOfDays) && numberOfDays <= 30 && numberOfDays >= 1){
  document.getElementById('days-field').classList.remove('input-invalid')
  document.getElementById('days-field').classList.add('input-valid')  
} 
else if (document.getElementById('days').value !== ''){
  document.getElementById('days-field').classList.remove('input-valid')
  document.getElementById('days-field').classList.add('input-invalid')
  document.getElementById('days-field').children[0].innerHTML += '<span class="errorMsg" style="color: red;"> - Days must be bewtween 1-30</span>'
}
}
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
    var carYear = parseInt(document.getElementById('car-year').value.trim(), 10)
    
    var year = new Date()
    if (!isNaN(carYear) && carYear>1900 && carYear !=='' && carYear<=year.getFullYear()){
        validCarYear = true
    } else {
        validCarYear = false
    }
}
function validDate(){
var currentDate = new Date()
var parkingDate = new Date(document.getElementById('start-date').value)
// console.log(parkingDate)
if(currentDate < parkingDate){
    document.getElementById('start-date-field').classList.remove('input-invalid')
    document.getElementById('start-date-field').classList.add('input-valid')  
} 
else if (currentDate > parkingDate && parkingDate !== ''){
    document.getElementById('start-date-field').classList.remove('input-valid')
    document.getElementById('start-date-field').classList.add('input-invalid')
  //   document.getElementById('start-date-field').children[0].innerHTML
    document.getElementById('start-date-field').children[0].innerHTML += '<span class="errorMsg" style="color: red;"> - Date Must be Future Date</span>'
}
}

function validCVV(){
    var cvvNumber = parseInt(document.getElementById('cvv').value.trim(), 10)
    var cvv = document.getElementById('cvv').value.trim()
   
    if (!isNaN(cvvNumber) && cvv.length === 3 && cvv !== ''){
        // console.log('good')
        document.getElementById('cvv-field').classList.remove('input-invalid')
        document.getElementById('cvv-field').classList.add('input-valid') 
    } else {
        // console.log('wrong')
        document.getElementById('cvv-field').classList.add('input-invalid')
        document.getElementById('cvv-field').classList.remove('input-valid') 
        document.getElementById('cvv-field').children[0].innerHTML += '<span class="errorMsg" style="color: red;"> - Must be 3 Digit Number</span>'
    }
}

function getPrice(){
    var startDay = document.getElementById('start-date').value
    var newDate = new Date(startDay.replace(/-0+(?=\d)/, '-'))
    // console.log(newDate)
    var daysNeeded = document.getElementById('days').value
    var currentDay = new Date()
    var priceArray = []
    for(i = 0; i < daysNeeded; i++){
        currentDay.setDate(newDate.getDate() + i)
        // console.log(currentDay)
        priceArray.push(currentDay.getDay())
        // console.log(priceArray)
    }
    var reducer = (price, total) => price + total
    var pricePerDay = []
    for(day of priceArray){
        if(day >= 1 && day <= 5){
            pricePerDay.push(5)
        } else {
            pricePerDay.push(7)
        }
    }
    var parkingTotal = pricePerDay.reduce(reducer, 0)

    document.getElementById('total').innerText = "Total Parking Payment: $"+parkingTotal
    // console.log(parkingTotal)
}