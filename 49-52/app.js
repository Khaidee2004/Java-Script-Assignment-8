// Chapter 49 - 52

// Question 01
var name_ = document.getElementById("inp1");
var email = document.getElementById("inp2");
var password = document.getElementById("inp3");
var contact = document.getElementById("inp4");
var para1 = document.getElementById("p1");
var para2 = document.getElementById("p2");
var para3 = document.getElementById("p3");
var para4 = document.getElementById("p4");

function submit() {
    if (name_.value !== "" && email.value !== "" && password.value !== "" && contact.value !== "") {
        para1.innerHTML += name_.value
        para2.innerHTML += email.value
        para3.innerHTML += password.value
        para4.innerHTML += contact.value
    }
    else {
        alert("Please fill up all the given fields")
    }
}


// Question 02
var expandPara = "Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a whirlwind. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that must still be done. There is a coolness, a calmness, whenthe sun does set. <a href=''>Hide Text</a>"
var para = document.getElementById("para")

function readMore() {
    para.innerHTML = expandPara
}


// Question 03
var table = document.getElementById("myTable")
var input = document.getElementsByTagName("input")

function deleteRow(element) {
    var i = element.parentNode.parentNode.rowIndex;
    table.deleteRow(i);
}