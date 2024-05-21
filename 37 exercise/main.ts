function make_shirt (size : string ="large", printMessage:string = "i love typescript"){
    console.log(`creating a${size}shirt with the ${printMessage}print on shirt`)
}
// calling a function
make_shirt();
// calling a function now with medium size and default mesage
make_shirt("Medium");
// caliing a function now small size and also diffrent print message
make_shirt("small","I love javascript");