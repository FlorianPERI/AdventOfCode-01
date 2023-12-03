//Récupération des listes dans les modules
const list = require("./modules/list.js");
const fullList = require("./modules/fullList.js");

let totalSum = 0; // Initialise une variable globale pour stocker la somme totale

const lines = fullList.split("\n"); //Assemble les lignes dans un tableau
for (const line of lines) {
  //Récupère les chiffres des lignes
  const regex = /[0-9]/g;
  const found = line.match(regex);

  // Convertit les chiffres du tableau en nombres entiers en utilisant parseInt
  const numbers = found.map((numString) => parseInt(numString, 10));

  console.log(numbers); // Affiche les nombres dans chaque ligne

  //Vérifie si il y a au moins un chiffre dans la ligne
  if (numbers.length >= 1) {
    //Si il y a un seul chiffre, l'utiliser en tant que dizaine et entier, sinon utiliser les deux chiffres
    const lineSum =
      numbers.length === 1
        ? numbers[0] * 10 + numbers[0]
        : numbers[0] * 10 + numbers[numbers.length - 1];
    console.log(`Somme pour cette ligne : ${lineSum}`); // Affiche la somme de la ligne
    totalSum += lineSum; // Ajoute la somme de la ligne à la somme totale
  }
}

console.log(`Somme totale : ${totalSum}`); // Affiche la somme totale
