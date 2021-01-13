const { fchown } = require("fs");
var remote = window.require('electron').remote;
const fs = window.require('fs');
var lineReader = window.require('line-reader');
//const http = window.require('http');
const path = window.require('path');





window.addEventListener("load", () => {

    fs.readFileSync('./src/files/history.txt', 'utf-8').split(/\n/).forEach(function (row) {
        row = row.split("--");
        var numberList = new Array();
        for(var i=0; i< row.length; i++){
            numberList.push(row[i]);
            if (i != row.length - 1) {
                numberList.push("");
              }
        }

        console.log(numberList[0] + " " + numberList[2]);

        var dis = document.getElementById("tbNumber")
        var table = document.createElement("div");
        var number = document.createElement("p");
        var date = document.createElement("p");


        table.clasName = 'tbNumber';
        number.className = 'numberCall';
        date.className = 'dateCall';

        number.innerHTML = numberList[0];
        date.innerHTML = numberList[2];


        table.appendChild(number);
        table.appendChild(date);
        dis.appendChild(table);
    });
});

$( document ).ready(function() {
    $("p").each(function () {
        if ($(this).text() === "undefined") {
          $(this).hide();
        }
    });
});