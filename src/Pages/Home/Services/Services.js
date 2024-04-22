import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mb-6">
      <div className="text-center py-4">
        <p className=" text-cyan-600 text-2xl font-bold mb-5">Service</p>
        <h2 className="font-semibold text-4xl text-cyan-800 mb-4">
          Our Service Area
        </h2>
        <p className="w-2/4 mx-auto	mb-5 font-semibold">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="my-6 text-center">
    
          <button className=" bg-black btn btn-outline btn-accent">
            More Services
          </button>
        
      </div>
    </div>
  );
};

export default Services;
