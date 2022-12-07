function sum(){
    let n1=parseFloat(document.getElementById("num1").value )
    let n2=parseFloat(document.getElementById("num2").value )
    document.getElementById("display").innerHTML= n1 +n2
}

function ms(){
    let num=document.getElementById("display").innerHTML;
    localStorage.setItem("calculator", num)
}

function rs(){
    let num=parseFloat(localStorage.getItem("calculator"));
    document.getElementById("num1").value= num;

}

function sm{
    let num=parseFloat(localStorage.getItem("calculator"));
    let tdisplay=parseFloat(document.getElementById("display").innerHTML);
    localStorage.setItem("calculator", (tdisplay +num));
}


// function MSuma(){
//     let num=parseFloat( localStorage.getItem("calculadora"))
//     let tdisplay=parseFloat(document.getElementById("display").innerHTML)
//     localStorage.setItem("calculadora",( num+tdisplay));
// }