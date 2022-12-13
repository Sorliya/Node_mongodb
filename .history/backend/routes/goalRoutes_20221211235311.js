const express=require('express')
const router=express.Router()
const {getGoals} = require('../controllers/goalController')

router.get('/', getGoals)

router.post('/', (req,res)=>{
    
})

router.put('/:id', (req,res)=>{
    
})

router.delete('/:id', (req,res)=>{
    res.status(200).json({message:`delete goal ${req.params.id}`})
})

module.exports=router