// Select the button and input elements
const fruitButton = document.querySelector('button[type="button"]');
const fruitInput = document.getElementById('nameOfFruit');

//Adding Fruit info to page:
const family = document.getElementById('family');
const order = document.get
// Add event listener to the button
fruitButton.addEventListener('click', function() {
  // Capture the input value
  const inputValue = fruitInput.value;
  // Do something with the input value
 // Do something with the input value (API call)
 fetch(`http://localhost:3001/api/fruit/${inputValue}`)
 .then(response => response.json())
 .then(data => {
   console.log(data);
   // Optional: do something with the data
 })
 .catch(error => console.error('Error:', error));

// Clear the input field
fruitInput.value = '';
});


// Add event listener for Enter key press on the input field
fruitInput.addEventListener('keypress', function(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
      // Prevent default form submission if it's in a form
      event.preventDefault();
      // Capture the input value
      const inputValue = fruitInput.value;
      // Do something with the input value
      console.log(inputValue);
    //   fruitInput.value = ''; 
      
    // Do API call
    fetch(`http://localhost:3001/api/fruit/${inputValue}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Optional: do something with the data
      })
      .catch(error => console.error('Error:', error));
    
    // Clear the input field
    fruitInput.value = '';
  }
});

