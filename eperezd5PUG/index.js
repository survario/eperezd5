const express = require('express')
const app = express()
const PORT = 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const server = app.listen(PORT, (req, res) => {
  console.log(
    `El servidor está siendo escuchado en el puerto ${server.address().port}`
  )
})

server.on('error', (error) => console.log('Hubo un error ' + error))

app.set('views', './views')
app.set('view engine', 'pug')

const productos = []

app.get('/', (req, res) => {
  res.render('formulario.pug', { productos })
});

app.get('/productos', (req, res) => {
  res.render('productos.pug', { productos: productos })
})

app.post('/productos', (req, res) => {
  const { title, price, thumbnail } = req.body;
  productos.push({ title, price, thumbnail })
  console.log(productos)
  res.render('formulario.pug', { productos })
})