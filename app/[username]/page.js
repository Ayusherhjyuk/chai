"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { 
  FacebookShareButton, 
  FacebookIcon, 
  PinterestShareButton, 
  PinterestIcon, 
  InstagramIcon,
  RedditShareButton, 
  RedditIcon, 
  WhatsappShareButton, 
  WhatsappIcon, 
  LinkedinShareButton, 
  LinkedinIcon, 
} from 'next-share'; 
  


const Username = ({ params }) => {


  const { data: session } = useSession()
  const router =useRouter()
  useEffect(() => {
  // Redirect to dashboard if user is authenticated
  if (!session) {
    router.push('/login');
  }
}, [session, router]);

  const [imagePreview, setImagePreview] = useState(() => {
    // Retrieve image preview from localStorage if available
    return localStorage.getItem('imagePreview') || null;
  });


  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file

    if (file) {
      const reader = new FileReader(); // Create a FileReader object

      reader.onload = function (e) {
        const imageData = e.target.result; // Get the Data URL of the selected image
        localStorage.setItem('imagePreview', imageData); // Save the image preview in localStorage
        setImagePreview(imageData); // Update the image preview state
      };

      reader.readAsDataURL(file); // Read the selected file as a Data URL (base64 encoded)
    }
  };

  const handleResetImage = () => {
    localStorage.removeItem('imagePreview'); // Remove image preview from localStorage
    setImagePreview(null); // Clear image preview state
  };

  useEffect(() => {
    const fileInput = document.getElementById('dropzone-file');

    const handleChange = () => {
      const file = fileInput.files[0]; // Get the selected file from input

      if (file) {
        const reader = new FileReader(); // Create a FileReader object

        reader.onload = function (e) {
          const imagePreviewElement = document.getElementById('image-preview');
          imagePreviewElement.src = e.target.result; // Set the image source to the FileReader result
          document.getElementById('image-preview-container').classList.remove('hidden'); // Show the image preview container
        };

        reader.readAsDataURL(file); // Read the selected file as a Data URL (base64 encoded)
      }

      localStorage.removeItem('imagePreview'); // Remove previous image preview from localStorage
    };

    if (fileInput) {
      fileInput.addEventListener('change', handleChange);

      return () => {
        fileInput.removeEventListener('change', handleChange); // Cleanup: remove event listener
      };
    }
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  const handleResetTextHover = () => {
    const resetText = document.getElementById('reset-text');
    resetText.classList.remove('hidden');
  };

  const handleResetTextLeave = () => {
    const resetText = document.getElementById('reset-text');
    resetText.classList.add('hidden');
  };








  const [user,setuser]=useState({
    name:"",amount:"",message:"",
  })


    let name,value;
  
    const handleInput =(e)=>{
    console.log(e)
    name=e.target.name;
    value=e.target.value;
  
    setuser({...user,[name]:value});
    }

  const handlesubmit = async (e) => {
    e.preventDefault();
    
      // Accessing form data from state
      const { name, amount, message} =  user;
  
      const res = await fetch("api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          amount,
          message,
        }),
        
      });
  
      const data = await res.json();
  
      if (res.status == 422  || !data) {
        window.alert("fill all fields");
      } else {
        window.alert("Query sunmitted");

        console.log(data);
        window.location.href = 'https://rzp.io/l/MN4FhoR';
        
      }
  

}


