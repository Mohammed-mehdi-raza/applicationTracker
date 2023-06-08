import { asyncError, errorHandeler } from "../../../middleware/error";
import { Application } from "../../../models/application";
import { connectDB } from "../../../utils/features";

const handeler = asyncError(async(req,res)=>{
    const id = req.query.id;
    const page = req.query.page;
    const LIMIT = 5;
    const startIndex=(Number(page)-1)*LIMIT;

    await connectDB();

    if(req.method === "GET"){
        const applications = await Application.find({CreatedBy:id}).sort({CreatedAt:-1}).limit(LIMIT).skip(startIndex);
        let total = applications.length;
        res.status(200).json({
            success:true,
            applications,
            totalPage:Math.ceil(total/LIMIT),
        })
    }else if(req.method === "POST"){
        let {Category , Search} =req.body;
        if(!Category || !Search){
            return errorHandeler(res,201,"All fields are required");
        }
        if(Category === "CTC"){
            Search = Number(Search); 
        }
        const app = await Application.find({CreatedBy:id,[Category]:Search}).sort({CreatedAt:-1}).limit(LIMIT).skip(startIndex);
        let total = app.length;
        res.status(200).json({
            success:true,
            app,
            totalPage:Math.ceil(total/LIMIT),
        })
    }else{
        return errorHandeler(res,200,"only get and post method is allowed");
    }

});

export default handeler;