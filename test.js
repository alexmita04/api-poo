// A simple JavaScript file to make an API call to the specified endpoint

// Define the endpoint URL
const url = "https://api-poo.vercel.app/proiectpoo/fotbal/Vinicius%20Junior";

// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch(url);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response:", data);

    // Return the data
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch and log data
fetchData();
