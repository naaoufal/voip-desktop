var remote = window.require('electron').remote;
const fs = window.require('fs');
const path = window.require('path');


// btn and input to get data from html
nameNumber = document.getElementById("nameNumber");
btnAdd = document.getElementById('addNumber');
number = document.getElementById('phoneNumber');


let pathName = path.join(__dirname, 'files');

btnAdd.addEventListener('click', function () {
  let file = path.join(pathName, 'test.txt');
  let name = nameNumber.value;
  let num = number.value;
  let arr = [name +" "+ num + "\n"];
  fs.appendFileSync(file, arr, function(err) {
    if(err){
      return console.log(err);
    } else {
      console.log("the number is added successfuly");
    }
  });
});

