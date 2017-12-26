// const express = require('express')
// const app = express();
// const axios = require('axios');
// const yelp = require('yelp-fusion');

// myInfo = {
//     id: 'B8u0Ru3jJK3GHnYyMBFAgQ',
//     secret: 'LnSYhJlktHma6iPl1QzgmE0zntVBnmKhWQd8xZVDjmlHDnCi2hW8dmaatHC6Mnoq'
// }


// app.get('/', (req, res) => res.send('Hello World!'));

// app.get('/yelp', (req, res) => {
//     yelp.accessToken(myInfo.id, myInfo.secret).then(response => {
//         const client = yelp.client(response.jsonBody.access_token);
       
//         client.search({
//           term:'Four Barrel Coffee',
//           location: 'san francisco, ca'
//         }).then(response => {
//           res.send(response);
//         });
//       }).catch(e => {
//         console.log(e);
//       });
// });

// app.listen(3001, () => console.log('Example app listening on port 3000!'))