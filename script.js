
document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()
  
    clearError()

  for (inputField of document.querySelectorAll('input')){
    if (inputField.value.trim() === '' && inputField.parentElement.classList.value === "input-field"){
        inputField.parentElement.classList.add('input-invalid')
    } else if(inputField.value.trim() === '' && inputField.parentElement.classList.value === "input-group") {
        inputField.parentElement.classList.add('input-invalid')
        inputField.parentElement.parentElement.classList.add('input-invalid')
    }
  }
  })

function clearError (){
    var field = document.querySelectorAll('.input-field')
    for (error of field){
        error.classList.remove('input-invalid')
    }
}