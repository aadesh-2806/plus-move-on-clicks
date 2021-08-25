const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const body = document.querySelector('body');

box1.addEventListener('click' , ()=>{
    body.style.backgroundColor =  'red';
})

box2.addEventListener('click' , ()=>{
    body.style.backgroundColor =  'blueviolet';
})

box3.addEventListener('click' , ()=>{
    body.style.backgroundColor =  'yellow';
})

box4.addEventListener('click' , ()=>{
    body.style.backgroundColor =  'green';
})
