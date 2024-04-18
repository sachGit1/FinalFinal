import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlinePlus } from 'react-icons/ai'
import { getAllProduct } from '../../redux/product/product.action';

import AddDressModal from './AddDressModal';

import DressTable from './DressTable'



function ProviderDresses() {
  const provider = useSelector((state) => state.provider.provider);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProduct(provider._id));
  }, [dispatch, provider._id]);
  const [addDressModal, setAddDressModal] = useState(false);

  return (
    <>
      <div className='flex justify-between p-2'>
        <div>
          <h1 className='font-semibold text-xl'>Manage Designs</h1>
        </div>
        <button className='border bg-green-700 flex items-center gap-1 text-white px-2 py-1 rounded' onClick={() => setAddDressModal(true)}>
          <AiOutlinePlus />
          <span>Add Designs</span>
        </button>
      </div>

      <div className='py-3 px-3'>
        <AddDressModal open={addDressModal} setOpen={setAddDressModal} />
        <DressTable addDressModal={addDressModal} setAddDressModal={setAddDressModal} />
      </div>
    </>
  )
}

export default ProviderDresses
