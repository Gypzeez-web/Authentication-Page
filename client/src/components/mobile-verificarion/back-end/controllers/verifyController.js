const client=require('twilio')(process.env.ACCOUNT_SID,process.env.AUTH_TOKEN);

exports.getCode=async(req,res)=>{
    client.verify.services(process.env.VERIFY_SERVICE_SID).verifications.create({
        to:`+${req.quary.phonenumber}`,
        channel:req.quary.channel
    }).then(data=>{
        res.status(200).send(data);
    })
};

exports.verifyCode=async(req,res)=>{
    client.verify.services(process.env.VERIFY_SERVICE_SID).verificationChecks.create({
        to:`+${req.quary.phonenumber}`,
        code:req.quary.code
    }).then(data=>{
        res.status(200).send(data);
    })
}