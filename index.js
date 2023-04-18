// import chalk from 'chalk';
// import { text } from './data.js';
// console.log(chalk.green(text));

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(path.join(__dirname, 'public', 'index.html'));

// console.log(http);
const server = http.createServer((reg, res) => {
  //   console.log(reg.url);
  //   if (reg.url === '/') {
  //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  //       if (err) {
  //         throw err;
  //       }
  //       res.writeHead(200, {
  //         //     'Content-Type': 'text/plain',
  //         'Content-Type': 'text/html',
  //       });
  //       res.end(data);
  //     });
  //   } else if (reg.url === '/contact') {
  //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
  //       if (err) {
  //         throw err;
  //       }
  //       res.writeHead(200, {
  //         //     'Content-Type': 'text/plain',
  //         'Content-Type': 'text/html',
  //       });
  //       res.end(data);
  //     });
  //   }

  let filePath = path.join(
    __dirname,
    'public',
    reg.url === '/' ? 'index.html' : reg.url
  );
  const ext = path.extname(filePath);
  console.log(filePath);

  let contentType = 'text/html';

  switch (ext) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    default:
      contentType = 'text/html';
  }

  if (!ext) filePath += '.html';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end('Error');
        } else {
          res.writeHead(200, {
            'Content-Type': contentType,
          });
          res.end(data);
        }
      });
    } else {
      res.writeHead(200, {
        'Content-Type': contentType,
      });
      res.end(content);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}...`);
});
