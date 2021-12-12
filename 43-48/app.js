// Question 01
// function linkAlert() {
//     alert("You have clicked on a link")
// }


// Question 02
// function phoneAlert() {
//     alert("Thanks for purchasing a phone from us")
// }


// Question 03

var get = document.getElementById("myTable")
function deleteRow(e) {
    var del = document.getElementsByClassName("del")
    del.parentNode.remove();
}
////not working////////////


// Question 04
function toggler(id, element) {
    if (id === 1) {
        element.src = "./images/img2.jpg"
    }
    else {
        element.src = "./images/img1.jpg"
    }
}


// Question 05
function countInc() {
    var input = document.getElementById("input")
    input.value = eval(+input.value + 1)
}
function countDec() {
    var input = document.getElementById("input")
    input.value = eval(+input.value - 1)
}