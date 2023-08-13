const express = require('express')
const session = require('expression-session')

const porta = 3000
var path = require('path')
const app = express()

app.use(session({secret: 'ParametroTeste'}))

app.engine('html', require('ejs').renderFile)
app.set('view engine', html)
app.use('/public', express.static(path.join(__dirname, 'public')))

app.post('/', (req, res)=>{
    
    res.render('index')
})

app.get('/', (req, res)=>{
    res.render('index')
} )

app.listen(port, ()=>{
    console.log('funcionando')
})