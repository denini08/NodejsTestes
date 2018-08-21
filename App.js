const express = require('express')
const app = express()

const conexao = require('./persistence/ConnectionDB')
const userPersistence = require('./persistence/UserPersistence');
const UserBusines = require('./business/UserBusiness')
const UserRouter = require('./routes/UserRouter')

const userRep = new userPersistence(conexao)
const Busines = new UserBusines(userRep)
const userRouter = new UserRouter(Busines)

app.get('/', (req, res) => {
    res.send('Eae Man!')
})

app.get('/1', (req, res) => {
    res.send('Eae Man!1')
})
app.use('/user', userRouter.router)

module.exports = app //pode ter erro aqui