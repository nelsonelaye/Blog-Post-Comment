const express = require("express")
const router = express.Router()

const { createBlog, readBlog, allBlog,updateBlog,deleteBlog} = require("../Controller/controller")


router
    .route("/post")
    .post(createBlog)

router
    .route("/blog")
    .get(allBlog)

router
    .route("/blog/:id")
    .get(readBlog)
    .patch(updateBlog)
    .delete(deleteBlog)

module.exports = router