const fs = require('fs');
const data = fs.readFileSync('data3.txt', 'utf8');
// const lines = data.split('\n');
// console.log(lines);

let potions = 0;

for (let i = 0; i < data.length; i = i + 3) {
  // let triple = [data[i], data[i + 1], data[i + 2]].sort().join('');
  // console.log(triple);
  let potionsThisRound = 0;
  let monstersThisRound = 0;
  let triple = [data[i], data[i + 1], data[i + 2]];
  for (char of triple) {
    if (char === 'x') {
    } else if (char === 'A') {
      potionsThisRound += 0;
      monstersThisRound += 1;
    } else if (char === 'B') {
      potionsThisRound += 1;
      monstersThisRound += 1;
    } else if (char === 'C') {
      potionsThisRound += 3;
      monstersThisRound += 1;
    } else {
      potionsThisRound += 5;
      monstersThisRound += 1;
    }
  }
  if (monstersThisRound === 2) {
    potionsThisRound += 2;
  } else if (monstersThisRound === 3) {
    potionsThisRound += 6;
  }
  console.log(triple, potionsThisRound);
  potions += potionsThisRound;
}

console.log(`Total potions needed: ${potions}`);
