var inputNum = "";

function doMath(v1) {
    if (inputNum == "C") {
        document.getElementById("display").value = '';
    }
    else {
        inputNum += v1;
        document.getElementById("display").value = inputNum;
        return inputNum;
    }
}
