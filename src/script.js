var remote = window.require('electron').remote;
const fs = window.require('fs');
const path = window.require('path');
var dateFormat = window.require("dateformat");

var now = Date.now();

dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

// add history page:
var number = document.getElementById('number');

let pathName = path.join(__dirname, 'files');

btnCall.addEventListener('click', function () {
  let file = path.join(pathName, 'history.txt');
  let num = number.value;
  let arr = [num +" "+ dateFormat(now) + "\n"];
  fs.appendFileSync(file, arr, function(err) {
    if(err){
      return console.log(err);
    } else {
      console.log("the number is added successfuly");
    }
  });
});

// alert name that are calling:
function callNum () {

    var number = document.getElementById('number').value;
    alert("You are Calling . . ." +" "+ number);

}