import {asyncError, errorHandeler} from "../../../../middleware/error";
import {Application} from "../../../../models/application";
import { connectDB } from "../../../../utils/features";

const handeler = asyncError(async(req,res)=>{
    const applicationId = req.query.id;

    const application = Application.findById(applicationId);

    if(!application){
        return errorHandeler(res,200,"applicatin not found");
    }

    await connectDB();

    if(req.method === "PUT"){
        const {Name,Role,Location,CTC,Status} = req.body;
    
        if(!Name || !Role || !Location || !CTC || !Status){
            return errorHandeler(res,201,"Enter all fields");
        }

        await application.updateOne({Name,Role,Location,CTC,Status});

        res.status(200).json({
            success:true,
            message:"application updated succesfully",
        })

    }else if (req.method === "DELETE"){
        await application.deleteOne();
        res.status(200).json({
            success:true,
            message:"application deleted succesfully",
        })
    }else{
        return errorHandeler(res,201,"only put and delete method is allowed");
    }
})

export default handeler;