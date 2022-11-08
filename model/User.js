const{Schema, model} = require("mongoose")
const userSchema = new Schema({
    name:{
        type: String
    },
    content:{
        type: String
    }
    //dateCreated: new Date()
   
},
{timestamps: true}
)

const userModel = model("users", userSchema)

module.exports = userModel