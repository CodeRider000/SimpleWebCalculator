function clicked_num(v){
    var x = document.getElementById("xarea").value;
    var y = document.getElementById("yarea").value;
    if(x !== "" && y !== ""){
        document.getElementById("xarea").innerHTML = v;
    }
    else if(x === ""){
        document.getElementById("xarea").innerHTML = v;
    }else{
        document.getElementById("yarea").innerHTML = v;
    }
}
function clicked_plus(){
    document.getElementById("oarea").innerHTML = "+";
}
function clicked_minus(){
    document.getElementById("oarea").innerHTML = "-";
}
function clicked_multi(){
    document.getElementById("oarea").innerHTML = "*";
}
function clicked_div(){
    document.getElementById("oarea").innerHTML = "/";
}
function clicked_clear(){
    document.getElementById("xarea").innerHTML = "";
    document.getElementById("yarea").innerHTML = "";
    document.getElementById("oarea").innerHTML = "";
    document.getElementById("rarea").innerHTML = "";
}
function clicked_res(){
    var x = Number(document.getElementById("xarea").value);
    var y = Number(document.getElementById("yarea").value);
    var op = document.getElementById("oarea").value;
    if(op === "+"){
        document.getElementById("rarea").innerHTML = x+y;
    }
    else if(op === "-"){
        document.getElementById("rarea").innerHTML = x-y;
    }
    else if(op === "*"){
        document.getElementById("rarea").innerHTML = x*y;
    }
    else if(op === "/"){
        document.getElementById("rarea").innerHTML = x/y;
    }
}