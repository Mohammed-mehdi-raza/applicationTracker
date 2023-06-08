import { asyncError, errorHandeler } from "../../../middleware/error";
import { User } from "../../../models/user";
import { connectDB , generateToken , cookieSetter } from "../../../utils/features";
import bcrypt from "bcrypt";

const handeler=asyncError(async(req,res)=>{
    if(req.method !== "POST"){
        return errorHandeler(res,201,"only post method is allowed");
    }

    const {firstName,lastName,email,password} = req.body;

    if(!firstName || !lastName || !email || !password ){
        return errorHandeler(res,201,"please enter all fields");
    }

    await connectDB();

    let user = await User.findOne({email}).select("+password");

    if(user){
        return errorHandeler(res,201,"user already exist");
    }

    const hashed = await bcrypt.hash(password,10);

    user = await User.create({
        firstName,
        lastName,
        email,
        password:hashed,
    });

    const token = generateToken(user._id);
    cookieSetter(res,token,true);

    res.status(200).json({
        success:true,
        message:`welcome back ${user.firstName}`,
        user,
    })
});

export default handeler;