function pushButton(btnVal) {
    if (btnVal == "C") {
        document.getElementById("display").value = '';
    }
    else {
        document.getElementById("display").value += btnVal;
    }
}

function calculate(doMath) {
     var myAnswer = eval(doMath);
     document.getElementById("display").value = myAnswer;
}
