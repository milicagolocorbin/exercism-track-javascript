/// <reference path="./global.d.ts" />
// @ts-check

/**
 * @param {number} remainingTime
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === 0) {
    return "Lasagna is done.";
  }
  if (remainingTime > 0) {
    return "Not done, please wait.";
  }
  return "You forgot to set the timer.";
}

/**
 * @param {string} layers
 */
export function preparationTime(layers, min = 2) {
  return layers.length * min;
}

/**
 * @param {string} layers
 */
export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  for (let layer of layers) {
    if (layer === "noodles") {
      noodles += 50;
    }
    if (layer === "sauce") {
      sauce += 0.2;
    }
  }
  return { noodles, sauce };
}

/**
 * @param {string[]} friendsIngredients
 * @param {string[]} myIngredients
 */
export function addSecretIngredient(friendsIngredients, myIngredients) {
  myIngredients.push(friendsIngredients[friendsIngredients.length - 1]);
}

/**
 * @param {object} recipe
 * @param {number} num
 */
export function scaleRecipe(recipe, num) {
  const numPortions = num / 2;
  const recipeScaled = { ...recipe };

  for (let ingredient in recipeScaled) {
    recipeScaled[ingredient] *= numPortions;
  }
  return recipeScaled;
}
