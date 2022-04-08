// funcionalidad de la calculadora
const result = document.getElementById('result');
const form1 = document.getElementById('form');
const equal = document.getElementById('equal');
const clean = document.getElementById("clean");
const delet = document.getElementById('del');

function OperantV(operantV){
    let OperantV = result.value;
    result.value = OperantV + operantV;
}

equal.addEventListener('click', (e) => {
    e.preventDefault();
    calculate();
})

clean.addEventListener('click', (e) => {
    e.preventDefault();    
    form1.reset();
})

delet.addEventListener('click', (e) => {
    e.preventDefault();
    Back();
})

function calculate(){
    if(result.value !== ""){
        const resultDef = result.value;
        result.value = eval(resultDef);
        if (result.value == Infinity){
        alert("Revise los valores e intente de nuevo");
        result.value = 0;
        }
        else if(isNaN(result.value)){
        alert("Revise los valores e intente de nuevo");
        result.value = 0;
        }
    }else{
        alert("Revise los valores e intente de nuevo");
    }
}

function Back(){
    const resultDef = result.value;
    result.value = resultDef.substring(0, resultDef.length-1);
}


 //funcionalidad para cambio de temas

function ChangeTheme(theme){
    document.getElementById('btnTheme').value = theme;

    if (theme == 1){
        document.body.classList.remove('dark');
        document.body.classList.remove('light');
        localStorage.setItem("theme", "Normal");
    }

    else if(theme == 2){
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem("theme", "Light");
    }

    else{
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem("theme", "Dark");
    }

} 
      
document.addEventListener("DOMContentLoaded", (e) =>{
    if(localStorage.getItem("theme") === "Normal"){
        document.body.classList.remove('dark');
        document.body.classList.remove('light');
        document.getElementById('btnTheme').value = 1
    }

    if(localStorage.getItem("theme") === "Light"){
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        document.getElementById('btnTheme').value = 2
    }

    if(localStorage.getItem("theme") === "Dark"){
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        document.getElementById('btnTheme').value = 3
    }
})