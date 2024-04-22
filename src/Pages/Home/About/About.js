import React from 'react';
import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero my-14">
  <div className="hero-content flex-col lg:flex-row">
    <div className='w-1/2 relative'>
    <img src={person} alt="" className=" w-4/5 h-full rounded-lg shadow-2xl" />
    <img src={parts} alt="" className=" w-3/5 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8" />
    </div>
    <div className='w-1/2'>
        <p className='text-2xl font-bold mb-2 text-cyan-600'>About Us</p>
      <h1 className="text-4xl font-bold mb-3">We are qualified <br /> & of experience <br /> in this field</h1>
      <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

      <p className='py-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-accent mt-4">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;