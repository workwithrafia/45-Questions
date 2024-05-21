var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of countries and print iys orignal order
var countriesTovisit = ["China", "Denmark", "Brazil", "America"];
console.log("Orignalorder:", countriesTovisit);
// print and Array in alphabetical order without modifying the actual array list
console.log("Alphabetical  Order:", __spreadArray([], countriesTovisit, true).sort());
// show that the array is still in its orignal order
console.log("Still in orignal order:", countriesTovisit);
// print the array in reverse order without modifying the actual array list
console.log("Reverse Order:", __spreadArray([], countriesTovisit, true).reverse());
// show that the array is still in its orignal order
console.log("Still in orignal order:", countriesTovisit);
// we have the changed the orignal array order now
console.log("Orignal Array Reversed:", countriesTovisit.reverse());
// print the array to show list its's back to its orignal order
console.log("Back to orignal Order:", countriesTovisit.reverse());
// Print the array to show that its order has been changed in alphabetical order now
console.log("Sorted in Alphabetical order:", countriesTovisit.sort());
// we Have changed again the orignal array order now in reverse order again
console.log("Orignal Array reversed again:", countriesTovisit.reverse());
