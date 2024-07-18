import connectDb from "@/app/db/connectDb";
import User from "@/models/User";



export async function POST(req) {
    try {
        
        await connectDb();
        const {email}= await req.json();
        await User.findOne({ email }).select("_id");

    } catch (error) {
        
    }
}