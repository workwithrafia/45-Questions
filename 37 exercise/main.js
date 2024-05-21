function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "i love typescript"; }
    console.log("creating a".concat(size, "shirt with the ").concat(printMessage, "print on shirt"));
}
// calling a function
make_shirt();
// calling a function now with medium size and default mesage
make_shirt("Medium");
// caliing a function now small size and also diffrent print message
make_shirt("small", "I love javascript");
