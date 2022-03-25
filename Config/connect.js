const mongoose = require("mongoose")

const url = "mongodb://localhost/Blog"

mongoose.connect(url).then(()=>{
    console.log("All blog posts arrive here")
}).catch((err)=> {
    console.log(err.message)
})

module.exports = mongoose