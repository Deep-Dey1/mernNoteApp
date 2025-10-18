import express from "express";
const app = express();
// the first api :
app.get("/api/notes",(req,res)=>{
    res.send("API Created !");
});

app.listen(5001,() =>{
    console.log("Server started on PORT : 5001");
});