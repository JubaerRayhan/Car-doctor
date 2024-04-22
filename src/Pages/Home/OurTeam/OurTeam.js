import React from 'react';
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'

const OurTeam = () => {

    const teamImageList = [
        {
            image:img1,
            id:1,
            title:'Car Ingine Plug',
            subtitle:'Engine Expert'
   
        }, {
            image:img2,
            id:2,
            title:'Car Air Filter',
            subtitle:'Engine Expert'
            
        }, {
            image:img3,
            id:3,
            title:'Cools Led Light',
            subtitle:'Engine Expert'
            
        }
    ]
    return (
        <div className='mb-10'>
        <div className='text-center py-4'>
           <p className=' text-cyan-600 text-2xl font-bold mb-5'>Team</p>
           <h2 className='font-semibold text-4xl text-cyan-800 mb-4'>Meet Our Team</h2>
           <p className='w-2/4 mx-auto	mb-5 font-semibold'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
       </div>
       <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           {
               teamImageList.map(image => <div className='shadow-xl rounded-xl p-5 border-2 border-orange-100'
               key = {image.id}
           > 
           <img className=' rounded-xl' src={image.image} alt="" />
           <div className='text-center font-bold p-4'>
               <h3>{image.title}</h3>
               <h2 className='text-cyan-700 font-semibold'>{image.subtitle}</h2>
           </div>
               </div>)
           }
       </div>
   </div>
        
    );
};

export default OurTeam;