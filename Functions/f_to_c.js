function convertFToC(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

let celsiusTemp = convertFToC(92);
console.log(celsiusTemp);