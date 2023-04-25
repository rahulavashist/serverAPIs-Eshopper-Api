const mongoose =require("mongoose")



const UserSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:[true,"Full Name Must Required"],
          
    },username:{
        type:String,
        required:[true,"UserName Must Required"],
        unique:true   
    },email:{
        type:String,
        required:[true,"Email Must Required"],
        
    },phone:{
        type:String,
        required:[true,"Phone Number Must Required"],
        
    },password:{
        type:String,
        required:[true,"Password Must Required"],
        unique:true   
    },addressline1:{
        type:String,
        default:""
    },addressline2:{
        type:String,
        default:""
    },addressline3:{
        type:String,
        default:""
    },pin:{
        type:String,
        default:""
    },city:{
        type:String,
        default:""
    },state:{
        type:String,
        default:""
    },role:{
        type:String,
        default:"User"
    },pic:{
        type:String,
        default:""
    },
    status:{
        type:String,
        default:"Active"
    }
})


const User = new mongoose.model("User",UserSchema)

module.exports =User