import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// console.log(__filename);
// console.log(__dirname);
console.log('Название файла: ', path.basename(__filename));
console.log('Название директории: ', path.dirname(__filename));
console.log('Расширение файла: ', path.extname(__filename));
console.log('Parse: ', path.parse(__filename));
console.log('Parse: ', path.parse(__filename).name);

console.log(path.join(__dirname, 'server', 'index.html'));
