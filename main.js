const form = document.getElementById('inputs_box')
const user = document.getElementById('user')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const userValue = user.value.trim()
    const passwordValue = password.value.trim()

    if (userValue === ''){
        setErrorFor(user)
    } else {
        setSucessFor(user)
    }

    if (passwordValue === ''){
        setErrorFor(password)
    } else {
        setSucessFor(password)
    }
}

function setErrorFor(input){
    if (input === user){
        const border =  document.getElementsById('border_user')
        border.className = 'border_input_error'
    } else if (input === password) {
        const border =  document.getElementsById('border_password')
        border.className = 'border_input_error'
    }
}

function setSucessFor(input){
    if (input === user){
        const border =  document.getElementsById('border_user')
        border.className = 'border_input_sucess'
    } else if (input === password) {
        const border =  document.getElementsById('border_password')
        border.className = 'border_input_sucess'
    }
}