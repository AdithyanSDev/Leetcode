/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
  let result=[]
  const kelvin=celsius+273.15
  const fahrenheit=celsius*1.80+32.00
  result.push(kelvin)
  result.push(fahrenheit)
  return result
};