const fs = require("fs");
const path = require("path");

function copyFile(file) {
  // Lire le contenu des deux fichiers
  const scriptContent = fs.readFileSync(
    path.join(__dirname, `../${file}.js`),
    "utf-8"
  );

  // Préparer le contenu à injecter (avec indentation correcte)
  const indentedScript = scriptContent
    .split("\n")
    .map((line) => "  " + line) // Indenter pour que ça s’aligne dans la fonction
    .join("\n");

  // Trouver la fonction et injecter dedans
  let mainContent = `\n${indentedScript}\n  \n\n module.exports = {
    baseDeDonnees, signUp, login
  };`;

  // Sauvegarder le fichier modifié (peut aussi écraser `main.js`)
  fs.writeFileSync(
    path.join(__dirname, `../tests/tamps/${file}.js`),
    mainContent,
    { flag: "w+" } // Autoriser l'écriture dans le fichier
  );
}

module.exports = {
  copyFile,
};
