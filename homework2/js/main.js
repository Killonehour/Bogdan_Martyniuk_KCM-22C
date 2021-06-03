let num = prompt("Enter to number", "");
alert("Number to enter " + num);

let number = prompt("Enter to number", "");

if (number % 5 == 0) {
    for (let i = 0; i <= number; i++) {
        if (i % 5 == 0) {
            console.log(i);
        }
    }
}
else
    console.log("Sorry, no numbers");
