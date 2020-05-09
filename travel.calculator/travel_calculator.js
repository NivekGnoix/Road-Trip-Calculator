// travel_cost_calculator.js
/*jslint devel: true, browser: true */
/*global $*/
  function calculate() {
    //---- FORM VALUES ----
    //variables: miles_driving, average_miles_per_gallon, cost_per_gallon, hotel_cost, snacks, other_costs
    //Estimate Distance
    var miles_driving = Number($("#miles_driving").val()); //YOUR CODE HERE TO GET THE VALUE
    console.log("miles_driving " + miles_driving);
    //MPG
    var average_miles_per_gallon = Number($("#average_miles_per_gallon").val()); //YOUR CODE HERE TO GET THE VALUE
    console.log("average_miles_per_gallon " + average_miles_per_gallon);
    //PPG
    var cost_per_gallon = Number($("#cost_per_gallon").val()); //YOUR CODE HERE TO GET THE VALUE
    console.log("cost_per_gallon " + cost_per_gallon);
    //Hotel
    var hotel_cost = Number($("#hotel_cost").val());
    console.log("hotel_cost " + hotel_cost);
    //Snacks
    var snacks_cost = Number($("#snacks_cost").val());
    console.log("snacks_cost " + snacks_cost);
    //other_costs
    var other_costs = Number($("#other_costs").val());
    console.log("other_costs" + other_costs);

    //----- CALCULATED VALUES -----
    //calculate: distance / mpg
    var number_of_gallons = miles_driving / average_miles_per_gallon; //YOUR CODE HERE TO GET THE VALUE
    console.log("number_of_gallons" + number_of_gallons);
    //calculate: total_mileage_cost = estimate distance * ppg
    var total_mileage_cost = number_of_gallons * cost_per_gallon; //YOUR CODE HERE TO GET THE VALUE
    console.log("total_mileage_cost " + total_mileage_cost);


    var sum = total_mileage_cost + hotel_cost + snacks_cost + other_costs;

    alert("$" + sum);
  }








/*
  function updateResults() {
    showResult(getCarCosts(), getFlightCosts()); //finally, show the result!
    var what = 0;
    alert();
  }

  $("#results").click(function () {
      $("#results").slideUp("slow").fadeOut("slow");
      $("#travel_calculator").fadeTo("slow", 1);
  });
  var ESCAPE_KEY = 27;
  $(document).keyup(function (evt) {
      if (evt.which === ESCAPE_KEY) {
          $("#results").slideUp("slow").fadeOut("slow");
          $("#travel_calculator").fadeTo("slow", 1);
      }
  });
  });
  $("#update_button").focus();
  $("#update_button").click(function () {
      updateResults();
  });
});
*/
