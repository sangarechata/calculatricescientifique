const result = document.getElementById('result')
const bouttons = document.querySelectorAll('.btn-primary')

bouttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        result.value += event.target.id;
    })
})

equal.addEventListener('click',()=>{
    result.value = eval(result.value)
})

clean.addEventListener('click',()=>{
    result.value=""
})

document.addEventListener('keydown',(event)=>{
    if(event.key ==="Enter"){
        result.value = eval(result.value)
    }else if(event.key === 'Backspace'){
        result.value=""
    }
})
