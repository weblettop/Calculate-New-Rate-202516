'use strict'

/**
 * Function for calculation of athlete rating based on the winner and opponent ratings.
 * @param {number} winner - Rating of the winner
 * @param {number} opponent - Rating of the opponent
 * @returns {number|string} The new rating rounded to tenths or error message
 * @description Calculates the new rating of the winner based on rating difference and bonus rules.
 *
 */

function rating(winner, opponent) {
  if (typeof winner !== 'number' || typeof opponent !== 'number') {
    return 'Error: Wrong data type'
  }

  let ratingDifference = winner - opponent
  if (isNaN(ratingDifference)) {
    return 'error: It is not NaN'
  }
  if (winner < 0 || opponent < 0) {
    return "Error: The rating can't be less than 0"
  }

  if (ratingDifference >= 0 && ratingDifference <= 2) {
    return parseFloat((winner + 2).toFixed(1))
  }
  if (ratingDifference > 2 && ratingDifference < 20) {
    return parseFloat((winner + 1).toFixed(1))
  }
  if (ratingDifference >= 20) {
    return parseFloat(winner.toFixed(1))
  }
  if (ratingDifference < 0) {
    return parseFloat(
      (winner + (Math.abs(ratingDifference) + 5) / 3).toFixed(1)
    )
  }
  return parseFloat(winner.toFixed(1))
}
console.log(rating(1, 1))
console.log(rating(2.1, 0))
console.log(rating(4, 2.1))
console.log(rating(22, 2))
console.log(rating(25, 5))
console.log(rating(25, 40))
console.log(rating(-25, 0))
console.log(rating(25, -10))
console.log(rating(25, 25.1))
console.log(rating('', 10))
console.log(rating(25, ''))
console.log(rating(25, null))
console.log(rating('aa', 10))
console.log(rating(25, undefined))
console.log(rating(25, NaN))
