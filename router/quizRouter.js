const express = require('express')
const db = require('../db')
const quizRouter = express.Router()
quizRouter.get("/getquizpool",(req,res)=>{
    db.query(`SELECT * FROM quiz_pool`,(err,data)=>{
        if(err){
            res.send({
                msg:'net error',
                code:500,
                data:{
                    us:null,
                    up:null
                }
            })
        }else{
            res.send({
                msg: 'success',
                code:200,
                data: data
            })
        }
    })
})
module.exports = quizRouter