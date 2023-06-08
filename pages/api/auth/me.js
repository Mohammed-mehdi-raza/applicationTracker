import { asyncError, errorHandeler } from "../../../middleware/error";
import { checkAuth, connectDB } from "../../../utils/features";


const handeler=asyncError(async(req,res)=>{
    if(req.method !== "GET"){
        return errorHandeler(res,201,"only Get method is allowed");
    }

    await connectDB();

    const user = await checkAuth(req);

    if(!user){
        return errorHandeler(res,201,"Login First");
    }

    res.json({
        success:true,
        user
    })

    
});

export default handeler;