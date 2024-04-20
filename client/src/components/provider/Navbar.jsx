import React from 'react'
import {FaBars} from 'react-icons/fa'
import {GrClose} from 'react-icons/gr'


function Navbar({open,setOpen}) {
  
  return (
    <div className='flex  md:px-8 px-4 text-white justify-between w-full py-3 items-center fixed top-0 z-10' style={{ background: '#3c8dbc' }}>
      <div className='flex items-center gap-2'>
        <img src="https://i.postimg.cc/GhtrVGrW/logo1.png" style={{width:'100px', height:'45px', marginTop:'-10px', marginBottom:'-10px'}} alt='logo' className='h-8'/>
        <h1 className='font-semibold text--2xl'>Tailor DashBoard</h1>
      </div>
      <div className='md:hidden flex items-center bg-white text-teal-500 font-semibold px-2 py-1'>
        <button onClick={()=> setOpen(!open)}>
          {open?<GrClose className='text-teal-500'/>:<FaBars />}
        </button>
      </div>
    </div>
  )
}

export default Navbar
