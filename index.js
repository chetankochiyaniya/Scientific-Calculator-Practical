function elem(val){
        display.value+=val;
        console.log(display.value)
}

function equal()
{
    if((display.value).includes("^")) {

       display.value = (display.value).replace("^","**")
    } 
        display.value = eval( display.value)
   
}

function clear_val(){
    display.value = " ";
}

function back() {
    const val = display.value;
    console.log("back function")
    display.value = val.substr(0, val.length - 1);
}

var fact_ans=1,num;
function fact(){
       num = parseInt(display.value)
      while (num!=0) {
        fact_ans = fact_ans * num;
        num--;
      }
      display.value = fact_ans.toString()
}

function inverseSign(){
    display.value = -1 * display.value;
}

function exp_func(){
    display.value = Math.exp(display.value)
}

function abs_val(){
    display.value = Math.abs(display.value)
}
function div_by_one() {
    display.value = 1 / (display.value);
}

function square(){
    display.value = display.value * display.value;
}

function square_root(){
    display.value = Math.sqrt(display.value);
}

function yRoot(){
    display.value = display.value + "^";
}

function xRoot(){
    display.value = Math.pow(10, display.value)
}

function logarithm(base){
    if(base=="ten"){
        display.value = Math.log10(display.value)
    }
    else
    {
        display.value = Math.log(display.value)
    }
    
}

function euler_num(){
    display.value = Math.E
}

function pi_val(){
    display.value = Math.PI
}

function trigo(t){
    console.log("test", t)
    switch(t){
        case "sin":
            display.value = (Math.sin((Math.PI / 180) * display.value))
            break;
        case "cos":
            display.value = (Math.cos(Math.PI / 180 * display.value))
            break;
        case "tan":
            display.value = (Math.tan(Math.PI / 180 * display.value))
            break;
        case "sec":
            display.value = (1 / Math.cos(Math.PI / 180 * display.value))
            break;
        case "csc":
            display.value = (1 / Math.sin(Math.PI / 180 * display.value))
            break;
        case "cot":
            display.value = 1 / (Math.tan(Math.PI / 180 * display.value))
            break;
        case "asin":
            display.value = (180 / Math.PI * Math.asin(display.value))
            break;
        case "acos":
            display.value = (Math.acos(Math.PI / 180 * display.value))
            break;
        case "atan":
            display.value = (Math.atan(Math.PI / 180 * display.value))
            break;
        case "asec":
            display.value = (1 / Math.acos(Math.PI / 180 * display.value))
            break;
        case "acsc":
            display.value = (1 / Math.asin(Math.PI / 180 * display.value))
            break;
        case "acot":
            display.value = 1 / (Math.atan(Math.PI / 180 * display.value))
            break;
        case "sinh":
            display.value = (Math.sinh(display.value))
            break;
        case "cosh":
            display.value = (Math.cosh(display.value))
            break;
        case "tanh":
            display.value = (Math.tanh(display.value))
            break;
        case "sech":
            display.value = (1/Math.cosh(display.value))
            break;
        case "csch":
            display.value = (1/Math.sinh(display.value))
            break;
        case "coth":
            display.value = (1/Math.tanh(display.value))
            break;
        case "asinh":
            display.value = (Math.asinh(display.value));
            break;
        case "acosh":
            display.value = (Math.acosh(display.value))
            break;
        case "atanh":
            display.value = (Math.atanh(display.value))
            break;
        case "asech":
            display.value = (1/Math.acosh(display.value))
            break;
        case "acsch":
            display.value = (1/Math.asinh(display.value))
            break;
        case "acoth":
            display.value = (1/Math.atanh(display.value))
            break;

        
    }
}

function floor() {
    display.value = Math.floor(display.value);
}

function ceil() {
    display.value = Math.ceil(display.value);
}

function rand() {
    display.value = Math.random();
}

function dms() {
    let dms = Number(display.value);
    let deg = parseInt(dms);
    let sec = (dms.toFixed(4) - dms.toFixed(2))*10000;
    let min = (dms.toFixed(2) - deg)*100;
    console.log(sec +" "+min);
    deg = deg + min / 60 + sec / 3600;
    display.value = deg.toFixed(2).toString();
}

function deg() {
    let deg = Number(display.value);
    let minutes = (deg - parseInt(deg)) * 60;
    let seconds = (minutes - parseInt(minutes)) * 60;
    display.value = parseFloat(`${parseInt(deg)}.${parseInt(minutes)}${parseInt(seconds)}`).toFixed(4).toString();
}