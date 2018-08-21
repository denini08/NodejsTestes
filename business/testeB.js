const conexao = require('../persistence/ConnectionDB')
const userPersistence = require('../persistence/UserPersistence');
const UserBusines = require('./UserBusiness')

const userRep = new userPersistence(conexao)
const Busines = new UserBusines(userRep)
    /*
    Busines.insert('2', 'Jose', 'lolo@poo.com').then((res) => {
        console.log(res)
    }).catch((res) => {
        console.log(res)
    })
    */
Busines.removeCredits('1', 10).then((res) => {
    console.log(res)
}).catch((res) => {
    console.log(res + '\n\n\n')
})

Busines.findAll().then((res) => {
    console.log(res + '\nwww')
}).catch((res) => {
    console.log(res)
})