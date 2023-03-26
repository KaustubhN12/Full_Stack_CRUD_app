const express = require("express");
const {NoteModel} = require("../model/note.model");
const noteRouter = express.Router();
const jwt = require("jsonwebtoken");

noteRouter.get("/",async(req,res)=>{
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token,"bruce")
    try {
        if(decoded){
            const notes = await NoteModel.find({"userID":decoded.userID});
            res.status(200).send(notes);
        }
    } catch (err) {
        res.status(400).send({err:err.message});
    }
})

noteRouter.post("/add",async(req,res)=>{
    try {
        const note = new NoteModel(req.body);
        await note.save();
        res.status(200).send({msg:"A new note has been added"});
    } catch (err) {
        res.status(400).send({err:err.message});
    }
})

noteRouter.patch("/update/:noteID",async(req,res)=>{
    const payload = req.body;
    const noteID = req.params.noteID;
    try {
        await NoteModel.findByIdAndUpdate({_id:noteID},payload);
        res.status(200).send({msg:"A note has been updated"});
    } catch (err) {
        res.status(400).send({err:err.message});
    }
})

noteRouter.delete("/delete/:noteID",async(req,res)=>{
    const noteID = req.params.noteID;
    try {
        await NoteModel.findByIdAndDelete({_id:noteID});
        res.status(200).send({msg:"A note has been deleted"});
    } catch (err) {
        res.status(400).send({err:err.message});
    }
})

module.exports={
    noteRouter
}