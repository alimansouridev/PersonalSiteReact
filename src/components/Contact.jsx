import React from "react";
import { CONTACT } from "../assets/constants";

export const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.adress}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b no-underline">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};
