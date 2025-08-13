let city = prompt("Enter your City Name?")

if (city === "karachi" || city === "Karachi") {
    alert("Welcome to city of light!")
} else {
    alert("other city")
}


let gender = prompt("whats your gender?")

if (gender === "Male" || gender === "male") {
    alert("Good Morning Sir")
}
else if (gender === "Female" || gender === "female") {
    alert("Hello Ma'am")
}
else {
    alert(`ap Transgender ho`)
}


    var signal = prompt("what is the color of road traffic signal")

document.writeln("<br><table border='1' cellpadding='5'>");

document.writeln("<tr><th>Signal color</th><th>Message</th></tr>");

document.writeln("<tr><td>RED</td><td>Must Stop</td></tr>")

document.writeln("<tr><td>Yellow</td><td>Ready to move</td></tr>")

document.writeln("<tr><td>Green</td><td>Goooo</td></tr>")


let fuel = prompt("Remaining fuel in your car??")

if (fuel <= 0.25) {
    alert("please refill fuel")
}


// a
var a = 4
if (++a === 5) {
    alert("Given condition is true")
}

// b
var b = 82
if (b++ == 83) {
    alert("given condition for variable b is true")
}

//c
var c = 12
if (c++ == 13) {
    alert("Given condition 1 is true")
}

if (c == 13) {
    alert("condition 2 is true")
}

if (++c < 14) {
    alert("condition 3 is true")
}

if (c == 14) {
    alert("condition 4 is true")
}


// Example 
let materialCost = 20000;
let laborCost = 2000;

let totalCost = materialCost + laborCost;

if (totalCost === materialCost + laborCost) {
    alert("The Cost Equals")
}

// e
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat")
}

var subject1 = +prompt("Enter marks for Subject 1:");
var subject2 = +prompt("Enter marks for Subject 2:");
var subject3 = +prompt("Enter marks for Subject 3:");
var totalMarks = 300

var obtained = subject1 + subject2 + subject3
var percentage = (obtained / totalMarks) * 100
var grade, remarks

if (percentage >= 80) {
    grade = "A-one"
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A"
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B"
    remarks = "You need to improve"
} else {
    grade = "Fail"
    remarks = "Sorry"
}
alert(
    `Total Marks: ${totalMarks}\nMarks Obtained: ${obtained}\nPercentage: ${percentage.toFixed(2)}%\nGrade: ${grade}\nRemarks: ${remarks}`
)


let subject1 = +prompt("Enter your subject marks 1:");
let subject2 = +prompt("Enter your subject marks 2:");
let subject3 = +prompt("Enter your subject marks 3:");
const totalMarks = 300;

let obtained = subject1 + subject2 + subject3;
let percentage = (obtained / totalMarks) * 100;
let grade, remarks


