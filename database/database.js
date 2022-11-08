const mongoose =require("mongoose")
const {config}=require("dotenv")
config()
async function connect(uri){
    try {
        mongoose.connect( uri || process.env.MONGO_URL,
            
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
        console.log('connected to the mongo')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connect