function elem(val){
        display.value+=val;
}

function equal()
{
    display.value = eval( display.value)
}

function clear_val(){
    display.value = " ";
}

function back() {
    var val = display.value;
    console.log("back function")
    display.value = val.substr(0, val.length - 1);
}
