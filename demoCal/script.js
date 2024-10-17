
function appendNumber(number){
        const display = document.getElementById('display');
        display.value += number;
}
function clearDisplay(){
    document.getElementById('display').value='';
}
function calculate(){
    const display = document.getElementById('display');
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value='Error';
    }
}