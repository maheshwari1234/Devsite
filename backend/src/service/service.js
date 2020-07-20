const dbLayer = require("../model/model")

let service = {}

//postssetupdb
service.insertScript = () => {
    return dbLayer.insertScript().then((data) => {
        return data
    })
}

//usersetupdb
service.userSetup = () => {
    return dbLayer.userSetup().then((data) => {
        return data
    })
}


//login
service.validateLogin = (uemail, upass) => {
    return dbLayer.getUser(uemail).then((response) => {
        if (!response) {
            let err = new Error("User does not exist")
            err.status = 401
            throw err
        }
        else if (response.password != upass) {
            let err = new Error("Incorrect password")
            err.status = 401
            throw err
        } else {
            return true
        }
    })
}

//register
service.createAccount = (accountObj) => {
    return dbLayer.getUser(accountObj.email).then((data) => {
        if (data) {
            let err = new Error("User already exists")
            err.status = 406
            throw err
        } else {
            return dbLayer.createAccount(accountObj).then((data) => {
                if (data) {
                    return data
                } else {
                    let err = new Error("Account not created")
                    err.status = 500
                    throw err;
                }
            })
        }
    })

}


//getposts
service.getPosts = () => {
    return dbLayer.getPosts().then((data) => {
        if (data) {
            return data
        }
    })
}

//addnewpost
service.addData = (accountObj) => {
    return dbLayer.addData(accountObj).then((resp) => {
        if (resp) return resp
        else {
            let err = new Error("Failed to add post");
            err.status = 500;
            throw err;
        }
    })

}

//getpostid
service.getIdPost = (id) => {

    return dbLayer.getIdPost(id).then((resp) => {
        if (resp) return resp
        else {
            let err = new Error("No post found for this Id");
            err.status = 500;
            throw err;
        }
    })

}

//getbytag
service.getByTag = (tag) => {
    return dbLayer.getByTag(tag).then((resp) => {
        if (resp) return resp
        else {
            let err = new Error("No post found for this Tag");
            err.status = 500;
            throw err;
        }
    })

}

//getbyword
service.getByWord = (data) => {
    return dbLayer.getByWord(data).then((data) => {
        return data
    })
}


module.exports = service