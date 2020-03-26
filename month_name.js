// 09.array_warm_up_2.js JavasScript code
// Initially, this program shows the given digit (0-9) as a Finnish word.
// Modify the program so that it asks the user to enter a month number (1-12).
// When the user clicks the button the program should show the month name in English. 

/*function showFinnishWord() {
    var wordArray = ["nolla", "yksi", "kaksi", "kolme", "neljä", "viisi", 
                     "kuusi", "seitsemän", "kahdeksan", "yhdeksän"];
    
    var digitText = document.getElementById("txtDigit").value;
    var digit = Number(digitText);
    
    if (digit >= 0 && digit <= 9) {
        outputText = wordArray[digit];
    } else {
        outputText = "Please enter a valid digit (0-9)!"
    }
        
    document.getElementById("pOutput").innerHTML = outputText;
}*/

function showEnglishMonth(){
var monthArray = ["","January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
var number = document.getElementById("txtMonth").value;
var num = Number(number);

if (num >=0 && num<=12){
    output = monthArray[num];
} else {
    output = "Please enter a valid digit (1-12)!"
}
document.getElementById("pOutput").innerHTML = output;

}
// End