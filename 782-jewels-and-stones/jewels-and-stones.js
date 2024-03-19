/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let c = 0
  for (const stone of stones) {
    if (jewels.includes(stone)) {
      c++
    }
  }
  return c
};