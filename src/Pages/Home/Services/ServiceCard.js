import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {

    const {_id, img, title, price} = service;
  return (
    <div className="p-4 border-2 border-orange-100 card card-compact bg-base-100 shadow-xl">
      <figure>
       <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="font-semibold text-xl text-cyan-700">Price : ${price}</p>
        <div className="card-actions justify-end">
        <Link to={`/checkout/${_id}`}><button className="btn btn-accent">Checkout</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
