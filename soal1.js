const indeks = require('./indeks');

// menghitung luas dan keliling persegi
const squareSideLength = 5;
const squareArea = indeks.calculateSquareArea(squareSideLength);
const squarePerimeter = indeks.calculateSquarePerimeter(squareSideLength);

console.log(`Luas persegi: ${squareArea}`);
console.log(`Keliling persegi: ${squarePerimeter}`);

//  menghitung luas dan keliling persegi panjang
const rectangleLength = 6;
const rectangleWidth = 4;
const rectangleArea = indeks.calculateRectangleArea(rectangleLength, rectangleWidth);
const rectanglePerimeter = indeks.calculateRectanglePerimeter(rectangleLength, rectangleWidth);

console.log(`Luas persegi panjang: ${rectangleArea}`);
console.log(`Keliling persegi panjang: ${rectanglePerimeter}`);
