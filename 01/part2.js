const fs = require('fs');
const data = fs.readFileSync('data1.txt', 'utf8');
// const lines = data.split('\n');
// console.log(lines);

console.log(data);

let potions = 0;

for (const char of data) {
  console.log(char);
  if (char === 'B') {
    potions = potions + 1;
  }
  if (char === 'C') {
    potions = potions + 3;
  }
  console.log(potions);
}

console.log(`Total potions needed: ${potions}`);
