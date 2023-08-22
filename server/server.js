const express = require("express")
const cors = require("cors")
const { connection } = require("./db")
const { userRouter } = require("./routes/user.routes")
const { noteRouter } = require("./routes/note.routes")
require("dotenv").config()
const port = process.env.PORT || 4000
const app = express()
app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/note",noteRouter)


if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))

}

app.get("/",(req,res)=>{

    res.send({
        message:"api is working now"
    })
})


app.listen(port,async()=>{

    try {
        await connection
        console.log("database is connected")
    } catch (error) {
        console.log(error)
    }


    console.log("Server is running on port number",port)

})


