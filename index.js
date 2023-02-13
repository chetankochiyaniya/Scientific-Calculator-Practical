let keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '%', '^', '(', ')', '.'];
document.addEventListener('keydown', (event) => {
    let k = event.key;
    if (k == 'Delete') {
        clear_val();
    }
    if (k == 'Backspace') {
        back();
    }
    if (k == 'Enter' || k == '=') {
        if (d.value)
            equal();
    }
    if (keys.includes(k)) {
        d.value += k;
    }
    validate()
});

document.addEventListener("click", (event) => {
    validate()
})


function elem(val) {
    if (d.value == "invalid input") {
        d.value = val
    }
    else {
        d.value += val;
    }
}

function equal() {
    if ((d.value).includes("^")) {
        d.value = (d.value).replace("^", "**")
    }
    if (d.value.includes("ylog")) {
        let z = (d.value).search("ylog");
        let y = (d.value).substring(0, z);
        let x = (d.value).substring(z + 4, (d.value).length);
        d.value = (Math.log(x) / Math.log(y)).toString();

    }
    d.value = eval(d.value)
}

function clear_val() {
    d.value = " ";
}

function back() {
    const val = d.value;
    d.value = val.substr(0, val.length - 1);
}

function getFact(n) {
    let result = 1;
    if (n > 1) {
        for (let i = 1; i <= n; i++) {
            result = result * i;
        }
        return result;
    }
    else {
        return "num should be positive";
    }
}

function fact() {
    d.value = getFact(parseInt(d.value)).toString();
}

function validate() {
    if (d.value == "NaN" || d.value == "-Infinity") {
        d.value = "invalid input"
    }
}

function inverseSign() {
    d.value = -1 * d.value;
}

function exp_func() {
    d.value = Math.exp(d.value)
}

function abs_val() {
    d.value = Math.abs(d.value)
}
function div_by_one() {
    d.value = 1 / (d.value);
}

function square() {
    d.value = d.value * d.value;
}

function square_root() {
    d.value = Math.sqrt(d.value);
}

function x_pow_y() {
    d.value = d.value + "^";
}

function ten_pow_x() {
    d.value = Math.pow(10, d.value)
}

function logarithm(base) {
    if (base == "ten") {
        d.value = Math.log10(d.value)
    }
    else {
        d.value = Math.log(d.value)
    }

}

function euler_num() {
    d.value = Math.E
}

function pi_val() {
    d.value = Math.PI
}

let z = 1;
function radian() {
    if (z == 1) {
        document.getElementById('degree').innerHTML = "RAD";
        z = 0;
    }
    else {
        document.getElementById('degree').innerHTML = "DEG";
        z = 1;
    }
}

function trigo(t) {
    switch (t) {
        case "sin":
            if (z == 1) {
                d.value = (Math.sin((Math.PI / 180) * Number(d.value))).toFixed(5);
            }
            else {
                d.value = (Math.sin(d.value)).toFixed(5);
            }
            break;
        case "cos":
            if (z) {
                d.value = (Math.cos(Math.PI / 180 * d.value));
            }
            else {
                d.value = Math.cos(d.value);
            }
            break;
        case "tan":
            if (z) {
                d.value = (Math.tan(Math.PI / 180 * d.value));
            }
            else {
                d.value = Math.tan(d.value);
            }
            break;
        case "sec":
            if (z) {
                d.value = (1 / Math.cos(Math.PI / 180 * d.value));
            }
            else {
                d.value = 1 / Math.cos(d.value);
            }
            break;
        case "csc":
            if (z) {
                d.value = (1 / Math.sin(Math.PI / 180 * d.value));
            }
            else {
                d.value = 1 / Math.sin(d.value);
            }
            break;
        case "cot":
            if (z) {
                d.value = 1 / (Math.tan(Math.PI / 180 * d.value));
            }
            else {
                d.value = 1 / Math.tan(d.value);
            }
            break;
        case "asin":
            if (z) {
                d.value = (180 / Math.PI * Math.asin(d.value));
            }
            else {
                d.value = Math.asin(d.value);
            }
            break;
        case "acos":
            if (z) {
                d.value = (180 / Math.PI * Math.acos(d.value));
            }
            else {
                d.value = Math.acos(d.value);
            }
            break;
        case "atan":
            if (z) {
                d.value = (180 / Math.PI * Math.atan(d.value));
            }
            else {
                d.value = Math.atan(d.value);
            }
            break;
        case "asec":
            if (z) {
                d.value = (180 / Math.PI * (Math.acos(1 / d.value)));
            }
            else {
                d.value = 1 / Math.acos(d.value);
            }
            break;
        case "acsc":
            if (z) {
                d.value = (180 / Math.PI * (Math.asin(1 / d.value)));
            }
            else {
                d.value = 1 / Math.asin(d.value);
            }
            break;
        case "acot":
            if (z) {
                d.value = (180 / Math.PI * (Math.atan(1 / d.value)));
            }
            else {
                d.value = 1 / Math.atan(d.value);
            }
            break;
        case "sinh":
            d.value = (Math.sinh(d.value))
            break;
        case "cosh":
            d.value = (Math.cosh(d.value))
            break;
        case "tanh":
            d.value = (Math.tanh(d.value))
            break;
        case "sech":
            d.value = (1 / Math.cosh(d.value))
            break;
        case "csch":
            d.value = (1 / Math.sinh(d.value))
            break;
        case "coth":
            d.value = (1 / Math.tanh(d.value))
            break;
        case "asinh":
            d.value = (Math.asinh(d.value));
            break;
        case "acosh":
            d.value = (Math.acosh(d.value))
            break;
        case "atanh":
            d.value = (Math.atanh(d.value))
            break;
        case "asech":
            d.value = (1 / Math.acosh(d.value))
            break;
        case "acsch":
            d.value = (1 / Math.asinh(d.value))
            break;
        case "acoth":
            d.value = (1 / Math.atanh(d.value))
            break;


    }
}

