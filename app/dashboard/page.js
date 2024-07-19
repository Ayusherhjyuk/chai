"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Image from 'next/image';


const Dashboard = () => {

  const [user, setUser] = useState({
    phone: '',
    work: '',
    paymentlink: '',
  });
    const { data: session } = useSession()
    const router =useRouter()
    useEffect(() => {
    // Redirect to dashboard if user is authenticated
    if (!session) {
      router.push('/login');
    }
  }, [session, router]);
  
 

  useEffect(() =>{
    
      const initialUserState = {
    phone: localStorage.getItem('phone') || '',
    work: localStorage.getItem('work') || '',
    paymentlink: localStorage.getItem('paymentlink') || '',
  };

   
  setUser(initialUserState);
}, []);




  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // Store each input value in localStorage
    localStorage.setItem(name, value);
  };
 
  const handlesubmit = async (e) => {
    e.preventDefault();
    
      // Accessing form data from state
      const {  phone,  work, paymentlink} =  user;
  
      const res = await fetch("api/userdetail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        
          phone,
          work,
          paymentlink
        }),
      });

      
      const data = await res.json();
      
      if (res.status == 422  || !data) {
        window.alert("fill all fields");
      } else {
        window.alert("Query submitted");

        console.log(data);
        
      }
  

    };


  return (
   < div className=''>
     
<form  className=' flex  dashpage ' >
  <div className=' bg-slate-950  pt-24 w-[40%] dashleft h-[650px] flex flex-col items-center gap-7'><h1 className='dashtit text-yellow-50  text-6xl  font-bold'> Your Dashboard</h1>
  <div className=' '><Image src="/dashboard.png" alt=""  height={1000} width={1000}></Image></div></div>
    <div className="flex flex-col gap-6  mb-[4rem] w-[60%] dashright  justify-center items-center relative right-[100px] ">

        
       {session && <>
        <div>
            <label htmlFor="name" id='name'  className=" dashleb block mb-2 red-sm font-medium relative right-8  to-red-900 dark:red-black
            ">Username</label>
            <input type="red" id="UserName" className="dash bg-gray-900 border border-gray-300 red-gray-900 red-sm rounded-lg relative right-8 focus:ring-blue-500 focus:border-blue-500 block w-[200%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:red-black
             dark:focus:ring-blue-500 text-white dark:focus:border-blue-500"  required value={session.user.name}
             disabled ></input>
        </div> </> }
       <div>
            <label htmlFor="phone" className=" dashleb block mb-2 red-sm font-medium relative right-8 red-gray-900 dark:red-black
            ">Phone number</label>
            <input type="tel" onChange={handleInput} value={user.phone} name="phone" id="phone" className="dash bg-gray-900 border border-gray-300 red-gray-900 red-sm rounded-lg relative right-8 focus:ring-blue-500 focus:border-blue-500 block w-[200%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:red-black
             dark:focus:ring-blue-500 text-white dark:focus:border-blue-500"  required   />
        </div>
         {session && <>
    <div className="mb-6">
        <label htmlFor="email" id='email'  className=" dashleb block mb-2 red-sm font-medium relative right-8 red-gray-900 dark:red-black
        ">Email</label>
        <input type="email" id="email" className="dash bg-gray-900 border border-gray-300 red-gray-900 red-sm rounded-lg relative right-8 focus:ring-blue-500 focus:border-blue-500 block w-[200%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:red-black
         dark:focus:ring-blue-500 text-white dark:focus:border-blue-500"  required value={session.user.email}
         disabled ></input>
    </div> </>
}
        <div>
            <label htmlFor="company" className=" dashleb block mb-2 red-sm font-medium relative right-8 red-gray-900 dark:red-black
            ">Work</label>
            <input type="red" onChange={handleInput} value={user.work} name="work" id="work" className="dash bg-gray-900 border border-gray-300 red-gray-900 red-sm rounded-lg relative right-8 focus:ring-blue-500 focus:border-blue-500 block w-[200%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:red-black
             dark:focus:ring-blue-500 text-white dark:focus:border-blue-500"  required  />
        </div>  
        
     
    

        
    
    
    <button type="submit" onClick={handlesubmit} className="red-black dash dashsub left-14
     bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-lg relative right-8 red-sm w-[100%] sm:w-auto px-5 py-2.5 red-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>    </div>
</form> </div>


  
  )
}

export default Dashboard