let notes = [12, 8, 15, 6, 19];
let notesFilter = notes.filter(n => n%2 !== 0);

console.log(notesFilter);

let notesMap = notes.map(n => {
    if (n >= 10 && n < 12) {
        return n + " → Passable";
    } else if (n >= 12 && n < 14) {
        return n + " → Assez Bien";
    } else if (n >= 14 && n < 16) {
        return n + " → Bien";
    } else if (n >= 16 && n < 18) {
        return n + " → Très Bien";
    } else if (n >= 18) {
        return n + " → Excellent";
    } else {
        return n + " → Insuffisant";
    }
});

console.log(notesMap);