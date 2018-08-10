
document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()
    var carYear = document.getElementById('car-year').value.trim()
    var carMake = document.getElementById('car-make').value.trim()
    var carModel = document.getElementById('car-model').value.trim()
    clearError()
    clearCarError() 
  for (inputField of document.querySelectorAll('input')){
    if(inputField.value.trim() !== '' && inputField.parentElement.classList.value === "input-field"){
        // console.log(inputField)
        inputField.parentElement.classList.add('input-valid')
        // inputField.parentElement.children[0].innerText += ''
        // inputField.parentElement.children[0].classList.remove('error')
    } 
    else if (inputField.value.trim() === '' && inputField.parentElement.classList.value === "input-field"){
        inputField.parentElement.classList.add('input-invalid')
        // requiredMsg()
        inputField.parentElement.children[0].innerHTML += '<span class="errorMsg" style="color: red;"> - Required Field</span>'
        // inputField.parentElement.children[0].classList.add('error')
    }
     else if (inputField.parentElement.classList.value === "input-group" && (carYear === '' || carMake === '' || carModel === '')) {
        inputField.parentElement.classList.add('input-invalid')
        inputField.parentElement.parentElement.classList.add('input-invalid')
        inputField.parentElement.parentElement.children[0].innerHTML += '<span class="errorMsg" style="color: red;"> - Required Field</span>'
        // requiredMsg()
        // inputField.parentElement.parentElement.children[0].innerText = 'Required Field'
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
        // console.log(error)
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
// function requiredMsg(){

//     var errorDiv = document.createElement('div')
//     errorDiv.classList.add('errorMsg')
//     errorDiv.style.color = 'red'
//     errorDiv.innerText = 'Required'

//     var field = document.querySelectorAll('.input-field')
//     for (i of field)
//     i.appendChild(errorDiv)
    
// }
