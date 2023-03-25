const express = require("express");
const {connection} = require("./db");
const {userRouter} = require("./Routes/user.route");
const {noteRouter} = require("./Routes/note.route");
const {auth} = require("./middlewares/auth.middleware");

const app = express();
app.use(express.json());

app.use("/users",userRouter);
app.use(auth);
app.use("/notes",noteRouter);

app.listen("8080",async()=>{
    try {
        await connection;
        console.log("connected to mongodb");
    } catch (err) {
        console.log(err);
    }
    console.log("server is running on 8080 port");
})

