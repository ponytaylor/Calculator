function doTheWork(arrOps) {
    console.log(arrOps);
    var retVal = 0;
    var op = '';
    for (var e = 0; e < arrOps.length; e++){
        var elem = arrOps[e];
        if (isNaN(elem)){
            op = elem;
        }
        else {
            if (e == 0){
                retVal = Number(elem); 
            }
            if (op != ''){
                switch(op){
                    case '+':
                        retVal = retVal + Number(elem);
                        break; 
                    case '-':
                        retVal = retVal - Number(elem);
                        break; 
                    case '/':
                        retVal = retVal / Number(elem);
                        break; 
                    case '*':
                        retVal = retVal * Number(elem);
                        break;
                    default:
                        // not created by button
                        break;      
                }
                op = '';
            }

        }
        console.log (elem + " | " + op + " | " + retVal);
    }

    return retVal;
}

function setUpListeners() {
    let calcDisplay = document.getElementById("calcDisplay");
    let stepsDisplay = document.getElementById("stepsDisplay");
    let calculateSteps = [];
    var btns = document.getElementsByTagName("button");
    calcDisplay.value = "0";
    console.log(btns);
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            if (this.classList.contains('clearbutton')){
                calcDisplay.value = "0";
                calcDisplay.classList.add('reset');
                stepsDisplay.innerHTML = "";
            }
            else if (this.id == 'equals'){
                calculateSteps.push(calcDisplay.value);
                stepsDisplay.innerHTML ="";
                calcDisplay.value = doTheWork(calculateSteps);
                calcDisplay.classList.add('reset');
            }
            else if (this.classList.contains('opsItem')){
                // add operation
                calculateSteps.push(calcDisplay.value);
                calculateSteps.push(this.value);
                console.log(calculateSteps);
                calcDisplay.classList.add('reset');
                stepsDisplay.innerHTML += " " + this.value + " ";
            }
            else{
                console.log(this.value + " " + calcDisplay.value)
                if (calcDisplay.classList.contains('reset')){
                    calcDisplay.value = this.value;
                    calcDisplay.classList.remove('reset');
                }
                else {
                    calcDisplay.value = calcDisplay.value + this.value;
                }
                stepsDisplay.innerHTML += this.value;
            }
            //alert(this.value); 
        });
    }
}



window.onload = function(e){ 
   setUpListeners();
}


