const express=require("express");
const app= express();


app.get("/authors",function(req,res){
  res.send({Permission:true})
})

app.listen(5000,()=>{
    console.log("listening on port 5000")
})