const express = require('express');
const app = express();
const port = 4040;

app.set('port', port);
app.use('/', express.static('build'));
app.get('*', (req, res) => {
  res.sendfile('./build/index.html');
});
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});

// const fetch = require('node-fetch');
// var query = `query GetBusinessCategories {
//   getBusinessCategories {
//       businessCategoryID
//       businessCategoryName
//     }
// }`;

// fetch('http://46.101.138.224:8080/query', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json'
//   },
//   body: JSON.stringify({
//     query
//   })
// })
//   .then(r => r.json())
//   .then(data => console.log('data returned:', data));
