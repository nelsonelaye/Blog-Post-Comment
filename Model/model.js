const mongoose = require("mongoose")
const Schema = mongoose.Schema
const blogSchema = mongoose.Schema({
    blogName: {
        type: String,
        required: true
    },
    blogContent: {
        type: String
    },

    comments:[{
        type: Schema.Types.ObjectId,
        ref: "comments"
    }],

    
}, {timestamps: true} )


module.exports = mongoose.model("blog", blogSchema)