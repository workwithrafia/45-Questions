// define the functions to show magicians names 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return " The Great ".concat(name); });
}
// define an array of magicians names
var magicians_names = ["Harry porter", "Rafia", "varda"];
var great_magicians = make_great(magicians_names);
console.log(great_magicians);
