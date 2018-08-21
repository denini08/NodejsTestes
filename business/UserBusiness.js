//import { Promise } from "mongoose";

class UserBusiness {
    constructor(persistence) {
        this.persistence = persistence
    }



    insert(tag, name, email) {
        return new Promise((resolve, reject) => {
            this.persistence.findTag(tag).then((res) => { //se a tag ja foi usada
                reject('a tag \'' + res.tag + '\' ja existe!')
            }).catch((res) => { //se a tag nao foi foi usada
                this.persistence.insert({
                    tag: tag,
                    name: name,
                    email: email,
                    credits: 0
                }).then((res) => {
                    resolve(res)
                }).catch((res) => {
                    reject(res)
                })

            })
        })
    }

    findAll() {
        return new Promise((resolve, reject) => {
            this.persistence.findAll().then((res) => {
                resolve(res)
            }).catch((res) => {
                reject(res)
            })
        })
    }

    findTag(tag) {
        return new Promise((resolve, reject) => {
            this.persistence.findTag(tag).then((res) => {
                resolve(res)
            }).catch((res) => {
                reject('a tag \'' + tag + '\' nao existe!')
            })
        })
    }

    addCredits(tag, credits) {
        return new Promise((resolve, reject) => {
            if (credits <= 2) {
                reject('Valor abaixo do permitido!')
            }
            this.persistence.addCredits(tag, credits).then((res) => {
                this.persistence.findTag(tag).then((res) => { //para pegar o cara atualizado
                    resolve(res)
                }).catch((res) => {
                    reject(res) //impossivel entrar aqui.
                })

            }).catch((res) => {
                reject(res) //provalvemente nao encontrou o cara
            })

        })

    }

    findName(name) {
        return new Promise((resolve, reject) => {
            this.persistence.findName(name).then((res) => {
                resolve(res)
            }).catch((res) => {
                reject('o nome \'' + name + '\' nao existe!')
            })
        })
    }

    removerPeloNome(name) {
        return new Promise((resolve, reject) => {
            this.persistence.removerPeloNome(name).then((res) => {
                resolve(res)
            }).catch((res) => {
                reject('o nome \'' + name + '\' nao existe!')
            })
        })
    }

    removerPelaTag(tag) {
        return new Promise((resolve, reject) => {
            this.persistence.removerPelaTag(tag).then((res) => {
                resolve(res)
            }).catch((res) => {
                reject(res)
            })
        })
    }

    removeCredits(tag, credits) {
        return new Promise((resolve, reject) => {
            if (credits <= 0) {
                reject('impossivel remover')
            }

            this.persistence.findTag(tag).then((res) => {
                if (res.credits >= credits) {
                    credits *= -1
                    this.persistence.addCredits(tag, credits).then((res) => {
                        this.persistence.findTag(tag).then((res) => { //para pegar o cara atualizado
                            resolve(res)
                        }).catch((res) => {
                            reject(res) //impossivel entrar aqui.
                        })
                    }).catch((res) => {
                        reject(res)
                    })
                } else {
                    reject('saldo insulficiente')
                }

            }).catch((res) => {
                reject(res) //provalvemente nao encontrou o cara
            })

        })

    }


}

module.exports = UserBusiness