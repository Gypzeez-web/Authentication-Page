const mongoose=require('mongoose')

const connectDB=async()=>{
    const connection=await mongoose.connect(process.env.MONGO_URL,{
        useNewUserParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useFindTopology:false
    })

    console.log('MongoDB Connected')
}

module.exports=connectDB