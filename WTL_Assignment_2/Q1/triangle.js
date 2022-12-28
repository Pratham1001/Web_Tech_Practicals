
// Calculates the type of triangle based on the lengths of its sides
function getTriangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
      return "equilateral";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
  
  // Calculates the area of a triangle based on its base and height
  function getTriangleArea(base, height) {
    return (base * height) / 2;
  }
  
  module.exports = {
    getTriangleType: getTriangleType,
    getTriangleArea: getTriangleArea,
  };
  