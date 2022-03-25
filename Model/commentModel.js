const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    msg:{
        type: String,
        required:true
    },
    poster:{
        type: Schema.Types.ObjectId,
        ref: "post"
    }
}, {timestamps:true})

module.exports = mongoose.model("comments", commentSchema)