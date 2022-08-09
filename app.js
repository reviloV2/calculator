const result = document.querySelector('.calc-screen');
const numbers = document.querySelectorAll('.number');
const del = document.querySelector('#del');
const equals = document.querySelector('#equals');
const reset = document.querySelector('#reset');
const theme1 = document.querySelector('#one');
const theme2 = document.querySelector('#two');
const theme3 = document.querySelector('#three');
const styleref = document.querySelector('#theme');

numbers.forEach(number =>{
    number.addEventListener('click', (e) =>{

         result.value += e.target.innerText;
        })
    })

reset.addEventListener('click',(e)=>{
    result.value = '';
})

del.addEventListener('click',(e)=>{
    result.value = result.value.slice(0,-1);
})

equals.addEventListener('click',(e)=>{
    try{
    result.value = eval(result.value);
    } catch{
        result.value = 'Error!'
    }
})

theme1.addEventListener('click',(e)=>{
    styleref.href = './stylesheet.css';
})

theme2.addEventListener('click',(e)=>{
    styleref.href = './stylesheet2.css';
})

theme3.addEventListener('click',(e)=>{
    styleref.href = './stylesheet3.css';
})