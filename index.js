const express=require("express");
const app= express();


app.get("/books",function(req,res){
  res.send({name:"books"})
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})