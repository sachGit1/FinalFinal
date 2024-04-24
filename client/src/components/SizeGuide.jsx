import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'



const SizeGuide = () => {
  return (
    <div>
    <div className='py-2 sm:px-8 px-2 shadow flex justify-between items-center' style={{backgroundColor:'#03254c'}}>
        <Link to="/" className='flex items-center'>
          <img src="https://i.postimg.cc/9fQC9hyz/tfhLogo.png" style={{width:'220px', height:'100px', marginTop:'-10px', marginBottom:'-10px'}} className='h-8 object-contain' alt="" />
          
        </Link>
        <Link to="/" className='flex items-center gap-2' style={{color:'white'}}>
          <BiArrowBack />
          <span>Back to home</span>
        </Link>
    </div> 
    <div>
      <h1 style={{color:'black', fontSize:'25px', textAlign:'center'}}><b>Guidance to get your measurements</b></h1>
      <p><br /></p>
      <p style={{fontFamily:'Candara, sans-serif', color:'black', textAlign:'center', fontSize:'16px'}}>
      Welcome to <b>Tailor Fit Hub!</b> - where precision meets perfection! <br/>
       At Tailor Fit Hub, we've revolutionized the way you shop for garments.<br/>
       No more guessing games or ill-fitting clothes - just expertly crafted pieces tailored to your unique measurements.<br/>
       Embrace confidence and comfort with every stitch as we redefine the art of personalized fashion.<br/> 
       Your dream wardrobe awaits, meticulously crafted and tailored just for you.
       <br/><br/><br/>
       </p>

       <img src="https://i.postimg.cc/SQLL3CkQ/guide.jpg" style={{display:'block', margin:'auto'}} alt="" />
    </div>
    </div>
        
  )
}

export default SizeGuide