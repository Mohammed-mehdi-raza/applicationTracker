import {asyncError, errorHandeler} from "../../../../middleware/error";
import {Application} from "../../../../models/application";
import { connectDB } from "../../../../utils/features";

const handeler = asyncError(async(req,res)=>{
    if(req.method !== "POST"){
        return errorHandeler(res,201,"only post method is allowed");
    }
    const id = req.query.id;
    const {Name,Role,Location,CTC,Status} = req.body;
    
    if(!Name || !Role || !Location || !CTC || !Status){
        return errorHandeler(res,201,"Enter all fields");
    }
    await connectDB();
    const ne=await Application.create({
        Name,
        Role,
        Location,
        CTC,
        Status,
        CreatedBy:id
    });
    res.status(200).json({
        success:true,
        message:"Application added Succesfully",
        ne
    })
})

export default handeler;