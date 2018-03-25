/**
 * @author Gilson Varghese
 * @date 25 March 2018
 * @fileoverview Test module to demo exporting. Main.
 */

var rect = require("./simplerect");

/**
 * Main function to utilize rectangle functionality
 */
function solveRect(l, b) {
	console.log("--In solveRect " + l + "and" + b);
	console.log("Area of rectangle = " +  rect.area(l,b));
	console.log("Perimeter of rectangle = " + rect.perimeter(l, b));
};

solveRect(2,4);
solveRect(3,5);
