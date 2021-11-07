let text="";
let num1=0;
let num2=0;
let op=" ";
let display = document.getElementById("disp-box");
function data(num){
    if(op == " "){
        num1 = num1*10+num;
    }
    else
    num2 = num2*10+num;
    text_update();
}

function text_update(){
    // console.log(num1+op+"/");
    if(op == " "){
        console.log(num1);
        text = num1;
    }
    console.log(text);
    display.innerHTML=text;
}