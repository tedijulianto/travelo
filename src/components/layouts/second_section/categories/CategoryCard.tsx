import Image from "next/legacy/image";
import React from "react";

const CategoryCard = () => {
  return (
    <article className="flex flex-col w-[182px]">
      <figure className="relative w-full h-[179px] rounded-xl overflow-hidden mb-5">
        <Image
          src="/assets/home/bromo.png"
          alt="bromo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </figure>

      <p className="text-2xl text-gray-100 font-bold">Gunung</p>
    </article>
  );
};

export default CategoryCard;
