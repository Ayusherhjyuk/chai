"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'




const Navbar = () => {

  const [showdropdown, setshowdropdown] = useState(false)
  const { data: session } = useSession()

  const [showdropdown1, setshowdropdown1] = useState(false)
  

  // if (session) {
  //   return <>
  //     Signed in as {session.user.email} <br />
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }

  return (

    <nav className='flex h-14 bg-slate-900 text-cyan-50 p-4 justify-between'>
      <Link className='logo font-bold size-5' href={"/"}> CupofChai!
      
      </Link>

      
      <div className='navbar'>
        {/* <ul className='flex gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Sign-up</li>
                <li>Login</li>
            </ul> */}

        <div className='relative woutres'>
          {session && <>
            <button onClick={() => setshowdropdown(!showdropdown)}  id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none relative bottom-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex right-2 items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email}<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>


            <div id="dropdown" className={`z-10 ${showdropdown ? "" : "hidden"}  absolute left-32 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your page </Link>
                </li>
                
                <li>
                  <Link onClick={()=>signOut()} href="#" className="  block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                </li>
              </ul>
            </div>
          
        </>
}

       

        {session && <Link href={"/logout"}>
          <button onClick={()=>signOut()} type="button" className="  relative bottom-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Logout</button></Link>}

         

        {!session && <Link href={"/login"}>
          <button type="button" className=" relative bottom-2 text-white bg-gradient-to-br  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  hover:text-[17px]  px-5 py-2.5 text-center me-2 mb-2" >Login</button></Link>}


          {!session && <Link href={"/signup"}>
          <button type="button" className=" relative bottom-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Sign up</button></Link>}
      </div>
</div>

<div className='  hamclo flex  flex-row-reverse '>
<button onClick={() => setshowdropdown1(!showdropdown1)} id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification" className="relative inline-flex text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400" type="button">
<Image className=' relative  hamburger  size-8' src='/hamburger.png' alt='' width={1000} height={1000}></Image>


</button>


<div  id="dropdownNotification" className={`  bg-white z-20 relative ${showdropdown1 ? "" : "hidden"}   w-full max-w-sm bg-black divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700`} aria-labelledby="dropdownNotificationButton">
 
  <div className=" noticard  h-[340px] overflow-scroll     divide-y divide-gray-100 dark:divide-gray-700">


  <div className='noticardsub  relative top-36  h-16 flex flex-col  justify-center items-center gap-6'>



  {!session && <Link href={"/login"}>
          <button type="button" className=" relative  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg  hover:text-[17px]  px-5 py-2.5 text-center me-2 mb-2" >Login</button></Link>}
   
   
  {!session && <Link href={"/signup"}>
          <button type="button" className=" relative  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg  hover:text-[17px]  px-5 py-2.5 text-center me-2 mb-2" >SignUp</button></Link>}

    
          {session && <Link href={"/dashboard"}>
          <button type="button" className=" relative  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg  hover:text-[17px]  px-5 py-2.5 text-center me-2 mb-2" >Dashboard</button></Link>}

              
  {session && <Link href={`/${session.user.name}`}>
          <button type="button" className=" relative  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg  hover:text-[17px]  px-5 py-2.5 text-center me-2 mb-2" >Your Page</button></Link>}
          

          {session && <Link href={"/logout"}>
          <button onClick={()=>signOut()} type="button" className="  relative bottom-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Logout</button></Link>}

          

 


    


 
















  

  </div>
  
  
    
  </div>
  
</div>

</div>
    </nav>
  )
}

export default Navbar