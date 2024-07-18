
import connectDb from '@/app/db/connectDb';
import { NextResponse } from 'next/server';
import User from '@/models/User';






export async function POST(req) {

     const { name, email, phone,  password, confpassword } = await req.json();

      await connectDb();

    if (!name || !email || !phone  || !password || !confpassword) {
      return new NextResponse(JSON.stringify({ message: "plz fill the field properly" }), { status: 422 });

    }
   
    const userexist = await User.findOne({ email: email });
         if (userexist) {
          return new NextResponse(JSON.stringify({ message: "Email already registered" }), { status: 400 });

    }
    else if(password != confpassword){
      return new NextResponse(JSON.stringify({ message: "password do not match" }) );

    }
    else{
         const user= new User({name, email, phone,  password, confpassword});

    await user.save();
    
    return new NextResponse(JSON.stringify({ message: "User registered successfully" }), { status: 200 });

    }


  
    
    }