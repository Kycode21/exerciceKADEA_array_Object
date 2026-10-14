// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

// Ecris ton code après cette ligne

function whoIsAdmin(utilisateurs) {
    const admins = [];

    for (let i = 0; i < utilisateurs.length; i++) {
        if (utilisateurs[i].estAdmin) {
            admins.push(utilisateurs[i].nom);
        }
    }
    return admins;
}
// Ne pas modifier la ligne suivante
module.exports = { whoIsAdmin }
