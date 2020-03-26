let name = "Oluwafunto Daramola";
let courses = ["HTML", "CSS", "JS", "Design"];

console.log("My name is " + name);
console.log("My courses are " + courses);

let x = courses.length; //saves length of array into a variable

let i = 1;
if (x%2 === 0) {
    i = 2;
}

for (; i <= 200; i = i+2) {
    console.log(i);
}