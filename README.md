# Trébuchet

Quelque chose ne va pas avec la production globale de neige, et on t'a choisi pour jeter un coup d'œil. Les lutins t'ont même donné une carte ; ils y ont utilisé des étoiles pour marquer les cinquante emplacements les plus susceptibles de poser problème.

Tu essaies de demander pourquoi ils ne peuvent pas simplement utiliser une machine météorologique, quand tu réalises que les lutins te chargent déjà dans une catapulte.

Alors qu'ils font les derniers ajustements, ils découvrent que leur document d'étalonnage (ton entrée de puzzle) a été modifié par un jeune lutin qui semblait simplement excité de montrer ses talents artistiques. En conséquence, les lutins ont du mal à lire les valeurs sur le document.

Le document d'étalonnage nouvellement amélioré se compose de lignes de texte ; chaque ligne contenait initialement une valeur d'étalonnage spécifique que les lutins doivent maintenant récupérer. Sur chaque ligne, la valeur d'étalonnage peut être trouvée en combinant le premier chiffre et le dernier chiffre (dans cet ordre) pour former un seul nombre à deux chiffres.

Par exemple :

```
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
```

Dans cet exemple, les valeurs d'étalonnage de ces quatre lignes sont `12, 38, 15 et 77`. Les additionner donne `142`.

En prenant en compte la liste complète inclue dans `fullList.js`, quelle est la somme de toutes les valeurs d'étalonnage ?

## Guide supplémentaire
<details><summary>Déplier</summary>
  
> Deux fichiers modules contenant les strings sont inclus dans le repo et déjà appelés par `app.js`. Le fichier `list.js` contenant la liste exemple ci-dessus est appelé dans la variable `list`, et devra être utilisé en premier afin de vérifier le fonctionnement du code. Si celui-ci retourne bien le résultat attendu de `142`, on pourra utiliser la variable `fullList` contenant la liste complète incorporée dans `fullList.js`.

### Utiliser la variable `list` dans un premier temps

1. Les valeurs fournies sont dans une seule string, trouve un moyen de les séparer les lignes dans un tableau. <details><summary>Astuce</summary><sub>La méthode 2 de [cette page](https://codereviewvideos.com/how-to-convert-a-plain-text-list-to-an-array-in-javascript/) pourrait aider.</sub></details>
2. En parcourant chaque ligne de ce tableau, fais en sorte d'en extraire tous les chiffres. <details><summary>Astuce</summary><sub>Une solution peut être d'utiliser RegExp pour [chercher des chiffres entre 0 et 9](https://www.w3schools.com/jsref/jsref_regexp_0-9.asp) et de vérifier leur présence avec [string.match()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match).</sub></details>
3. Les chiffres extraits sont certainement des strings, et non pas des nombres, ce qui nous empâcherait de les additionner. Trouve un moyen de les convertir.<details><summary>Astuce</summary><sub>Plutot que de convertir ces strings en nombre avec un parseInt dans un boucle for, il peut être plus simple d'utiliser la méthode [array.map()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map) et d'appliquer le `parseInt` ici</sub></details>
4. Calcule la somme des chiffres dans chaque ligne. Si une ligne ne contient qu'un seul chiffre, considére-le comme à la fois la dizaine et l'unité dans le calcul.<details><summary>Astuce</summary><sub>Utilise une condition `if` pour vérifier si la ligne contient au moins un chiffre. Si c'est le cas, utilise une autre condition (par exemple ternaire) pour déterminer s'il y a un ou plusieurs chiffres. Si il y en a plusieurs, multiplie le premier chiffre par 10 et additionne le dernier (par exemple si il y a `5, 8, 3 et 2`, fais `5x10+2` pour avoir `52`), sinon utilise le même chiffre dans la multiplication et l'addition(par exemple si il y a seulement un `7`, fais `7x10+7` pour avoir `77`).</sub></details>
5. Mets à jour la somme total à chaque ligne parcourue.<details><summary>Astuce</summary><sub>Utilise l'opérateur `+=` pour ajouter la somme de la ligne à la somme totale.</sub></details>
6. Obtenir la somme totale dans la console et vérifier le bon résultat.<details><summary>Résultat attendu</summary>`142`</details>

### Utiliser la variable `fullList` si le code fonctionne

Faire passer la liste complète dans le code et obtenir le résultat dans la console.
Comparez votre résultat avec le résultat attendu :<details><summary>Résultat attendu</summary>`53974`</details>
