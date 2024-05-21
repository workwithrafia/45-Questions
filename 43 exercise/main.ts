// define the functions to show magicians names 

function show_magicians(magicians : string[]){
    magicians.forEach(name => console.log (name));
}

function make_great(magicians : string []){
   return  magicians.map(name => ` The Great ${name}`);
}

// define an array of magicians names

let magicians_names = ["Harry porter","Rafia","varda"];

// making a copy of orignal array through . slice() function

let copy_magician_names = magicians_names.slice ()

// modify the the copied to array include " the great " with theri names

 let copy_great_magicians = make_great(copy_magician_names);

//  show both arrays orignals and copied

// original
show_magicians(magicians_names);
console.log("original Array\n");

// copied
show_magicians(copy_great_magicians);
console.log("copied array\n");