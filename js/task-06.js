const input = document.querySelector('#validation-input')


input.addEventListener('blur', onBlur)

function onBlur(evt) {

    const maxLength = Number(input.dataset.length)
    const actualLength = input.value.length
    console.log(actualLength);
    if (actualLength===maxLength) {
        input.classList.add('valid')
         input.classList.remove('invalid')
    } else {
         input.classList.add('invalid')
         input.classList.remove('valid')
    }
}