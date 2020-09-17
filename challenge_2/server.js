const express = require('express')
const app = express()
const port = 3000

app.use(express.static('client'))

app.get('/', (req, res) => {
  console.log('success')
  res.send('Hello World!')
})
app.post('/api/sales', (req, res) => {
  // res.writeHead(200, {
  //   'Access-Control-Allow-Origin': '*'
  // })
  res.status(200).send('success data was posted')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})