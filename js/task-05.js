const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')
const defaultText = span.textContent;


input.addEventListener('change', onChange)

function onChange(evt) {
   

    span.textContent=evt.currentTarget.value
    if (evt.currentTarget.value==='') {
        span.textContent=defaultText
        
    }


    
}