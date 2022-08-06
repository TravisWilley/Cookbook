import React from 'react';

const items = [1, 2, 3];
const btnBgColor = items.length === 0 ? 'none' : 'white';

export default function CartButton() {
  return (
    <button
      className="btn btn-outline-success d-md-block mt-3 mt-lg-0"
      type="button"
    >
      <i className="bi bi-cart3"></i>
      <span className="mx-2">Checkout</span>
      <span className={`badge text-success bg-${btnBgColor}`}>
        {items.length}
      </span>
    </button>
  );
}
