import React, { Fragment,useState } from 'react'
import CartItem from './CartItem'
import { Button, Divider, Modal, TextField } from '@mui/material'
import AddressCard from './AddressCard';
import { Card } from '@mui/material'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Box } from '@mui/system';
import { Formik,Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Grid } from '@mui/material';

const cartItems=[1,1,1,1];
const addresses=[1,1,1];
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline:"none",
    boxShadow: 24,
    p: 4,
}; 
const initialValues = {
    streetAddress: '',
    state: '',
    pincode: '',
    city:''
};
const validationSchema = Yup.object().shape({
    streetAddress:Yup.string().required('Street Address is required'),
    state:Yup.string().required('State is required'),
    pincode:Yup.string().required('Pincode is required'),
    city:Yup.string().required('City is required')
})

const Cart = () => {

    const[openAddressModal,setOpenAddressModal]=useState()

    const createOrderUsingSelectedAddress = () => {
        console.log('Order Created using address:')
    }

    const handleOpenAddressModal = () => {
        setOpenAddressModal(true)
    }

    const handleSubmit = (values) =>{
        console.log('Form Submitted',values)
    }

    const handleCloseAddressModal = () => {
        setOpenAddressModal(false)
    }

    return (
        <Fragment >
            <main className='lg:flex justify-between px-5'>
                <section className='lg:w-[30%] space-y-6 min-h-screen pt-10' >
                    <div className='space-y-4'>
                        {cartItems.map((item, index) => (  
                            <CartItem key={index} />
                        ))}
                    </div>
                    <Divider />
                    <div className='billDetails px-5 text-sm'>
                        <p className='font-extralight py-5'>Bill Details</p>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-gray-400'>
                                <p>Item Total</p>
                                <p>₹256</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>Delivery Charges</p>
                                <p>₹21</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>Platform Fee</p>
                                <p>₹5</p>
                            </div>
                            <div className='flex justify-between text-gray-400'>
                                <p>GST and Restaurant Charges</p>
                                <p>₹25</p>
                            </div>
                            <Divider/>
                            <div className='flex justify-between text-gray-400'>
                                <p>Total Payment</p>
                                <p>₹2350</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Divider orientation='vertical' flexItem/>
                <section className='lg:w-[68%]'>
                    <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery</h1>
                    <div className='flex flex-wrap justify-between'>
                        {addresses.map((item)=><AddressCard showButton={true} item={item} handleSelectAddress={createOrderUsingSelectedAddress}/>)}
                        <Card className='flex space-x-5 lg:w-64 m-5 p-5'>
                            <AddLocationAltIcon/>
                            <div className='space-y-3 text-gray-500 '>
                                <h1 className='font-semibold text:lg text-white'>Home</h1>
                                <p>Add New Address</p>
                                <Button onClick={handleOpenAddressModal} fullWidth variant='contained' sx={{padding:"0.75rem"}}>
                                    ADD
                                </Button>
                            </div>
                        </Card>
                    </div>
                </section>
            </main>
            <Modal open={openAddressModal} onClose={handleCloseAddressModal}>
                <Box sx={style}>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        <Form>
                            <Grid container spacing={2} >
                                <Grid item xs={12}>
                                    <Field 
                                        label='Street Address' 
                                        fullWidth 
                                        variant='outlined' 
                                        error={!ErrorMessage("streetAddress")} 
                                        name='streetAddress' as={TextField}
                                        helperText={<ErrorMessage name='streetAddress'>
                                            {(msg)=> <span className='text-red-600'>{msg}</span>}
                                        </ErrorMessage>}

                                    />
                                    
                                </Grid>
                                <Grid item xs={6}>
                                    <Field 
                                        label='State' 
                                        fullWidth 
                                        variant='outlined' 
                                        error={!ErrorMessage("state")} 
                                        name='state' as={TextField}
                                        helperText={<ErrorMessage name='state'>
                                            {(msg)=> <span className='text-red-600'>{msg}</span>}
                                        </ErrorMessage>}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field 
                                        label='City' 
                                        fullWidth 
                                        variant='outlined' 
                                        error={!ErrorMessage("city")} 
                                        name='city' as={TextField}
                                        helperText={<ErrorMessage name='city'>
                                            {(msg)=> <span className='text-red-600'>{msg}</span>}
                                        </ErrorMessage>}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field 
                                        label='Pincode' 
                                        fullWidth 
                                        variant='outlined' 
                                        error={!ErrorMessage("pincode")} 
                                        name='pincode' as={TextField}
                                        helperText={<ErrorMessage name='pincode'>
                                            {(msg)=> <span className='text-red-600'>{msg}</span>}
                                        </ErrorMessage>}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Button type='submit' variant='contained' fullWidth>
                                        Deliver Here
                                    </Button>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </Box>
            </Modal>
        </Fragment>
    )
}

export default Cart