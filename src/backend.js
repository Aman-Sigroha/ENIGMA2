const prediction = async (numRiders, vehicleType, expectedDuration) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          numRiders,
          vehicleType,
          expectedDuration,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
  
      const predictedPrice = await response.json(); // Assuming JSON response
  
      return predictedPrice; // Return the predicted price
    } catch (error) {
      console.error('Error fetching prediction:', error);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };
  
  export default prediction;