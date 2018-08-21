//import { Error } from 'mongoose';

const app = require('./App')
const port = 3000
const host = 'localhost'

const servidor = app.listen(port, (err, res) => {
    if (err) {
        console.log('Erro no servidor!')
        throw new Error(err)
    }
    console.log('link:  htpp://' + host + ':' + port)

})

module.exports = servidor //pode ter erro aquicls