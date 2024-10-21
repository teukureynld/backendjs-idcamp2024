function generateArray(n) {
    if (n < 0) {
      return [];
    }
  
    return [...generateArray(n - 1), n];
  }
  
  console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]

  function generateRandomHandSign(handSigns = ["✌️", "🫰", "🤞", "🖖", "🤘", "🤙", "👈"]) {
    const randomIndex = Math.floor(Math.random() * handSigns.length);
    const selectedSign = handSigns[randomIndex];

    // Log the random hand sign
    console.log(selectedSign);

    // Base case: If selectedSign is "👈", stop recursion
    if (selectedSign === "👈") {
        return selectedSign;
    }

    // Recursive case: Keep calling the function until "👈" is selected
    return generateRandomHandSign();
}

generateRandomHandSign();
 
