// const fs = require('fs');

// fs.readFile('./data.json', 'utf8', (err, data) => {
//   if (!err) {
//     console.log(JSON.parse(data));
//   } else {
//     console.error(err);
//   }
// });

const fs = require('fs');

let data = fs.readFileSync('data.json', 'utf8');


  const users = JSON.parse(data).users;
 console.log(users)
  
  let totalAge = 0;
  const userCount = users.length;

  users.forEach(user => {
    totalAge += user.age;
  });

 
  const averageAge = totalAge / userCount;


  fs.writeFile('result.txt', `Total age : ${averageAge}`, 'utf8', err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Result Succsesfully  result.txt  wrtie  the document.');
    console.log(fs.readFileSync("result.txt", "utf8"));
  });
;


