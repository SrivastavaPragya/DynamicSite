const mongoose = require('mongoose')

const Sliders = mongoose.Schema({
    title:String,
    subTitle:String,
    imageUrl:String,
    class:String
})

module.exports = mongoose.model('slider',Sliders) //first is the name of router through which it is recognised by router