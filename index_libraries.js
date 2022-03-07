const express=require("express");
const app= express();


app.get("/libraries",function(req,res){
  res.send({Permission:true})
})

app.listen(4000,()=>{
    console.log("listening on port 4000")
})