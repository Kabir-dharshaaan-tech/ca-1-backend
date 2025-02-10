const express =require('express')
require('dotenv').config()
const cors =require('cors')
const PORT=process.env.PORT || 5000

const app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("sucess")
})

app.post('/signup',(req,res)=>{
    const {Username}=req.body
    const {Email}=req.body
    const {Password}=req.body
    const {DateofBirth}=req.body
    if(!Username)
    {
        res.status(500).json({msg:"Username cannot be empty"})
    }

    if(!Email)
    {
        res.status(500).json({msg:"Email cannot be empty"})
    }

    if(Password.length>=8 && Password.length<=16)
    {
        // res.status(500).json({msg:"Password length should be greater than 8 or less than or equal to 16"})
    }
    else{
        res.status(500).json({msg:"Password length should be greater than 8 or less than or equal to 16"})
    }

    return res.status(200).json({msg:"sucess fully signed"})
})


app.listen(PORT,()=>{
    console.log(`running succesfully ${PORT}`)
})