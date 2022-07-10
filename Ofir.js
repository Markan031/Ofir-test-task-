let rightsReserved = document.getElementsByClassName("rightsReserved");

let d = new Date();

let year = d.getFullYear();
let month = d.getMonth() + 1;
let day = d.getDate();

let result = day + "." + month + "." + year + ".";
let resultNode = document.createTextNode(result);
rightsReserved[0].appendChild(resultNode);
