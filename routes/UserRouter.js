const express = require('express')
const body = require('body-parser')
const router = express.Router()

router.use(body.urlencoded({ extended: true }))
router.use(body.json())

class UserRouter {
    constructor(userBusiness) {
        this.userBusiness = userBusiness
        this.router = router
        this.initalRoutes()


    }

    initalRoutes() {
        router.get('/findAll', (req, resp) => {
            this.userBusiness.findAll().then((res) => {
                resp.send(res)
            }).catch((res) => {
                resp.send('fudeooooooooo BD')
            })
        })
    }

}

module.exports = UserRouter