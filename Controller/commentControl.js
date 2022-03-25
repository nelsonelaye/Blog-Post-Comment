const commentModel =  require("../Model/commentModel")
const blogModel =  require("../Model/model")

const newComment = async (req, res) => {
    try {
        const id = req.params.id

        const blog = await blogModel.findById(id)

        if(!blog){
            res.status(404).json({
                message:"blog post not found"
            })
        }

        const comment = new commentModel(req.body)
        comment.poster = blog
        comment.save()

        blog.comments.push(comment)
        blog.save()


        res.status(201).json({
            status: "Success",
            data: comment
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
}


const allComment = async (req, res) => {
    try {
        const id = req.params.id

        const blog = await blogModel.findById(id).populate("comments")

        if(!blog){
            res.end("blog not found")
        }

        res.status(201).json({
            status: "Success",
            data: blog
        })
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message
        })
    }
}


module.exports = {
    newComment,
    allComment 
}