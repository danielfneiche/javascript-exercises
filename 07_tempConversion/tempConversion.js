const convertToCelsius = function(fahrenheit) {
  return fahrenheit = Math.round((5/9*(fahrenheit - 32)) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  celsius = (9/5) * celsius + 32;
  return celsius = Math.round(celsius * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
