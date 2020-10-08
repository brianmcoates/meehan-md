import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const Announcement = () => {
  const [showModal, setModal] = useState(false);

  useEffect(() => {

    const modalCookie = Cookies.get("showModal");
    if(modalCookie){
      setModal(false)
    } else {
      setModal(true)
    }
  }, []);

  const turnModalOff = () => {
    Cookies.set('showModal', 'false', { expires: 14, path: '' });
    setModal(false);
  };

  return (
    showModal && (
      <div className="announcement">
        <h3 className='font-size-m m-b-1 font-weight-bold'>Support Your Immune System</h3>
        <p className='m-b-1'>
          Shop for high quality supplements recommended by Dr. Meehan at a discount. Receive 15% OFF your first order
          <b className='font-weight-bold'> Promo Code:  FIRST15</b>
        </p>
        <a
          className="btn m-b-1-half"
          href="https://meehanmd.ehealthpro.com/"
          target="_blank"
          onClick={turnModalOff}
        >
          Shop Now
        </a>
        <p className='font-size-xxs gray-20 text-center p-t-2'>*Shipping is FREE on all orders and should arrive within 2-3 business days.</p>
        <a className="close-modal" onClick={turnModalOff}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </a>
      </div>
    )
  );
};
