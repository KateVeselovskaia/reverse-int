module.exports = function reverse (n) {
  let nString = Math.abs(n).toString();
  return nString.split("").reverse().join("");
}
