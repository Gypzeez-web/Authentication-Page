const express=require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const cors=require('cors');
const connectDB=require('./config/db.js');


const app=express();


require('dotenv').config({
    path:'./config/config.env'
});

//connect DB
connectDB()



//use bodyParser

app.use(bodyParser.json())



if(process.env.NODE_ENV==='development'){
    app.use(cors({
        origin:process.env.CLIENT_URL
    }))

    app.use(morgan('dev'))
    //cors allow to deal with react for localhost at port 3000
    //mogan gives information about each request
}

//load all routes
const authRouter=require('./routes/authRoutes.js')

//use routes
app.use('/api/',authRouter);

app.use((req,res,next)=>{
    res.status(404).json({
        success:false,
        message:"Page Not Found"
    })
})

const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log('Work on port',PORT);
});
