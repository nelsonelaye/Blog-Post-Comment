const blogModel = require("../Model/model")

const createBlog = async (req, res) => {
    try {

        const newBlog = { 
            blogName: req.body.blogName,
            blogContent: req.body.blogContent
        }
        
        const blog = await blogModel.create(newBlog)

        res.status(201).json({
            status: "Success",
            data: blog
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
}

const readBlog = async (req, res) => {
    try {

        const id = req.params.id
        const blog = await blogModel.findById(id)

        if(!blog){
            res.status(404).json({
                message: "Blog not found"
            })
        }

        res.status(200).json({
            status: "Success",
            data: blog
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
}

const allBlog = async (req, res) => {
    try {
        const blog = await blogModel.find()

        if(!blog){
            res.status(404).json({
                message: "Blog not found"
            })
        }

        res.status(200).json({
            status: "Success",
            data: blog
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
}

const updateBlog = async (req, res) => {
    try {

        const id = req.params.id
        const blog = await blogModel.findById(id)

        if(!blog){
            res.status(404).json({
                message: "Blog not found"
            })
        }
        const blogResult = await blogModel.findByIdAndUpdate(id, req.body, {new:true})


        res.status(200).json({
            status: "Success",
            data: blogResult
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
}


const deleteBlog = async (req, res) => {
    try {

        const id = req.params.id
        const blog = await blogModel.findById(id)

        if(!blog){
            res.status(404).json({
                message: "Blog not found"
            })
        }
        const blogResult = await blogModel.findByIdAndDelete(id)

        res.status(204).json({
            status: "Success",
            message: "Blog successfully deleted"
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
}


module.exports = {
    createBlog,
    readBlog,
    allBlog,
    updateBlog,
    deleteBlog
}