const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/supportlist')
          .then(response => {
            console.log("Users from API:", response.data);
            setUsers(response.data);
          })
          .catch(error => console.error(error));
      }, []);

      
      document.addEventListener('DOMContentLoaded', function() {
        const workTextarea = document.getElementById('work');
        const savedContent = localStorage.getItem('workContent');
      
        if (savedContent) {
          workTextarea.value = savedContent; // Set the textarea value to the stored content
        }
      
        // Save the textarea content to localStorage when it changes
        workTextarea.addEventListener('input', function() {
          localStorage.setItem('workContent', this.value);
        });
      });

      const [workContent, setWorkContent] = useState('');

  useEffect(() => {
    // Retrieve stored content on component mount
    const savedContent = localStorage.getItem('workContent');
    if (savedContent) {
      setWorkContent(savedContent);
    }
  }, []); // Empty dependency array ensures this effect runs only once

  const handleInputChange = (event) => {
    const { value } = event.target;
    setWorkContent(value);
    localStorage.setItem('workContent', value); // Update localStorage
  };
     

  return (
    <>
      <div className='cover w-full bg-red-50 relative'>
        {!imagePreview && (
          <div className="flex items-center justify-center w-screen h-[400px]">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
            </label>
          </div>
        )}
        {imagePreview && (
          <div
            id="image-preview-container"
            className="flex justify-center relative"
            onMouseEnter={handleResetTextHover}
            onMouseLeave={handleResetTextLeave}
          >
            <div className="w-screen h-[400px] relative">
              <Image 
                src={imagePreview}
                id="image-preview"
                className="w-full h-full "
                alt="Uploaded Image Preview"
                height={1000}
                width={1000}
              ></Image>
              <span
                id="reset-text"
                className="absolute bottom-2 right-2 bg-white bg-opacity-50 text-gray-800 text-xs px-2 py-1 rounded cursor-pointer hidden"
                onClick={handleResetImage}
              >
                Reset Image
              </span>
            </div>
          </div>
        )}
      </div>

      <div className='propi absolute right-[48%] top-[68.5%] '>
        <Image className='rounded-full' width={60} height={60} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" ></Image>
      </div>

      <div className="info flex justify-center flex-col items-center my-9">
      <div className='font-bold'>@{decodeURIComponent(params.username)}</div>

        <div className='text-slate-500'>Creating animated arts</div>


      </div>


  




    

      <div className="payment flex relative left-12 gap-3 w-[90%]">
        
        <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-4">
          <div>
          <label htmlFor="work" className="block mb-2 text-lg font-medium text-gray-100 dark:text-white">WORK</label>
      <textarea
        id="work"
        name="work"
        rows="4"
        className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your work here..."
        value={workContent}
        onChange={handleInputChange}
      />

        </div>
          <h2 className='text-lg font-bold my-5 '>Supporters</h2>
          <ul>
{users.map((user, index) => ( 
          
            <li className='py-2 'key={index}>{user.name} donated {user.amount} Rs with a msg &quot;{user.message}&quot;</li>
            
        
))}
       </ul>   </div>

        <div className="makepayment w-1/2 bg-slate-900 rounded-lg text-white p-4">
          <h2 className='text-lg font-bold my-5 '>Make a payment</h2>
          <div className='flex flex-col gap-2 py-4 my-4 justify-center items-center'>
            <input type='text' value={user.name} onChange={handleInput} name="name" id="name" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name'></input>
            <input type='text' value={user.message} onChange={handleInput} name="message" id="message" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message'></input>
            <input type='text' value={user.amount} onChange={handleInput} name="amount" id="amount" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount'></input>
            <button onClick={handlesubmit} type="button" className="text-white bg-gradient-to-br w-28 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
          </div>
        </div>
      </div>

     
  <div className=' flex flex-col pt-5 pb-5  content-end flex-wrap relative right-[93px] '> 
       {session && <><h1 className=' text-[25px] font-bold'>Share Page</h1> 
      </> }
      <div>
      <FacebookShareButton 
        
        url={'http://localhost:3000'} > 
        <FacebookIcon size={36} round /> 
      </FacebookShareButton> 
      <WhatsappShareButton 
        
        url={'http://localhost:3000'} > 
        <WhatsappIcon size={36} round /> 
      </WhatsappShareButton>
      
      <PinterestShareButton 
        
        url={'http://localhost:3000'} > 
        <PinterestIcon size={36} round /> 
      </PinterestShareButton> 
      <RedditShareButton 
        
        url={'http://localhost:3000'} > 
        <RedditIcon size={36} round /> 
      </RedditShareButton> 
       
      <LinkedinShareButton 
        
        url={'http://localhost:3000'} > 
        <LinkedinIcon size={36} round /> 
      </LinkedinShareButton> 
    </div> 
    </div>
      <div className='bg-slate-600 w-full h-4'></div>
    </>
  );
};

export default Username;
