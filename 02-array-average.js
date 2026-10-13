// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

// Ecris ton code après cette ligne
const notes = [20, 13, 6, 11, 17];

function averageNote(notes) {
    if (notes.length === 0) {
        return "Échoué";
    }

    let somme = 0;

    for (let i = 0; i < notes.length; i++) {
        somme += notes[i]
    }

    console.log("Somme :", somme);
    console.log("Nombre de notes :", notes.length);
    let moyenne = somme / notes.length;
    console.log("Moyenne :", moyenne);

    if (moyenne >= 10) {
        return "Réussi";
    } else {
        return "Échoué";
    }
}
// Ne pas modifier la ligne suivante
module.exports = { averageNote }
