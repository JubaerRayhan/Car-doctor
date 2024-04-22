import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import {AuthContext} from '../../context/AuthProvider/AuthProvider'


const Checkout = () => {

    const {_id, title, price} = useLoaderData();
    const {user} = useContext(AuthContext);

    const handleOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregisterd';
        const message = form.message.value

        const order = {
            service:_id,
            serviceName:title,
            price,
            customerName:name,
            email,
            phone,
            message
        }
        // if(phone.length < 11){
        //     alert('Phone Number Should Be 11 Character or longer')
        // }
        // else{

        // }
        fetch('https://car-doctor-server-two-indol.vercel.app/orders', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                alert('Order Placed Succesfully')
                form.reset();
            }
        })
        .catch(err =>console.error(err))
    }
    
    return (
        <div className='p-5'>
            <form onSubmit={handleOrder}>
                <h2 className='text-3xl   font-bold'>You are going to order : {title}</h2>
                <h3 className='text-3xl py-5 font-semibold mb-4'>Price : {price}</h3>
                <div className='grid gap-5 grid-cols-1 lg:grid-cols-2'>
                <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full"required />
                <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full my-5" placeholder="Your Message"></textarea>
                <input className="btn btn-accent mb-4" type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default Checkout;