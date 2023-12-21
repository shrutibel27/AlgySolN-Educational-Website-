// Add these lines inside your existing JavaScript code

// Function to update the time and steps values
function updateStats(time, steps) {
    $("#timeValue").text(time + " ms");
    $("#stepsValue").text(steps);
  }
  
  // Example usage:
  // Call this function with the actual time and steps values after the pathfinding algorithm is complete.
  // For example, you can call updateStats(50, 25) to update the time to 50 ms and steps to 25.
  
  // Update the function where you run your pathfinding algorithm to call updateStats with the actual time and steps
  function runPathfindingAlgorithm() {
    // Your existing pathfinding algorithm code
  
    // Example: After the algorithm completes, update the stats
    var actualTime = 50; // Replace with the actual time taken by your algorithm
    var actualSteps = 25; // Replace with the actual number of steps taken by your algorithm
    updateStats(actualTime, actualSteps);
  }
  