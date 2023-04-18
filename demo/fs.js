// File System
import fs from 'fs';
import path from 'path';
import { test } from 'node:test';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(path.join(__dirname, 'test'));

//  *Create a folder
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log('Папка создана');
// });

// *File creation

const filePath = path.join(__dirname, 'test', 'text.text');
// console.log(filePath);
// fs.writeFile(filePath, 'Hello NodeJS', (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Файл создан');
//   fs.appendFile(filePath, '\nHello Again', (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log('Файл создан');
//   });
// });

//  *Read File

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err;
  }
  console.log(content);
  //   const data = Buffer.from(content);
  //   console.log('Content: ', data.toString());
});
