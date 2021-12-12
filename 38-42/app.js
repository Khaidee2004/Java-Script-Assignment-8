// Question 01
var a = +prompt("Enter the Base Value")
var b = +prompt("Enter the Exponent Value")
function power(a, b) {
    var result = Math.pow(a, b)
    return result
}
var result = power(a, b)
document.write("The value of " + a + " raised to " + b + " is " + result)


// Question 02
var year = +prompt("Enter Year to check it's a leap year or not")
function checkLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        alert(year + " is a leap year!")
    }
    else {
        alert(year + " is not a leap year!")
    }
}
checkLeapYear(year)


// Question 03
var a = parseInt(prompt("Length of side 1 of a triangle"));
var b = parseInt(prompt("Length of side 2 of a triangle"));
var c = parseInt(prompt("Length of side 3 of a triangle"));

function calcArea(a, b, c) {
    function calcSemiPerimeter(a, b, c) {
        var semiPerimeter = (a + b + c) / 2
        return semiPerimeter
    }
    var semiPerimeter = calcSemiPerimeter(a, b, c)
    var area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c))
    return area
}

var area = calcArea(a, b, c)
document.write("Area is : " + area)


// Question 04
function mainFunction(sub1, sub2, sub3) {

    var sub1 = parseInt(prompt("Enter Subject 1 marks"))
    var sub2 = parseInt(prompt("Enter Subject 2 marks"))
    var sub3 = parseInt(prompt("Enter Subject 3 marks"))

    function average(sub1, sub2, sub3) {
        var average = (sub1 + sub2 + sub3) / 3
        return average
    }

    var average = average(sub1, sub2, sub3)
    document.write("The Average is : " + average + "<br>")

    function percentage(sub1, sub2, sub3) {
        var obtMarks = sub1 + sub2 + sub3
        var totalMarks = 300
        var percentage = (obtMarks / totalMarks) * 100
        return percentage
    }
    var percentage = percentage(sub1, sub2, sub3)
    document.write("The Percentage is : " + percentage)
}

mainFunction()


// Question 05
var string = prompt("Enter any string")
var charac = prompt("Enter the character that you want to get index of")

function indexof(string, charac) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] == charac) {
            return i
        }
    }
}
var indexNum = indexof(string, charac)
document.write("First appearence of '" + charac + "' in the string '" + string + "' : " + indexNum)


// Question 06
var string = prompt("Enter String : (length should not be more than 25)")
var vowels = ["a", "e", "i", "o", "u"]

function vowelDelete(string) {
    for (var i = 0; i < vowels.length; i++) {
        var arr = string.split(vowels[i])
        string = arr.join("")
    }
    return string
}
var unVoweled = vowelDelete(string)
document.write("Your Entered String without any Vowels : " + unVoweled)


// Question 07
var str = prompt("Enter any string");
var count = findOccurances(str);

function findOccurances(str) {
    var words = str.split(" ");
    var count = 0;

    for (var i = 0; i < words.length; i++) {
        for (var k = 0; j < words[i].length; k++) {
            var charac = words[i].slice(k, k + 1).toLowerCase();
            var nextCharac = words[i].slice(k + 1, k + 2).toLowerCase();
            switch (charac) {
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                    switch (nextCharac) {
                        case "a":
                        case "e":
                        case "i":
                        case "o":
                        case "u":
                            count++;
                    }
            }
        }

    }
    return count;
}
document.write("The Entered String : '" + str + "'<br>")
document.write("The no. of occurences of any two vowels in succession : " + count);


// Question 08
var dist = parseInt(prompt("Enter distance b/w two cities in km."))

function calcMeter() {
    var meter = dist * 1000
    document.write("KM to Meters : " + meter)
}

function calcFeet() {
    var feet = dist * 3280.84
    document.write("<br> KM to Feets : " + feet)
}

function calcInch() {
    var inch = dist * 39370.1
    document.write("<br> KM to Inch : " + inch)
}

function calcCenti() {
    var centimeter = dist * 100000
    document.write("<br> KM to Centimeters" + centimeter)
}

calcMeter()
calcFeet()
calcInch()
calcCenti()


// Question 09
var hours = +prompt("Hours worked by an employee: ")
var payPerHour = 12

function overtimePay() {
    if (hours > 40) {
        var overtimeWork = hours - 40
        var overtimePay = overtimeWork * payPerHour
        return overtimePay
    }
    else {
        return "There's no overtime pay"
    }
}
var result = overtimePay()
document.write("Employee has worked " + hours + " hours.")
document.write("<br> So, " + result)


// Question 10
var amount = parseInt(prompt("Enter amount to withdraw!!"))
var hundred = 100
var fifty = 50
var ten = 10
var hundredCounter = 0
var fiftyCounter = 0
var tenCounter = 0

function withdrawer() {
    while (amount >= hundred) {
        amount -= hundred
        hundredCounter++
    }
    while (amount >= fifty) {
        amount -= fifty
        fiftyCounter++
    }
    while (amount >= ten) {
        amount -= ten
        tenCounter++
    }
    document.write("You will have " + hundredCounter + " hundred notes " + fiftyCounter + " fifty notes " + tenCounter + " ten notes.")
}
withdrawer()