const input = document.querySelector('input');
const btn = document.querySelector('button');
const p = document.querySelector('#duplicateField')
const myBtn = document.querySelector('button[type]');
input.addEventListener('input', function() {
    p.textContent = input.value;
})


btn.addEventListener('click', function(){
    console.log(input.value);
    document.querySelector("input").value = "";
    document.getElementById("duplicateField").textContent = "";
})


myBtn.addEventListener('mouseover', function(){
  myBtn.style.color = "#ffffff";
  myBtn.style.background = "#4169E1";
});

myBtn.addEventListener('mouseout', function(){
  myBtn.style.color = "#000000";
  myBtn.style.background = "#00CED1";
});