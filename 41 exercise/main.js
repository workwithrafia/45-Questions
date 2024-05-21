// define a function tp print eeach magician from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// define an array containing magicians names
var magician_names = ["Harry poters", "Rafia", "Aisha"];
// call the function to print magicians names
show_magicians(magician_names);
