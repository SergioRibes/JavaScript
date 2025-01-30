const plantNeedsWater = (day) => {
    if (day === "Wednesday") {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(plantNeedsWater("Tuesday")); // Passing "Tuesday" as a string
  