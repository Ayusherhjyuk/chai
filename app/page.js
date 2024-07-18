import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authoptions } from "./api/auth/[...nextauth]/route";



export default async function Home() {

   const session= await getServerSession(authoptions);

//    if(session){
//     redirect("/dashboard");
//    }



  return (
     <>
 
     <div className=" flex flex-col text-black justify-center items-center h-[80vh] gap-3">
      <div className=" page1text font-bold text-7xl">Fund your creative work</div>
      <p className="text-4xl  p1subti">A crowdfunding platform for creators.</p>
     <p className="text-3xl  p1subti"> Get funded by your well wishers!</p>
      

        
<div className=" relative top-7">

{session && <>
        <Link href={"/login"}>
      <button type="button" className="text-white bg-gradient-to-br w-42 h-16 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  text-2xl px-7 py-4 text-center me-4 mb-4 animate-bounce">Start my page</button></Link>
    </>
}   
{!session && <>
        <Link href={"/dashboard"}>
      <button type="button" className="text-white bg-gradient-to-br w-42 h-16 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  text-2xl px-7 py-4 text-center me-4 mb-4 animate-bounce">Start my page</button></Link>
    </>
}
    
     </div>
          <p className=" text-lg relative top-3 animate-pulse">It’s free and takes less than a minute!</p>
</div>
<div className="bg-black h-1 opacity-10"></div>







{/* ---------------------------------------------------------------------------------------------------------------- */}
<div className=" flex flex-col gap-7">

<div className="p1card1 mx-auto flex flex-col border relative   pt-7  rounded-3xl text-black bg-slate-100  w-[70vw] items-center h-[90vh] gap-4">

      <div className=" p1heads text-5xl font-bold ">Give your audience</div>
     <div className=" p1heads text-5xl font-bold"> an easy way to say thanks.</div>
<div className=" mx-auto   items-center flex flex-col ">
     <div className="text-xl  mx-auto  font-bold">Buy Me a Chai makes supporting fun and easy. In just a couple of taps, your fans</div>
     <div className="text-xl  font-bold">can make the payment (buy you a chai) and leave a message.</div>
  </div>
  
  <div className=" h-[280px]">
    

<div class="max-w-sm flex   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
    <div class="p-5 flex flex-col gap-[10px]">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Buy Juliet a chai</h5>
        </a>
  <div className="flex bg-red-300 h-14  justify-around items-center border rounded-xl ">
    <div className="font-bold">chai</div>
    <div className="flex gap-5  justify-center ">
      <div className=" bg-white  rounded-[30px] text-black  w-8 h-9 justify-center  flex items-center">1</div>
    <div className="  bg-red-700 rounded-[30px] text-cyan-50 w-8 h-9 justify-center  flex items-center">3</div>
    <div className=" bg-white rounded-[30px]  w-8 h-9 justify-center text-black flex items-center">5</div>
    </div>

  </div>



        <p class="mb-3 font-normal   text-gray-700 dark:text-gray-400"><input className="h-12   placeholder-shown:border-lime-950  bg-slate-200" type="text" placeholder="leave a message"></input></p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  justify-center">
            Support $3
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
    
</div>
<div className=" relative  bottom-64 right-7">
  <script src="https://cdn.lordicon.com/lordicon.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/ohfmmfhn.json"
    trigger="loop"
   >
</lord-icon>
</div>
<div className=" relative  bottom-64 left-[260px]">
<script src="https://cdn.lordicon.com/lordicon.js"></script>
<lord-icon 
    src="https://cdn.lordicon.com/jtiihjyw.json"
    trigger="loop"
   >
</lord-icon></div>




<div className="flex comment1 relative bottom-64 left-[250px] gap-3 bg-slate-200 w-[200px] border rounded-xl font-bold pt-3 mt-2 pb-3 ">
<div>
<img className='rounded-full'  width={30} height={30} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png " alt="" /></div>
<div>Anie bought 5 chai</div>


</div>


<div className="flex comment2 relative bottom-64 right-[186px] gap-3 bg-slate-200 w-[200px] border rounded-xl font-bold pt-3 mt-2 pb-3 ">
<div>
<img className='rounded-full'  width={30} height={30} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png " alt="" /></div>
<div>Alex bought 25 chai</div>


</div>
  </div>
  </div>


{/* ---------------------------------------------------------------------------------------- */}

  <div className="p1card2 mx-auto flex flex-col border relative right-24  pt-7  rounded-3xl text-black bg-slate-100  w-[70vw] items-center h-[105vh] gap-4">

<div className="text-5xl p1heads font-bold">Publish your best work</div>

<div className="    items-center flex flex-col ">
<div className="text-xl mx-auto   font-bold">Buy Me a Chai makes it easy to publish free and exclusive content. Try different</div>
<div className="text-xl font-bold">formats such as audio, and make it members-only to drive more memberships.</div>
</div>

<div className="  w-[60vw] border rounded-3xl ">

<img  src="https://cdn.buymeacoffee.com/assets/img/homepage/images/posts_v8.png"></img>


</div>
</div>


{/* ------------------------------------------------------------------------------------------------- */}





<div className="p1card3 mx-auto flex flex-col border  pt-7  relative left-32 rounded-3xl text-black bg-slate-100  w-[70vw] items-center h-[90vh] gap-4">

<div className="text-5xl p1heads font-bold">Impress with your Creativity</div>

<div className="    items-center flex flex-col">
<div className="text-xl mx-auto   font-bold">Brewing chai is like crafting a masterpiece,blending spices</div>
<div className="text-xl font-bold"> to create a symphony of flavor.</div>
</div>

<div className=" flex gap-5  ">
  <div>
<iframe src="https://giphy.com/embed/DouV1xmixxDc3nQKeA" width="350" height="350"  className="border rounded-2xl" class="giphy-embed" ></iframe></div>


</div>
</div>


</div>


{/* --------------------------------------------------------------------------------------------------- */}
<div className="p1card4 mx-auto flex flex-col  pt-7   text-black   w-[70vw] items-center h-[90vh] gap-4">

<div className="text-5xl p1heads font-bold">Empowering creators</div>
<div className="text-5xl p1heads font-bold"> to shape their own narratives.</div>


<div className=" flex flex-col gap-6 relative top-12">

<div className=" flex star ">


<div className=" star1 w-[40vw]">
<figure class="max-w-screen-md">
    <div class="flex items-center mb-4 text-yellow-300">
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
    </div>
    <blockquote>
        <p class="text-2xl font-semibold text-gray-900 dark:text-white">"We don't call them "customers" or transactions. They are your supporters."</p>
    </blockquote>
   
</figure>
</div>




<div className=" w-[32vw]">
<figure class="max-w-screen-md">
    <div class="flex items-center mb-4 text-yellow-300">
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
    </div>
    <blockquote>
        <p class="text-2xl font-semibold text-gray-900 dark:text-white">"You get to talk to a human for help, or if you just like some advice to hit the ground running.."</p>
    </blockquote>
   
</figure>
</div>



</div>








<div className=" flex  star  ">


<div className=" w-[40vw]">
<figure class="max-w-screen-md">
    <div class="flex items-center mb-4 text-yellow-300">
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
    </div>
    <blockquote>
        <p class="text-2xl font-semibold text-gray-900 dark:text-white">"You have 100% ownership of your supporters. We never email them, and you can export the list any time you like."</p>
    </blockquote>
   
</figure>
</div>




<div className=" w-[40vw]">
<figure class="max-w-screen-md">
    <div class="flex items-center mb-4 text-yellow-300">
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
    </div>
    <blockquote>
        <p class="text-2xl font-semibold text-gray-900 dark:text-white">"You get paid instantly to your bank account. No more 30-day delays."</p>
    </blockquote>
   
</figure>
</div>






</div>

</div>





</div>



   


     </>
  );
}
