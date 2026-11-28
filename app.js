{/* const matieres = ['HTML', 'CSS', 'JavaScript', 'PHP'];

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
}*/
/*Bouton « Réinitialiser » */
/*
document.getElementById('resetCouleur').addEventListener('click', () => {
    document.body.style.backgroundColor = '#f0f4f8';
});

*/}
//champ de saisie
const champ = document.getElementById('champTache');
//bouton d'ajout
const bouton = document.getElementById('btnAjouter');
//liste des tâches
const liste = document.getElementById('listeTaches');

;

bouton.addEventListener('click', () => {
    // 1. Récupérer le texte tapé
    if(champ.value.trim() === '') {
        alert('Veuillez entrer une tâche.');
        return;
    }else {
        const texte = champ.value;
        // 2. Créer un <li>
        const li = document.createElement('li');

        

        // 3. Mettre le texte dedans
        li.textContent = texte;

        li.addEventListener('click', () => {
            li.classList.toggle('termine');   // ajoute/retire la classe 'termine'
        });
        
        // 4. Ajouter le <li> à la liste
        liste.appendChild(li);

        // 5. Vider le champ pour la prochaine tâche
        champ.value = '';
    }
    
});

