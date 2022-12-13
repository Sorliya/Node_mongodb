const express=require('express')
const router=express.Router()

router.get('/', (req,res)=>{
    
})

router.post('/', (req,res)=>{
    res.status(200).json({message:'set goal'})
})

router.put('/:id', (req,res)=>{
    res.status(200).json({message:`update goal ${req.params.id}`})
})

router.delete('/:id', (req,res)=>{
    res.status(200).json({message:`delete goal ${req.params.id}`})
})

module.exports=router