var distributeCandies = function (n, lim) {
  let count = 0
  for (let i = 0; i <= lim; i++) {
    for (let j = 0; j <= lim; j++) {
      for (let k = 0; k <= lim; k++) {
        if (i + j + k === n) {
          count++
        }
      }
    }
  }
  return count
};