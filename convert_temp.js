"use strict";
const $ = selector => document.querySelector(selector);
console.log("SPLUNGE");
/*********************
*  Helper functions  *
**********************/
//Temperature conversion calculations and toggle display 
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
 $("#degree_label_1").textContent = label1Text;
   $("#degree_label_2").textContent = label2Text;
   $("#degrees_computed").value = "";
}

/****************************
*  Event handler functions  *
*****************************/
//Validation and decision structure for changing tempeature
const convertTemp = () => {   
   const degreesEntered = parseFloat($("#degrees_entered").value.trim());
   if (isNaN(degreesEntered)) {
      $("#message").textContent = "You must enter a valid number for degrees.";
      $("#degrees_computed").value = "";
      return;
   } else {
      $("#message").textContent = "";
   }

   let degreesComputed;
   if ($("#to_celsius").checked) {
      degreesComputed = calculateCelsius(degreesEntered);
   } else {
      degreesComputed = calculateFahrenheit(degreesEntered);
   }

   $("#degrees_computed").value = degreesComputed.toFixed(0);
};

//Applying the toggle dispaly
const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

//Activating the event handlers
document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	$("#degrees_entered").focus();
});