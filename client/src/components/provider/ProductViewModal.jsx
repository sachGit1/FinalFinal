import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { IoClose } from 'react-icons/io5';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <IoClose />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ProductViewModal(props) {
  const {
    open,
    setOpen,
    productDetails
  } = props
  const handleClose = () => {
    setOpen(false);
  };
  if (!productDetails) {
    return null;
  }
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Product Details
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className='grid grid-cols-2 gap-6'>
            <div >
              <h2 className='font-semibold'>Product Name</h2>
              <p className=''>{productDetails.name}</p>
            </div>
            <div >
              <h2 className='font-semibold'>Product Price</h2>
              <p className=''>₹{productDetails.price}</p>
            </div>
            <div>
              <h2 className='font-semibold'>Product Type</h2>
              <p className=''>{`${productDetails.isVeg ? 'Veg' : 'Non-Veg'}`}</p>
            </div>
            <div className='col-span-2'>
              <h2 className='font-semibold'>Product Description</h2>
              <p className='text-sm'>{productDetails.description}</p>
            </div>
            <div className='col-span-2'>
              <h2 className='font-semibold py-4'>Product Image</h2>
              <div className='h-36 w-36'>
                <img src={productDetails.image} alt="Product" className='w-full h-full' />
              </div>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}