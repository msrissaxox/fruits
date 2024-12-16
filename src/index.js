//Look at this and try to get it to render the nane of the fruit in the console. 

// Wait for the entire DOM to be fully loaded before running the script

document.addEventListener('DOMContentLoaded', () => {
        // Make a fetch request to your backend API endpoint for fruits

    fetch('http://localhost:3001/api/fruits')
            // First .then(): Convert the response to JSON

    .then(response => response.json())
            // Second .then(): Work with the parsed JSON data

    .then(fruits => {
                    // Find an HTML element with the ID 'nameOfFruit'

        const fruitName = document.getElementById('nameOfFruit');
   })
           // Catch any errors that might occur during the fetch or processing

    .catch(error => {
                    // Log any errors to the console for debugging

        console.error('Error fetching fruits:', error);
    });
});