const matieres = ['HTML', 'CSS', 'JavaScript', 'PHP'];

const profil = {
    nom: 'Orochi',
    age: 23,
    filiere: 'Informatique'
};
document.getElementById('btnCouleur').addEventListener('click', function() {
    document.body.style.backgroundColor = '#ffeaa7';
});

const liste = document.getElementById('liste-matieres');
for (const matiere of matieres) {
    const li = document.createElement('li');
    li.textContent = matiere;
    liste.appendChild(li);
}

const profilList = document.getElementById('profil');
for (const key in profil) {
    const li = document.createElement('li');
    li.textContent = `${key}: ${profil[key]}`;
    profilList.appendChild(li);
}
/*Bouton « Réinitialiser » */

document.getElementById('resetCouleur').addEventListener('click', () => {
    document.body.style.backgroundColor = '#f0f4f8';
});