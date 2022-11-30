function getnumber(n){
    var a = document.getElementById('result');
    a.value += n;
}

function result(){
    var a = document.getElementById('result');
    a.value = eval(a.value);
}

function cl(){
    var a = document.getElementById('result');
    a.value = "0";
}
function Del(){
    var a = document.getElementById('result');
    a.value =" ";
}