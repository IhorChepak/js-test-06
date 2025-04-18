const form = document.querySelector('.login-form')

form.addEventListener('submit', onSubmit)

function onSubmit(evt) {
   
    evt.preventDefault()

    const {email, password}=evt.currentTarget.elements;

    if(email.value===''|| password.value===''){
        alert('Усі поля повинні бути заповнені!');
        return
    }

const data = {
    email: email.value,
    password: password.value
}
console.log(data);
form.reset()
}
