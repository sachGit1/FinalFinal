import React from 'react'
import {Link}  from 'react-router-dom'
function DressBox({products}) {
    if(products.length === 0){
        return(
            <div className='flex items-center justify-center h-32 w-full'>
                <p className='font-semibold text-gray-500'>No Designs Found</p>
            </div>
        )
    }
  return (
    <>
        {products && <div className='lg:px-12 md:px-6 px-4  py-4 '>
            <h1 className="font-bold font-mono text-2xl">All Designs</h1>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 py-4 gap-6'>
                {products.map((product,index) =>{
                    if(product.quantity > 0){
                        return(
                            <Link to={`/product/${product._id}`} key={index}>
                        <div className='hover:shadow py-2 '>
                            <div>
                                <img src={product.image} alt={product.name} />
                            </div>
                            <h3 className='font-semibold py-1 px-1'>{product.name}</h3>
                            <div className='flex justify-between px-1 items-center'>
                                <p>Price</p>
                                <p>Rs.  <span className='font-semibold'>{product.price}/dress</span></p>
                            </div>
                        </div>
                    </Link>
                        )
                    }
                })}
            </div>
        </div>}
    </>
  )
}

export default DressBox