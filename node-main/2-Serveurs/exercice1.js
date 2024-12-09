/**
  Utilisation du module http de Node JS pour créer un serveur http de plus en plus élaboré.

  Votre serveur devra être joignable à l'URL : [protocole]://[adresse IP ou nom de domaine][:port]

  Par exemple :
   - Protocole : http
   - Adresse IP : 100.50.25.12
   - Port : 6666

   Donne l'URL : http://100.50.25.12:6666
**/

/**
  Exercices :
  
  1.Vous devez créer un serveur HTTP en utilisant le module http de Node.js, qui retourne dans sa réponse HTTP un corps de réponse valide en format HTMLcontenant un title de votre choix et un <h1>Hello, World!</h1>. Il est important de s'assurer que le Mime Type correct (text/html) est spécifié dans l'en-tête de la réponse HTTP pour que le navigateur comprenne qu'il s'agit d'un document HTML.
**/


const http = require('http');

const hostname = '127.0.0.1'; // Adresse de base
const port = 8080; // Nouveau port considéré comme sûr

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mon Serveur Node.js</title>
    </head>
    <body>
      <h1>Hello, World!</h1>
    </body>
    </html>
  `;
  res.end(htmlContent);
});

server.listen(port, hostname, () => {
  console.log(`Le serveur fonctionne à l'adresse http://${hostname}:${port}`);
});