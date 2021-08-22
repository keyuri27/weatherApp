const express = require('express')
const app = express()

app.set('view engine', 'ejs')

/*app.get('/', function (req, res) {
  res.send('Hello World')
})*/



app.get('/*', (req, res) => {
  res.render('index')
});

app.post('/', (req,res) => {
    res.render('index')
});

app.listen(3000,() => {
  console.log('Server listening on port 3000!')
});