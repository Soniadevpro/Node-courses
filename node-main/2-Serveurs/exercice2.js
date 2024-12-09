/**
 * npm install -g nodemon

  Exercices :
    
  1. Créez un serveur HTTP qui renvoie une réponse HTTP contenant un corps de réponse au format HTML valide uniquement si l'URL présente dans la requête HTTP inclut "/index". Pour obtenir des informations sur l'URL utilisée dans la requête HTTP, vous pouvez utiliser la propriété ".url" de l'objet représentant la requête entrante (qui est généralement une instance de la classe http.IncomingMessage).

/**
  2.Améliorez votre serveur HTTP de manière à ce que, si l'URL utilisée pour la requête HTTP ne contient pas "/index", le serveur génère une réponse HTTP ayant :

un code 404 dans l'en-tête ;
**/


const http = require('http');

const hostname = '127.0.0.1'; // Adresse locale
const port = 8080; // Port utilisé

const server = http.createServer((req, res) => {
  console.log(`URL reçue : ${req.url}`); // Affiche l'URL pour le débogage

  // Gérer l'accès à "/index" ou à la racine "/"
  if (req.url === '/' || req.url === '/index') {
    res.statusCode = 200; // Réponse HTTP OK
    res.setHeader('Content-Type', 'text/html'); // Type de contenu HTML
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Page Index</title>
      </head>
      <body>
        <h1>Bienvenue sur la page index !</h1>
      </body>
      </html>
    `);
  } else {
    // Si l'URL ne correspond pas, retourner une erreur 404
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404 Non Trouvé</title>
      </head>
      <body>
        <h1>Erreur 404 : Page non trouvée</h1>
        <p>L'URL demandée n'existe pas sur ce serveur.</p>
      </body>
      </html>
    `);
  }
});

// Démarrage du serveur
server.listen(port, hostname, () => {
  console.log(`Le serveur fonctionne à l'adresse http://${hostname}:${port}`);
});