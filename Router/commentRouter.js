const express = require("express")
const route = express.Router()
const {newComment, allComment } = require("../Controller/commentControl")

route
    .route("/blog/:id/comment")
    .post( newComment)
    .get(allComment )

module.exports = route