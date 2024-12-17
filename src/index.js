// Select the button and input elements
const fruitButton = document.querySelector('button[type="button"]');
const fruitInput = document.getElementById("nameOfFruit");

//Adding Fruit info to page:
const family = document.getElementById("family");
const order = document.getElementById("order");
const genus = document.getElementById("genus");

const calories = document.getElementById("calories");
const fats = document.getElementById("fats");
const sugars = document.getElementById("sugars");
const carbs = document.getElementById("carbs");
const protein = document.getElementById("protein");

// Add event listener to the button
fruitButton.addEventListener("click", function () {
  // Capture the input value
  const inputValue = fruitInput.value;
  // Do something with the input value
  // Do something with the input value (API call)
  fetch(`http://localhost:3001/api/fruit/${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Optional: do something with the data
      family.textContent = data.family;
      order.textContent = data.order;
      genus.textContent = data.genus;
      
      // Update nutritional information
      calories.textContent = ` ${data.calories}`;
      fats.textContent = ` ${data.fats} + ' g'`;
      sugars.textContent = ` ${data.sugars} + ' g'`;
      carbs.textContent = `data.carbs + ' g'`;
      protein.textContent = `data.proteins + ' g'`;
    })
    .catch((error) => console.error("Error:", error));

  // Clear the input field
  fruitInput.value = "";
});

// Add event listener for Enter key press on the input field
fruitInput.addEventListener("keypress", function (event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.key === "Enter") {
    // Prevent default form submission if it's in a form
    event.preventDefault();
    // Capture the input value
    const inputValue = fruitInput.value;
    // Do something with the input value
    console.log(inputValue);
    //   fruitInput.value = '';

    // Do API call
    fetch(`http://localhost:3001/api/fruit/${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Optional: do something with the data
        family.textContent = data.family;
        order.textContent = data.order;
        genus.textContent = data.genus;
        //this below does not work
        // Update nutritional information
        calories.textContent = data.calories + ' cal';
        fats.textContent = data.fats + ' g';
        sugars.textContent = data.sugars + ' g';
        carbs.textContent = data.carbs + ' g';
        protein.textContent = data.protein + ' g';
 
      })
      .catch((error) => console.error("Error:", error));

    // Clear the input field
    fruitInput.value = "";
  }
});
