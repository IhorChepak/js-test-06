const value = document.querySelector('#value')
let counterValue = 0;
const buttons = document.querySelectorAll('button')

buttons.forEach(item => {
    item.addEventListener('click', ()=>{
        const action=item.dataset.action
        if (action==="increment") {
            counterValue+=1
        } else if(action==="decrement"){
            counterValue-=1
        } value.textContent=counterValue
    })
    
});