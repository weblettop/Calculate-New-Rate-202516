'use strict'

/**
 * Function for caclilation of athlete rating based on the winner and opponent ratings.
 * @param {number} winner - Reting of the winner
 * @param {number} opponent - Reting of the opponent
 * @throws {String} If the input data is incorrect (NaN, negative numbers, non-numeric values).
 * @returns {number} The new rating value has been rounded tenths
 * @description The function calculates the new rating of the winner based on the difference between the winner with bonus or not
 *
 */

function rating(winner, opponent) {
  if (isNaN(winner) || isNaN(opponent)) {
    return "Error: The raiting can't be empty"
  }

  if (typeof winner !== 'number' || typeof opponent !== 'number') {
    return 'Error: Wrong data type'
  }

  if (
    (typeof winner === 'number' && winner < 0) ||
    (typeof opponent === 'number' && opponent < 0)
  ) {
    return "Error: The rating can't be less than 0"
  }

  let ratingDifference = winner - opponent

  if (0 <= ratingDifference && ratingDifference <= 2) {
    return `Winner rating ${winner} : opponent rating ${opponent} = athlete rating  ${winner} ${parseFloat(
      (winner + 2).toFixed(1)
    )}`
  } else if (3 <= ratingDifference && ratingDifference < 20) {
    return `Winner rating ${winner} : opponent rating ${opponent} = athlete rating  ${parseFloat(
      (winner + 1).toFixed(1)
    )}`
  } else if (ratingDifference >= 20) {
    return `Winner rating ${winner} : opponent rating ${opponent} = athlete rating  ${parseFloat(
      winner.toFixed(1)
    )}`
  } else if (ratingDifference < 0) {
    return `Winner rating ${winner} : opponent rating ${opponent} = athlete rating  ${parseFloat(
      ((opponent - winner + 5) / 3 + winner).toFixed(1)
    )}`
  }
}

console.log(rating(25, 25))
console.log(rating(25, 24))
console.log(rating(25, 5))
console.log(rating(25, 40))
console.log(rating(-25, 0))
console.log(rating(25, -10))
console.log(rating(25, 25.5))
console.log(rating('', 10))
console.log(rating(25, ''))
console.log(rating(25, null))
console.log(rating('aa', 10))
console.log(rating(25, undefined))
console.log(rating(25, NaN))
