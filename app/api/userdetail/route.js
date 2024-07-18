import connectDb from '@/app/db/connectDb';
import { NextResponse } from 'next/server';
import Userdetail from '@/models/Userdetail';





export async function POST(req) {

     const {   phone, work,paymentlink } = await req.json();

      await connectDb();

    if ( !phone  || !work ||  !paymentlink) {
      return new NextResponse(JSON.stringify({ message: "plz fill the field properly" }), { status: 422 });

    }
   
         const user= new Userdetail({ phone, work,paymentlink});

    await user.save();
    
    return new NextResponse(JSON.stringify({ message: "query submitted" }), { status: 200 });

    


  
    
    }