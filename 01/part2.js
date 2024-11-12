const fs = require('fs');
const data = fs.readFileSync('data2.txt', 'utf8');
// const lines = data.split('\n');
// console.log(lines);

let scores = {
  xx: 0,
  Ax: 0,
  Bx: 1,
  Cx: 3,
  Dx: 5,
  AA: 2,
  AB: 3,
  AC: 5,
  AD: 7,
  BB: 4,
  BC: 6,
  BD: 8,
  CC: 8,
  CD: 10,
  DD: 12,
};

let potions = 0;

for (let i = 0; i < data.length; i = i + 2) {
  let pair = [data[i], data[i + 1]].sort().join('');
  console.log(pair);
  console.log(scores[pair]);
  potions += scores[pair];
}

console.log(`Total potions needed: ${potions}`);
