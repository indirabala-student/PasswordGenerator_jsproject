const lowerCaseLetters="abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers="0123456789";
const symbols="!@#&()[{}]:;',?/*~$^+=<>-";


const isLowercaseRequired=document.getElementById('lowerCase');
const isUppercaseRequired=document.getElementById('upperCase');
const isSymbolRequired=document.getElementById('symbols');
const isNumberRequired=document.getElementById('numbers');
const lengthEl=document.getElementById('length');
const generateBtn=document.getElementById('getPassword');
const password=document.getElementById('password');


generateBtn.addEventListener("click", function(){

    const length=lengthEl.value;
    let pasword= "";
    let characters= "";


    if(isLowercaseRequired.checked){
        characters += lowerCaseLetters;
    }

    if(isUppercaseRequired.checked){
        characters += upperCaseLetters;
    }

    if(isSymbolRequired.checked){
        characters += symbols;
    }

    if(isNumberRequired.checked){
        characters += numbers;
    }


    for(let i=0;i<length;i++){
        pasword +=characters.charAt(Math.floor(Math.random()*characters.length));
    }

    password.value=pasword;
});