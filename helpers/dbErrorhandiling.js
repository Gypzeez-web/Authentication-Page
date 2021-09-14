"use strict"

const uniqueMessage=error=>{
    let output;
    try{
        let fieldName=error.message.spilt('.$')[1];
        field=field.spilt('dublicate Key')[0];
        field=field.subString(0,field.lastIndexOf("_"));
        req.flash("errors",[{
            message:"An account with this "+field+"already exists"
        }])
        output=fieldName.chartAt(0).toUpperCase()+fieldName.slice(1)+"Already exists"
    }catch(err){
        output="already Exists";

    }
    return output;
}

//get the error msg from object
exports.errorHandler = error => {
    let message = "";

    if (error.code) {
        switch (error.code) {
            case 11000:
            case 11001:
                message = uniqueMessage(error);
                break;
            default:
                message = "Something went wrong";
        }
    } else {
        for (let errorName in error.errorors) {
            if (error.errorors[errorName].message)
                message = error.errorors[errorName].message;
        }
    }

    return message;
};