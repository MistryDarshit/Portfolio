import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import {CiDark} from "react-icons/ci"

const Navbar = () => {
  const [sticky,setSticky] = useState(false)
  const [open,setOpen] = useState(false)
  const [darkMode , setDarkmode] = useState(true)
  const menuLinks = [
    {
      name : "HOME" , Link: "#home"
    },
    {
      name : "ABOUT" , Link: "#about"
    },
    {
      name : "SKILLS" , Link: "#skils"
    },
    {
      name : "PROJECTS" , Link: "#contect"
    },
  ]
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      const nav =document.querySelector("nav")
      window.scrollY > 0 ? setSticky(true) : setSticky(false)
    })
  })
  return (
    <>
    <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "md:bg-white/60 text-gray-900":"text-white"}`}>
      <div className='flex item-center justify-between'>
        <div className='mx-7 m-2'>
          <h4 className="text-4xl uppercase font-bold">
            DA<span className='text-cyan-600'>RS</span>HIT
          </h4>
        </div>
        <div className={` ${sticky ? 'md:bg-white/60 bg-white' : 'bg-white'} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}>
          <ul className='flex items-center gap-1 py-2 text-lg'>
            {menuLinks?.map((menu,i)=>(
                <li onClick={()=> setOpen(false)} key={i} className='px-6 hover:text-cyan-600'>
                  <a href={menu?.Link} > {menu?.name}</a>
                </li>
              ) ) }
              <li className='pr-3 font-medium  md:block hidden'> <CiDark/></li>
          </ul>
        </div>
        <div 
        onClick={() => setOpen(!open)}
        className={` z-[999] ${ open ? "text-gray-900" : "text-gray-100"} text-3xl  m-5  md:hidden `}> 
        <AiOutlineMenu/>
        </div>
        <div className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-semibold text-[20px] bg-white top-0 ${open ? "right-0" : "right-[-100%]"} `}>
          <ul className='flex flex-col justify-center h-full gap-1 py-2'>
            {
              menuLinks.map((menu,i)=> (
                <li key={i} className = "py-6 hover:text-cyan-600">
                  <a href={menu?.Link}>{menu?.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
    </>
)
}
export default Navbar
