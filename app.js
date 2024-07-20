
document.addEventListener('DOMContentLoaded',function getRandomColor(){
const changeColorBtn =document.getElementById("changeColorBtn");
const ColorBox = document.getElementById("ColorBox");

let red =Math.floor(Math.random() * 256);
let green =Math.floor(Math.random() * 256);
let blue =Math.floor(Math.random() * 256);

document.getElementById("changeColorBtn").addEventListener('click',function(){
   ColorBox.style.backgroundColor = `rgb(${red},${green},${blue})`;
    return getRandomColor();
})
 })