function floor() {
    d.value = Math.floor(d.value);
}

function ceil() {
    d.value = Math.ceil(d.value);
}

function rand() {
    d.value = Math.random();
}

function dms() {
    let dms = Number(d.value);
    let deg = parseInt(dms);
    let sec = (dms.toFixed(4) - dms.toFixed(2)) * 10000;
    let min = (dms.toFixed(2) - deg) * 100;
    deg = deg + min / 60 + sec / 3600;
    d.value = deg.toFixed(2).toString();
}

function deg() {
    let deg = Number(d.value);
    let minutes = (deg - parseInt(deg)) * 60;
    let seconds = (minutes - parseInt(minutes)) * 60;
    d.value = parseFloat(`${parseInt(deg)}.${parseInt(minutes)}${parseInt(seconds)}`).toFixed(4).toString();
}

function cube() {
    d.value = Math.pow(d.value, 3);
}

function cube_root() {
    d.value = Math.pow(d.value, 1 / 3);
}

function x_pow_four() {
    d.value = Math.pow(d.value, 4);
}

function two_pow_x() {
    d.value = Math.pow(2, d.value);
}

function e_pow_x() {
    d.value = Math.exp(d.value);
}

let f = 1;
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

let k = 1;
function change_btn_color(agr) {
    if (k == 1) {
        document.getElementById("change_btn").style.backgroundColor = "rgb(0, 153, 255)"
        k = 0;
    }
    else {
        document.getElementById("change_btn").style.backgroundColor = "rgb(0, 0, 0)";
        k = 1;
    }
}

let memory = [];
function m_store() {
    enb_btn();
    memory.push(parseFloat(d.value));
    d.value = " ";
}

function enb_btn() {
    document.getElementById('mc').disabled = false;
    document.getElementById('mr').disabled = false;
}

function m_clear() {
    memory = [];
    d.value = " ";
    document.getElementById('mc').disabled = true;
    document.getElementById('mr').disabled = true;
}

function m_read() {
    d.value = memory[memory.length - 1].toString();
}

function m_plus() {
    if (memory.length == 0) {
        memory.push(parseFloat(d.value));
    }
    else {
        memory[memory.length - 1] += parseFloat(d.value);
    }

}

function m_minus() {
    if (memory.length == 0) {
        memory.push((-1) * parseFloat(d.value));
    }
    else {
        memory[memory.length - 1] -= parseFloat(d.value);
    }
}

let c = 1;
function change_color() {
    if (c == 1) {
        document.getElementById("degree").style.backgroundColor = "rgb(0, 153, 255)"
        c = 0;
    }
    else {
        document.getElementById("degree").style.backgroundColor = "rgb(0, 0, 0)";
        c = 1;
    }
}

let w = 1
function fe_func() {
    if (w) {
        d.value = Number(d.value).toString();
        w = 0;
    }
    else {
        d.value = Number(d.value).toExponential().toString();
        w = 1;
    }
}
