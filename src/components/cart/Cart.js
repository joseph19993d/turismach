import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="border p-4 m-4">
      <h2 className="text-xl font-semibold">Carrito de compras</h2>
      <ul className="mt-2">
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
