const mongoose = require('mongoose')

class UserPersistence {
    constructor(connection) {
        this.connection = connection
        this.schema = new mongoose.Schema({
            tag: String,
            name: String,
            email: String,
            credits: Number
        })
        this.userModel = this.connection.model('User', this.schema)
    }
    insert(user) {
        return new Promise((resolve, reject) => {
            let userRep = new this.userModel(user) //garante que a "tabela" vai ser criada
            userRep.save((err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })

    }

    findAll() {
        return new Promise((resolve, reject) => {
            this.userModel.find((err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }

    findTag(tag) {
        return new Promise((resolve, reject) => {
            this.userModel.findOne({ tag: tag }, (err, res) => {
                if (err || res == null) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }

    addCredits(tag, credits) {
        return new Promise((resolve, reject) => {
            this.userModel.findOneAndUpdate({ tag: tag }, { $inc: { credits: credits } }, (err, res) => {
                if (err) {
                    reject(err)
                }
                resolve(res) //lembrar que quando retorna o json ainda nao ta atualizado 
            })
        })
    }

    findName(name) {
        return new Promise((resolve, reject) => {
            this.userModel.findOne({ name: name }, (err, res) => {
                if (err || res == null) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }

    removerPeloNome(name) {
        return new Promise((resolve, reject) => {
            this.userModel.findOneAndRemove({ name: name }, (err, res) => {
                if (err || res == null) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }

    removerPelaTag(tag) {
        return new Promise((resolve, reject) => {
            this.userModel.findOneAndRemove({ tag: tag }, (err, res) => {
                if (err || res == null) {
                    reject(err)
                }
                resolve(res)
            })
        })
    }


}

module.exports = UserPersistence