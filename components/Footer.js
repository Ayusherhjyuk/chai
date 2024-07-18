import React from 'react'
<link rel="stylesheet" href="style.css" />

const Footer = () => {

const currentyear= new Date().getFullYear();

  return (
    <footer className='bg-slate-900 text-cyan-50 flex copy items-center justify-center px-4 h-10' > 
        <p>Copyright&copy; {currentyear} Cup-of-Chai-- All Copyrights reserved</p></footer>
  )
}


export default Footer