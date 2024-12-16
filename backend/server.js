import express from "express";
import path from "path";

const app = express();
//backend end point
const port = 3001;

// const foodInput
// const protein = document.getElementById('protein');

// Serve static files from the src directory
app.use(express.static("src"));

// Route to serve the main HTML page
app.get("/", (req, res) => {
  res.sendFile(path.resolve("src/index.html"));
});

// API route to fetch fruits async function
app.get("/api/fruits", async (req, res) => {
  // This creates a route for GET requests to '/api/fruits'
  // 'async' allows use of await inside the function
  // (req, res) are the request and re sponse objects
  try {
    // Start of error handling block 
    // Anything that might throw an error goes inside the try block
    const response = await fetch("https://fruityvice.com/api/fruit/all");
    // Makes an HTTP GET request to the external API
    // 'await' pauses execution until the fetch is complete
    // Stores the response from the external API
    const data = await response.json();
    // Converts the response to JSON format
    // 'await' pauses until the JSON conversion is complete
    console.log("Fruits data:", data);

    res.json(data);
    // Sends the retrieved data back to the client
    // Automatically sets Content-Type to application/json
    // Add this line to log data to the server console
  } catch (error) {
    // Catches any errors that occur during the fetch or JSON conversion

    console.error("Error fetching fruits:", error);
    // Logs the error to the server console for debugging

    res.status(500).json({ error: "Failed to fetch fruits" });
    // Sends a 500 (Internal Server Error) status code
    // Sends a generic error message to the client
    // Prevents the entire server from crashing if the API call fails
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`); 
});
