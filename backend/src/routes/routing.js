const express = require('express');
const routing = express.Router();
const service = require("../service/service");


routing.get("/postsSetupDB", (req, res, next) => {
    service.insertScript().then((data) => {
        if (data) {
            res.status(201)
            res.json({ message: "Inserted " + data + " document in database" })
        }
    })
})


routing.get("/setupDB", (req, res, next) => {
    service.userSetup().then((data) => {
        if (data) {
            res.status(201)
            res.json({ message: "Inserted " + data + " document in database" })
        }
    })
})

routing.post("/login", (req, res, next) => {

    var email = req.body.email
    var password = req.body.password
    service.validateLogin(email, password).then((resp) => {
        if (resp) {
            res.status(200)
            res.json({ message: "Logged in Successfully" })
        }
    }).catch((err) => {
        next(err)
    })
})



routing.post("/register", (req, res, next) => {

    let accountObj = req.body.newUserDetails
    service.createAccount(accountObj).then((data) => {
        res.json({ message: "Account Created Successfully" })
    }).catch((err) => {
        next(err)
    })
})



//getposts
routing.get("/getData", (req, res, next) => {
    service.getPosts().then((data) => {
        res.json(data)
    }).catch((err) => {
        next(err)
    })
})

//addnewpost
routing.post("/newpost", (req, res, next) => {

    let accountObj = req.body.newData
    service.addData(accountObj).then((data) => {
        res.json({ message: "data added Successfully" })
    }).catch((err) => {
        next(err)
    })
})

//getpostbyid
routing.get("/posts/:id", (req, res, next) => {
    const id = req.params.id
    service.getIdPost(id).then((data) => {
        res.json(data)
    }).catch((err) => {
        next(err)
    })
})

//search by tags
routing.get("/t/:tag", (req, res, next) => {
    const tag = req.params.tag
    service.getByTag(tag).then((data) => {
        res.json(data)
    }).catch((err) => {
        next(err)
    })
})

//search by course name
routing.get("/search/:word", (req, res, next) => {
    const word = req.params.word
    service.getByWord(word).then((data) => {
        res.json(data)
    }).catch((err) => {
        next(err)
    })
})

module.exports = routing;