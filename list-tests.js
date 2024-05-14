import fs from 'fs';
import path from 'path';

const testDir = path.resolve('test');
const testFiles = fs.readdirSync(testDir).filter(file => file.endsWith('.mjs'));

console.log('Test files:', testFiles);
