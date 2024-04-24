import React from 'react'
import { useSelector } from 'react-redux';

function DressDetail() {
  const dressData = useSelector((state) => state.products.product);
  return (
    <>
      {dressData && <div className='pb-4'>
        <div className='dressImage' style={{height:'200px'}}>
          <img src={dressData.image} alt={dressData.name} className='h-full w-full rounded-lg overflow-hidden'/>
        </div>
          <div className= 'flex flex-col gap-4 py-4 h-40'>
            <h3 className='font-semibold'>{dressData.name}</h3>
            <h6 className='font-semibold'>Price: <span className='text-slate-900 font-normal'>Rs. {dressData.price}/dress</span></h6>
            <p className='font-semibold'>Quantity Left: <span className='font-normal'>{dressData.quantity}</span></p>
            <h6 className='font-medium'>Description :</h6>
            <p className='text-gray-500'>{dressData.description}</p>
          </div>
        </div>}
    </>
  )
}

export default DressDetail