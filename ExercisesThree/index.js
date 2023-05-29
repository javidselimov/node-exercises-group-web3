
const express = require('express');
const app = express();
const port = 3000;

const cards = [
  { id: 1, number: '1111-1111-1111-1111' },
  { id: 2, number: '2222-2222-2222-2222' },
  { id: 3, number: '3333-3333-3333-3333'},
  { id: 4, number: '4444-4444-4444-4444' }
];


app.get('/card-a', (req, res) => {
  const numbers = cards.map(card => card.number);
  res.json(numbers);
});

app.get('/card/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const card = cards.find(c => c.id === id);

  if (card) {

    res.json({ id: card.id, number: card.number });
  } else {

    res.status(404).send('404 Not Found');
  }
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} üzərində dinləyir...`);
});













// const express = require('express');
// const app = express();


// const cards = [
//   { id: 1, cardNumber: '1111222233334444' },
//   { id: 2, cardNumber: '5555666677778888' },
//   { id: 3, cardNumber: '9999000011112222' },
//   { id: 4, cardNumber: '3333444455556666' },
//   { id: 5, cardNumber: '7777888899990000' }
// ];

// app.get('/card/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const card = cards.find(card => card.id === id);

//   if (card) {
//     res.send(`Card Number: ${card.cardNumber}`);
//   } else {
//     res.status(404).send('Card not found.');
//   }
// });

// app.listen(3000, () => {
//   console.log('Server 3000 working .');
// });





// const express = require('express');
// const app = express();

// app.get('/', function (req, res) {
//   res.send('You send request for / route!');
// });
// app.get('/Card', function (req, res) {
//   res.send('You send request for Card route!');
// });
// app.get('/Client', function (req, res) {
//     res.send('You send request for Clientroute!');
//   });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });