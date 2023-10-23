import React from "react";
import TestmonialCard from "./TestmonialCard";

const Testimonials = () => {
  return (
    <>
      <h3 className="text-2xl text-gray-100 font-label font-bold pt-14 mb-1">
        Testimonial Pelanggan
      </h3>

      <p className="text-lg mb-4">Pendapat pelanggan tentang kami</p>

      <div className="flex justify-between">
        {Array.from({ length: 4 }).map((_, index) => (
          <TestmonialCard key={index} />
        ))}
      </div>
    </>
  );
};

export default Testimonials;
