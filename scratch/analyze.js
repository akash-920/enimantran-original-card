import fs from 'fs';
const code = fs.readFileSync('Wedding-card-main/scratch/enimantran.js', 'utf8');
const idx = code.indexOf('fixed inset-0 z-50');
console.log(code.substring(idx - 100, idx + 600));
