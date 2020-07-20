
const initialData = require("./data.json")
const collection = require("../utilities/connection")
const PData = require("./postdata.json")


let model = {}

//postssetup
model.insertScript = () => {
    return collection.getPostCollection().then((collection) => {
        return collection.deleteMany().then((data) => {
            return collection.insertMany(PData).then((response) => {
                if (response && response.length > 0) {
                    return response.length
                } else {
                    let err = new Error("Initial insertion failed")
                    err.status = 500
                    throw new Error
                }
            })
        })
    })
}

//usersetuo
model.userSetup = () => {
    return collection.getCollection().then((collection) => {
        return collection.deleteMany().then((data) => {
            return collection.insertMany(initialData).then((response) => {
                if (response && response.length > 0) {
                    return response.length
                } else {
                    let err = new Error("Initial insertion failed")
                    err.status = 500
                    throw new Error
                }
            })
        })
    })
}


model.generateId = () => {
    return collection.getPostCollection().then((collection) => {
        return collection.distinct("id").then((id) => {
            newId = Math.max(...id)
            return newId > 0 ? newId + 1 :5
        })
    })
}


model.getUser = (uemail) => {
    return collection.getCollection().then((collection) => {
        return collection.findOne({email : uemail }, { _id: 0, email: 1, password: 1 })
            .then((data) => {
                return data
            })
    })
}


model.createAccount = (accountObj) => {
    return collection.getCollection().then((collection) => {
        return collection.create(accountObj).then((data) => {
            if (data) {
                return true
            } else {
                return false
            }
        })
    })
}


//getposts
model.getPosts = () => {
    return collection.getPostCollection().then((collection) => {
        return collection.find({},{_id:0}).then((data) => {
            return data
        })
    })
}


//addnewpost
model.addData = (data) => {
    return model.generateId().then((id) => {
        data.id = id
        return collection.getPostCollection().then((collection) => {
            return collection.insertMany(data).then((response) => {
                if (response && response.length > 0) {
                    return response.length
                } else {
                    let err = new Error("Posting failed")
                    err.status = 500
                    throw new Error
                }
            })
        })
    })
}

//getpostbyid
model.getIdPost = (id) => {
    return collection.getPostCollection().then((collection) => {
        return collection.find({id:id},{_id:0}).then((data) => {
            return data
        })
    })
}

//getbyTag
model.getByTag = (tag) => {
    return collection.getPostCollection().then((collection) => {
        return collection.find({Course:tag},{_id:0}).then((data) => {
            return data
        })
    })
}

//getbyword
model.getByWord = (search) => {
    var word=search
    var word2=word[0].toUpperCase() +  
            word.slice(1)
    return collection.getPostCollection().then((collection) => {
        return collection.find({Course:word2},{_id:0}).then((data) => {
            return data
        })
    })
}




module.exports = model
