window.onload = function() {

var current,display,output,limit,zero,dot,opers;

display = document.getElementById("result");

var elem = document.querySelectorAll(".num");
var len = elem.length;

for(var i = 0; i < len; i++ ) {
    elem[i].addEventListener("click",function() {
        num = this.value;
        output = screen.innerHTML +=num;
        limit = output.length;

        if(limit > 16 ) {
            alert("Display limit is 16");
        }
    });
}

document.querySelector(".zero").addEventListener("click",function() {

    zero = this.value;

    if(screen.innerHTML === "") {
        output = screen.innerHTML = zero;
    }
    else if(screen.innerHTML === output) {
        output = screen.innerHTML +=zero;
    }
});

document.querySelector(".dot").addEventListener("click",function() {

    dot = this.value;

    if(screen.innerHTML === "") {
        output = screen.innerHTML = screen.innerHTML.concat("0.");
    }
    else if(screen.innerHTML === output) {
        screen.innerHTML = screen.innerHTML.concat(".");
    }
});

document.querySelector("#eqlbtn").addEventListener("click",function() {

    if(screen.innerHTML === output) {
        screen.innerHTML = eval(output);
    }
    else {
        screen.innerHTML = "";
    }

});

document.querySelector("#AC").addEventListener("click",function() {

    screen.innerHTML = "";

});

var elem1 = document.querySelectorAll(".opers");
var len1 = elem1.length;

for(var i = 0; i < len1; i++ ) {
    elem1[i].addEventListener("click",function() {
        operator = this.value;
        if(screen.innerHTML === "") {
            screen.innerHTML = screen.innerHTML.concat("");
        }
        else if(output) {
            screen.innerHTML = output.concat(operator);
        }
    }
});
