import connectDb from '@/app/db/connectDb';
import { NextResponse } from 'next/server';
import support from '@/models/support';





export async function POST(req) {

     const {   name, message, amount } = await req.json();

      await connectDb();

    if ( !name  || !message ||  !amount) {
      return new NextResponse(JSON.stringify({ message: "plz fill the field properly" }), { status: 422 });

    }
   
         const user= new support({ name, message, amount});

    await user.save();
    
    return new NextResponse(JSON.stringify({ message: "query submitted" }), { status: 200 });

    


  
    
    }