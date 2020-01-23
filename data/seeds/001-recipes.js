exports.seed = function(knex) {
  return knex('recipes').insert([
    {name: 'Truffle French Fries', preptime: '12 minutes', servings:'2 persons'}, // 1
    {name: 'Cheeseburger', preptime: '15 minutes', servings:'1 person'}, // 2
    {name: 'Cheesy Mac & Cheese', preptime: '45 minutes', servings:'4 persons'} // 3
  ]);
};