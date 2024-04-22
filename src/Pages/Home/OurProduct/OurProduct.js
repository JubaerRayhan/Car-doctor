import React from 'react';
import img1 from '../../../assets/images/products/1.png'
import img2 from '../../../assets/images/products/2.png'
import img3 from '../../../assets/images/products/3.png'
import img4 from '../../../assets/images/products/4.png'
import img5 from '../../../assets/images/products/5.png'
import img6 from '../../../assets/images/products/6.png'

const OurProduct = () => {

    const imageList = [
        {
            image:img1,
            id:1,
            title:'Car Ingine Plug',
            price:20.00


            
        }, {
            image:img2,
            id:2,
            title:'Car Air Filter',
            price:20.00
            
        }, {
            image:img3,
            id:3,
            title:'Cools Led Light',
            price:20.00
            
        }, {
            image:img4,
            id:4,
            title:'Cools Led Light',
            price:20.00
            
        }, {
            image:img5,
            id:5,
            title:'Cools Led Light',
            price:20.00
            
        }, {
            image:img6,
            id:6,
            title:'Cools Led Light',
            price:20.00
            
        }
       
    ]
    return (
        <div className='mb-10 text-center'>
             <div className='py-4'>
                <p className=' text-cyan-600 text-2xl font-bold mb-5'>Our Products</p>
                <h2 className='font-semibold text-4xl text-cyan-800 mb-4'>Browse Our Products</h2>
                <p className='w-2/4 mx-auto	mb-5 font-semibold'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    imageList.map(image => <div className='shadow-xl rounded-xl p-5 border-2 border-orange-100'
                    key = {image.id}
                > 
                <img src={image.image} alt="" />
                <div className='text-center'>
                    <h3 className='font-bold'>{image.title}</h3>
                    <h2 className='text-cyan-700 font-semibold'>Price: ${parseFloat(image.price).toFixed(2)}</h2>
                </div>
                    </div>)
                }
            </div>
            <div className='my-6 text-center'>
            <button className=" bg-black btn btn-outline btn-accent">More Products</button>
            </div>
        </div>
    );
};

export default OurProduct;