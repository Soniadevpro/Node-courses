/*Module HTTP - La documentation du module HTTP de Node.js vous montrera comment créer un serveur HTTP, gérer les requêtes et les réponses : https://nodejs.org/api/http.html

Module FileSystem (fs) - La documentation du module FileSystem de Node.js vous expliquera comment lire et écrire des fichiers avec Node.js, en particulier les méthodes asynchrones : https://nodejs.org/api/fs.html

Promises - Comprendre les promesses en JavaScript et comment elles fonctionnent avec les méthodes asynchrones : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

Async/await - Documentation sur l'utilisation de mots-clés async et await pour simplifier la gestion des promesses en JavaScript : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
*/

/**
  Exercices :
1. Créez un fichier exercice3.html contenant un exemple de contenu HTML valide.

2. Créez un fichier JavaScript  exercice3.js  pour votre serveur HTTP et importez les modules http et fs (FileSystem) de Node.js en ajoutant ces lignes en haut du fichier:

Le module FileSystem (fs) est un module intégré de Node.js qui fournit des méthodes pour interagir avec le système de fichiers, telles que la lecture et l'écriture de fichiers. Le module fs fournit à la fois des méthodes synchrones (bloquantes) et asynchrones (non bloquantes) pour interagir avec les fichiers.

Les méthodes asynchrones basées sur les promesses sont accessibles via l'objet fs.promises. En utilisant ces méthodes, vous pouvez tirer parti des fonctionnalités modernes de JavaScript, telles que les mots-clés async et await, pour un code plus lisible et une meilleure gestion des erreurs.



1. Créez un serveur HTTP avec une fonction de rappel (callback) qui sera exécutée à chaque requête reçue 
  const server = http.createServer( (req, res) => {
    // Gérer les requêtes et les réponses ici.
  });

2. Préparez un fichier HTML valide à côté de votre programme.
  À l'intérieur de la fonction de rappel, utilisez fs.readFile pour lire le contenu du fichier index.html de manière asynchrone. Ensuite, définissez les en-têtes de réponse et envoyez le contenu HTML comme corps de la réponse :

3. À chaque requête HTTP, lisez le fichier HTML avec Node JS en utilisant des méthodes asynchrones.

4.Lorsque votre serveur reçoit une requête HTTP, vous devez utiliser Node JS pour lire le contenu du fichier HTML. Pour ce faire, utilisez des fonctions asynchrones fournies par l'objet FileSystem de Node JS. Ces fonctions vous permettront de lire le fichier sans bloquer le reste de votre programme pendant la lecture.
En résumé, à chaque requête reçue, lisez le fichier HTML de manière non bloquante avec les fonctions asynchrones de Node JS, puis retournez son contenu dans la réponse HTTP.

Ainsi, vous allez créer un serveur qui enverra le contenu d'un fichier HTML comme réponse à chaque demande reçue.
**/
