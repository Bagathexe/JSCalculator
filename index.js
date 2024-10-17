const display=document.getElementById('display');

function clearDisplay(){
    display.value='';
}

function appendToDisplay(number){
    display.value +=number
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value='ERROR';
    }
}
function Delete(){
    const value =display.value
    display.value = display.value.substring(0,display.value.length-1)

}
function SpecialOperator(){
    display.value()
}