require("./Config/connect")
const express = require("express")
const router = require("./Router/router")  
const commentRoute = require("./Router/commentRouter")

const port = 2303

const server = express()
server.use(express.json())
server.use("/api", router)
server.use("/api", commentRoute)

server.get("/", (req, res) => {
    res.status(200).json({
        message: "Blog is live"
    })
})

server.listen(port, ()=> {
    console.log("Blogging...")
})