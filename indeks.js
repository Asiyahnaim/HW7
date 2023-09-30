// menghitung luas dan keliling persegi
function calculateSquareArea(sideLength) {
  return sideLength * sideLength;
}

function calculateSquarePerimeter(sideLength) {
  return 4 * sideLength;
}

// Fungsi untuk menghitung luas dan keliling persegi panjang
function calculateRectangleArea(length, width) {
  return length * width;
}

function calculateRectanglePerimeter(length, width) {
  return 2 * (length + width);
}

module.exports = {
  calculateSquareArea,
  calculateSquarePerimeter,
  calculateRectangleArea,
  calculateRectanglePerimeter,
};