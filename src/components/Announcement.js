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
        <h1>Exciting News!</h1>
        <p>
          Jim Meehan MD is part of the largest gathering of professionals and
          experts in history for the cause of Liberty Against Medical Tyranny.
          Health Freedom Summit will feature in-depth discussions and
          presentations by doctors and researchers who are literally curing
          cancer, and breaking the cycle of chronic illness. These speakers will
          be sharing uncensored information and real strategies on effective
          treatments and preventative measures for COVID-19 as they also blow
          the whistle on medical fraud, government overstep, and misinformation.
        </p>
        <a
          className="btn"
          href="https://healthfreedomsummit.mykajabi.com/a/25486/F6V6ayzF"
          target="_blank"
          onClick={turnModalOff}
        >
          Find out more.
        </a>
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
