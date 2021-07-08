// Remove falsy values from array
let miscellaneous = ['🍎', false, '🍊', NaN, 0, undefined, '🌶️', null, '', '🥭'];

// passing Boolean to array.filter() will remove falsy values from array
let fruits = miscellaneous.filter(Boolean);

console.log(fruits); // ['🍎', '🍊', '🌶️', '🥭']