const express=require("express")
const app=express()
const port=process.env.PORT|| 3000;
const mongoose=require("mongoose")
const routes=require('./routes/main')
const  Slider=require("./models/Sliders")
const Service=require("./models/Service")
// requiring body parser
const bodyParser=require('body-parser')
// getting hbs
const hbs=require("hbs")
const Detail=require("./models/Detail")
app.use(bodyParser.urlencoded({
    extended:true
}))
// to use static sites in our projects

app.use( '/static',express.static("public"))
app.use('',routes)


// configuring templates engine
app.set('view engine','hbs')
app.set('views',"views")
// registering partials
hbs.registerPartials('views/partials')


// db connections

// creating database 

mongoose.connect("mongodb://127.0.0.1:27017/website_tut", { useNewUrlParser: true,
 useUnifiedTopology: true,
 }).then(()=>{
    console.log("connection is succesful")
 }).catch((e)=>{
console.log("NO connection")
 })




// creating service
// one time data creation

// Service.create([
//     {
//         icon:'fab fa-accusoft',
//         title:'Provide Best Courses',
//         description:'We provide courses that help nobody but enrices our pockets',
//         linkText:'www.google.com',
//         link:'Check'
//     },
//     {
//         icon:'fab fa-affiliatetheme',
//         title:'learn Courses',
//         description:'We provide courses that help nobody but enrices our pockets',
//         linkText:'www.google.com',
//         link:'Learn'
//     },
//     {
//         icon:'fab fa-affiliatetheme',
//         title:'learn Courses',
//         description:'We provide courses that help nobody but enrices our pockets',
//         linkText:'www.google.com',
//         link:'Learn'
//     }
// ])


// creating slider
//we just want to create datas in mongo so we want to execute this code just for once
// Slider.create([
//     {
//         title:'Hello mommy',
//         subTitle:'Node Js ex',
//         imageUrl:'/static/images/slider1.jpg'

//     },
//     {
//         title:'Hello mommy 2',
//         subTitle:'Node Js ex 2',
//         imageUrl:'/static/images/slider2.jpg'

//     },
//     {
//         title:'Hello mommy 3',
//         subTitle:'Node Js ex 3',
//         imageUrl:'/static/images/slider3.jpg'

//     }
// ])



//we just want to create datas in mongo so we want to execute this code just for once
//  Detail.create({
//     brandName: "Info tech",
//     brandIconUrl:"https://yt3.googleusercontent.com/h5GQrHvmmOeneN9Wa7RlEBz8ADQwhQu7TsOX1NNRiFgfrVmAwYWxu5kCrdWowJV5sHd5SpizPf4=s176-c-k-c0x00ffffff-no-rj",
//     links:[
//         {
//             label:"Home",
//             url:'/'
//         },
//         {
//             label:"Services",
//             url:"/services"
//         },
//         {
//             label:"Gallery",
//             url:"/gallery"
//         },
//         {
//             label:"About",
//             url:"/about"
//         },
//         {
//             label:"Contact Us",
//             url:"/contact-us"
//         },
        
//     ]

// })


app.listen(port,()=>{
    console.log(`Server is running at port no ${port}`);
})