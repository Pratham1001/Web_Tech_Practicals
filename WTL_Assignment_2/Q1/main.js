const triangle = require("./triangle");

const side1 = 3;
const side2 = 4;
const side3 = 5;

console.log(
  `The type of triangle with sides of length ${side1}, ${side2}, and ${side3} is: ${triangle.getTriangleType(
    side1,
    side2,
    side3
  )}`
);

const base = 5;
const height = 7;

console.log(
  `The area of a triangle with base ${base} and height ${height} is: ${triangle.getTriangleArea(
    base,
    height
  )}`
);
