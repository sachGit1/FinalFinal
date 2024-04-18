import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import HomeLayout from '../layouts/Home.layout'

import DressBox from '../components/Product/DressBox'

import ProviderTopBar from '../components/ProviderTopBar'

import { getAllProduct } from '../redux/product/product.action'
import CircularProgress from '@mui/material/CircularProgress';
import TopNavigation from '../components/TopNavigation'
import Typography from '@mui/material/Typography';
import { getProviderById } from '../redux/provider/provider.action'
import { getProvidersReview } from '../redux/review/review.action'
import Reviews from '../components/Reviews'


function ProviderPage() {
  const products = useSelector((state) => state.products.products);

  const params = useParams();
  const _id = params._id;
  const dispatch = useDispatch()
  useEffect(() => {
    if (_id) {
      dispatch(getAllProduct(_id))
      dispatch(getProviderById(_id))
      dispatch(getProvidersReview(_id))
    }
  }, [_id, dispatch])
  const product = useSelector((state) => state.products)
  let provider = useSelector((state) => state.provider.provider)

  if (product.loading) {
    return (
      <div className='w-full  flex items-center justify-center' style={{ height: '90vh' }}>
        <CircularProgress />
      </div>
    )
  }
  const breadcrumbs = [
    <Link to='/' underline="hover" key="1" color="inherit" className='hover:underline'>
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      to='/provider'
      color="inherit"
      className='hover:underline'
    >
      Tailors
    </Link>,
    <Typography key="3" color="text.primary">
      {provider && provider.name}
    </Typography>
  ];
  return (
    <>
      {products ?
        <div>
          <div className='md:px-8 px-2 py-3'>
            <TopNavigation breadcrumbs={breadcrumbs} />
          </div>
          <ProviderTopBar products={products} />
          <DressBox products={products} />
          <Reviews />
        </div> : null
      }

    </>
  )
}

export default HomeLayout(ProviderPage)
