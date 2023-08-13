const express = require('express')
const app = express()
const porta = process.env.PORT

app.get('/',(req, res)=>{
    res.send('Unicredit')
})
app.get('/elite',(req, res)=>{
    res.send({elite: 'Tirar pelo menos 10 em cálculo né pae'})
})
app.get('/login',(req, res)=>{
    res.send({login: 'Insira as informações de login: '})
})
app.get('/assistencia',(req, res)=>{
    res.send({assistencia: 'Para nos contatar, ligue: '})
})

app.listen(porta || 3000,()=>{console.log('It is working :P')})