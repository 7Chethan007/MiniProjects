function getHistory(){
    return document.getElementById('history-value').innerText;
}
//alert(getHistory());

function printHistory(num) {
    document.getElementById('history-value').innerText = num;
}
// printHistory('8+9+0-1');

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    if(num == ""){
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById('output-value').innerText = getFormatedNumber(num);
    }
}
// printOutput(909009876);

// This function is to get comma seperated value
function getFormatedNumber(num) {
    if(num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
// printOutput("");

function reverseNumberFormate(num) {
    // The character we want to replace must be given in 
    // between / and /g and to what it has to be replace followed by a commma 
    // here , to "" so /,/g,""
    return Number(num.replace(/,/g,''));
}
// alert(reverseNumberFormate(getOutput()));

var operator = document.getElementsByClassName("operator");
for(var i = 0; i < operator.length; i++) {
    // For now only checking if the operator is click by using alert
    operator[i].addEventListener('click',function()
    {
        //alert("This operator clicked: "+this.id);   logic -->
        if(this.id == "clear") {
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
			var output=reverseNumberFormate(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
        else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormate(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
        }
        

    });
}

//For numbers
var number = document.getElementsByClassName("number");
for(var i = 0; i < number.length; i++) {
    // For now only checking if the operator is click by using alert
    number[i].addEventListener('click',function(){
        //alert("This number clicked: "+this.id);   logic -->
        var output = reverseNumberFormate(getOutput());
        if(!isNaN(output)){ //if output is a number
            output = output + this.id;
            printOutput(output);
        }
    });
}