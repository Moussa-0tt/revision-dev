const notes = [12, 8, 15, 6, 19];

// 1. Notes validées (≥ 10)
const validees = notes.filter(n => n >= 10);

// 2. Toutes les notes avec +1 point
const avecBonus = notes.map(n => n + 1);


console.log(validees);   // [12, 15, 19]
console.log(avecBonus);  // [13, 9, 16, 7, 20