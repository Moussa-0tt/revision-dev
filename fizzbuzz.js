/*
un programme qui affiche les nombres de 1 à 30 avec les règles :
multiple de 3 → Fizz
multiple de 5 → Buzz
multiple de 3 ET 5 → FizzBuzz
sinon → le nombre
*/
let i = 1;
while (i <= 30) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
    i++;
}
/*Nombres pairs : affiche les nombres pairs de 1 à 20 avec % */
let j = 1;
while (j <= 20) {
    if (j % 2 === 0) {
        console.log(j);
    }
    j++;
}