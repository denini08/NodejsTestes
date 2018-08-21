const conexao = require('./ConnectionDB')
const userPersistence = require('./UserPersistence');

const userRep = new userPersistence(conexao)

/*userRep.insert({
    tag: '2',
    name: 'matheus',
    email: 'matheus@poo.com',
    credits: 0
}).then((res) => {
    console.log(res)
}).catch((res) => {
    console.log(res)
})

userRep.addCredits('2', 20).then((res) => {
    console.log(res)
}).catch((res) => {
    console.log(res)
})


userRep.findTag('1').then((res) => {
    console.log(res.name)
}).catch((res) => {
    console.log(res)
})


userRep.findName('Denini').then((res) => {
    console.log(res.credits)
}).catch((res) => {
    console.log(res)
})


userRep.removerPeloNome('matheus').then((res) => {
    console.log(res)
}).catch((res) => {
    console.log(res)
})*/

userRep.addCredits('1', 20).then((res) => {
    console.log(res)
}).catch((res) => {
    console.log(res)
})