import React from 'react'
import Skeleton from '@mui/material/Skeleton';

function  ProductTabSkeleton() {
    const products =[1,2,3,4,5,6,7,8,9,10,11]
  return (
    <>
        {products.map((product)=>(
        <div className=''>
            <Skeleton variant='circular'  animation='wave' width={140} height={140}/>
        </div>
        ))}
    </>

  )
}

export default  ProductTabSkeleton