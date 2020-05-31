const express = require('express');
const app = express();
const port = 80;

app.set('port', port);
app.use('/', express.static('build'));
app.get('*', (req, res) => {
  res.sendfile('./build/index.html');
});
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
