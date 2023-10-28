const express=require('express')
const {route}=require('express/lib/application')
const routes=express.Router()
const Detail = require('../models/Detail')
const Sliders = require('../models/Sliders')
const Contact=require("../models/Contact")

const Service = require('../models/Service')
 


routes.get("/", async(req,res)=>{
    //Now fetching the data form Mongo
 const details =  await Detail.findOne({"_id" : "64eb5af36404043b627d7901"})
//   console.log(details);
const slides= await Sliders.find()
// console.log(slides);
const services=await Service.find();

     res.render("index",{
        details:details,
        slides:slides,
        services:services
     })
})
 
// making gallery routes
routes.get("/gallery",async(req,res)=>{
    const details =  await Detail.findOne({"_id" : "64eb5af36404043b627d7901"})
    res.render("gallery",{
        details:details
        
    })
})

// making contatc form routes
// proceess contact form
routes.post("/process-contact-form",async(request,response)=>{
    console.log("This form is submitted");
    console.log(request.body);
     //  -->data send thorugh form comes here 

    // to parse data we use body parser module so that jo data araha hai wo as it is json mai mill jye 
    // body parser ek middleware ki trh use hoga


// saving the data to db

    
    //saving the data in mongodb
    try{

        const data =await Contact.create(request.body);
        console.log(data);
        response.redirect('/')

    }catch(err){
        console.log(err);
        response.redirect('/')
    }

})


module.exports=routes