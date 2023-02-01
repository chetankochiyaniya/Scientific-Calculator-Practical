function elem(val){
        display.value+=val;
        console.log(display.value)
}

function equal()
{
    if((display.value).includes("^")) {
       display.value = (display.value).replace("^","**")
    } 
     if (display.value.includes("log_base_y")) {
        let y = log_base_y(display.value);
        display.value = (Math.log(y[0]) / Math.log(y[1])).toString();
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

function x_pow_y(){
    display.value = display.value + "^";
}

function ten_pow_x(){
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

function cube() {
    display.value = Math.pow(display.value, 3);
}

function cube_root() {
    display.value = Math.pow(display.value, 1 / 3);
}

function x_pow_four(){
    display.value = Math.pow(display.value, 4);
}

function two_pow_x() {
    display.value = Math.pow(2, display.value);
}

function log_base_y(value) {
    let z = value.search("log_base_y");
    let y = value.substring(0, z);
    let x = value.substring(z + 4, value.length);
    return [x, y]
}
function e_pow_x() {
    display.value = Math.exp(display.value);
}

var f=1;
function change_btn() {
    if (f) {
        for (let element of document.getElementsByClassName('btn1-show')) {
            element.style.display = "none";
        }
        for (let element of document.getElementsByClassName('btn2-show')) {
            element.style.display = "inline-block";
        }
        f = 0;
    }
    else {
        for (let element of document.getElementsByClassName('btn2-show')) {
            element.style.display = "none";
        }
        for (let element of document.getElementsByClassName('btn1-show')) {
            element.style.display = "inline-block";
        }
        f = 1;
    }
}

var k = 1;
function change_btn_color() {
    if (k == 1) {
        document.getElementById("change_btn").style.backgroundColor = "rgb(146, 199, 214)"
        k = 0;
    }
    else {
        document.getElementById("change_btn").style.backgroundColor = "#EFEFEF";
        k = 1;
    }
}

var memory = [];
function m_store() {
    enb_btn();
    memory.push(parseFloat(display.value));
    console.log("store")
}

function enb_btn() {
    document.getElementById('mc').disabled = false;
    document.getElementById('mr').disabled = false;
}

function m_clear() {
    memory = [];
    console.log(memory);
    document.getElementById('mc').disabled = true;
    document.getElementById('mr').disabled = true
    console.log("clear")
}

function m_read() {
    display.value = memory[memory.length - 1].toString();
    console.log("read",diplay.value)
}

function m_plus() {
    enb_btn();
    console.log(memory)
    if (memory.length == 0) {
        memory.push(parseFloat(display.value));
    }
    else {
        memory[memory.length - 1] += parseFloat(display.value);
    }

}

function m_minus() {
    enb_btn();
    if (memory.length == 0) {
        memory.push((-1) * parseFloat(display.value));
    }
    else {
        memory[memory.length - 1] -= parseFloat(display.value);
    }
}
