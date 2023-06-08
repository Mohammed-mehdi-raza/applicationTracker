import { asyncError, errorHandeler } from "../../../middleware/error";
import { User } from "../../../models/user";
import { connectDB , generateToken , cookieSetter } from "../../../utils/features";
import bcrypt from "bcrypt";

const handeler=asyncError(async(req,res)=>{
    if(req.method !== "POST"){
        return errorHandeler(res,200,"only post method is allowed");
    }

    const {email,password} = req.body;

    if(!email || !password ){
        return errorHandeler(res,200,"please enter all fields");
    }
    await connectDB();

    let user = await User.findOne({email}).select("+password");

    if(!user){
        return errorHandeler(res,200,"user not found");
    }

    const isMatching = await bcrypt.compare(password,user.password);

    if(!isMatching){
        return errorHandeler(res,200,"Invalid password");
    }

    const token = generateToken(user._id);
    cookieSetter(res,token,true);

    res.status(200).json({
        success:true,
        message:`welcome back ${user.firstName}`,
        user,
    })
});

export default handeler;