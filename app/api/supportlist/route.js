import { NextResponse } from "next/server";
import connectDb from "@/app/db/connectDb";
import support from "@/models/support";


export const GET = async (request)=> {
 try {
    await  connectDb();
    const tours= await support.find();
    return new NextResponse(JSON.stringify(tours),{ status: 200});

 } catch (error) {
    return new NextResponse("error in fetching users" + error,{status: 500});
 }
} 