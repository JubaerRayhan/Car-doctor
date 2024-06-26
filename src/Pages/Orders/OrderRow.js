import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const {_id, serviceName, price, customerName, phone, service,email,  status } = order;
  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(`https://car-doctor-server-two-indol.vercel.app/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);


  return (
    <div>
      <tr className="flex justify-between my-4">
        <th>
          <label>
            <button onClick={() => handleDelete(_id)} className="btn btn-ghost">X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3 justify-between">
            <div className="justify-between">
              <div className="rounded w-24 h-20">
                {orderService?.img && (
                  <img
                    src={orderService.img}
                    alt="Avatar Tailwind CSS Component"
                  />
                )}
              </div>
            </div>
            <div>
              <div className="font-bold">{customerName}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br />
          <span className="badge badge-ghost badge-sm">$:{price}</span>
        </td>
        <td>{email}</td>
        <th>
          <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status?status:'pending'}</button>
        </th>
      </tr>
    </div>
  );
};

export default OrderRow;
