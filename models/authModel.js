const mongoose=require('mongoose')
const crypto=require('crypto')

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        lowercase:true
    },
    name:{
        type:String,
        trim:true,
        required:true,
    },
    h_password:{
        type:String,
        required:true,
    },
    salt:String,
    role:{
        type:String,
        default:"user"//admin/user
    },
    resetPasswordLink:{
        data:'String',
        default:''
    }
},{
    timestamps:true
})


//virtual Password
userSchema.virtual('password').set(
    function(password){
        this.password=password
        this.salt=this.makeSalt()
        this.h_password=this.encryptPassword(password)
    }
).get(
    function (){
        return this._password
    }
)

//methods

userSchema.methods={
    //generate salt
    makeSalt:function(){
        return Math.rounded(new Date().valueOf()*Math.random())+''
    },
    encryptPassword:function(password){
        if(!password)return '';
        try{
            return crypto.createHmac('sha1',this.salt).
            update(password).
            digest('hex');
        }catch(err){
            return '';
        }
    },
    //compare password
    authenticate:function(plainPassword){
        return this.encryptPassword(plainPassword)===this.h_password
    }
}

module.exports=mongoose.model('User',userSchema)