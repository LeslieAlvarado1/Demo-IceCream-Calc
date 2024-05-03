"use strict";
document
  .getElementById("iceCreamForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve the number of scoops and selected toppings from the form
    const scoops = parseInt(document.getElementById("scoops").value);
    const toppings = document.querySelectorAll(
      'input[name="toppings"]:checked'
    );

    // Calculate the base price, tax, and additional toppings price
    let basePrice = 2.25 + (scoops - 1) * 1.25; // Base price for 1 scoop is $2.25, each additional scoop costs $1.25
    let tax = basePrice * 0.1; // Assuming 10% tax
    let additionalToppingsPrice = 0;

    // Loop through each selected topping and display the price in an alert
    toppings.forEach(function (topping) {
      let toppingPrice = 0;
      switch (topping.value) {
        case "sprinkles":
          toppingPrice = 0.5;
          alert(`You selected Sprinkles: $${toppingPrice.toFixed(2)}`);
          break;
        case "hotFudge":
          toppingPrice = 1.25;
          alert(`You selected Hot Fudge: $${toppingPrice.toFixed(2)}`);
          break;
        case "whippedCream":
        case "cherry":
          toppingPrice = 0.25;
          alert(
            `You selected Whipped Cream or Cherry: $${toppingPrice.toFixed(2)}`
          );
          break;
        case "caramel":
          toppingPrice = 1.0;
          alert(`You selected Caramel Syrup: $${toppingPrice.toFixed(2)}`);
          break;
        default:
          // Handle other cases if needed
          break;
      }
      // Add the topping price to the total additional toppings price
      additionalToppingsPrice += toppingPrice;
    });

    // Calculate the total due including base price, tax, and additional toppings price
    let totalDue = basePrice + tax + additionalToppingsPrice;

    // Display the calculated results on the page
    document.getElementById(
      "result"
    ).innerHTML = `<p><strong>Base Price:</strong> $${basePrice.toFixed(2)}</p>
    <p><strong>Tax:</strong> $${tax.toFixed(2)}</p>
    <p><strong>Additional Toppings Price:</strong> $${additionalToppingsPrice.toFixed(
      2
    )}</p>
    <p><strong>Total Due:</strong> $${totalDue.toFixed(2)}</p>`;
  });


  function selectedPizza() {
    // Get the value of the selected pizza option
    let selectedOption = document.querySelector("input[name='pizza']:checked").value;
    let price; // Variable to store the price of the selected pizza

    // Use a switch statement to determine the selected pizza option and its price
    switch(selectedOption) {
        case "5.25":
            price = 5.25;
            alert("Hawaiian selected. Price: $5.25");
            break;
        case "6.00":
            price = 6.00;
            alert("Pepperoni selected. Price: $6.00");
            break;
        case "10.00":
            price = 10.00;
            alert("Steak selected. Price: $10.00");
            break;
        default:
            // Alert if an invalid selection is made
            alert("Invalid selection");
    }

    // You can use the 'price' variable wherever you need in your code.
}
