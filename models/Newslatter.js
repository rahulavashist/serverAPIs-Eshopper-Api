const mongoose = require("mongoose")



const NewslatterSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, "email Must Required"],
        unique:true
    }
     
})


const Newslatter = new mongoose.model("Newslatter", NewslatterSchema)

module.exports = Newslatter