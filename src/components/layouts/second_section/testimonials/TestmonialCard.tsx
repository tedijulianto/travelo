import Image from "next/legacy/image";
import Rating from "./Rating";

const TestmonialCard = () => {
  return (
    <article className="flex flex-col bg-white rounded-xl shadow w-[288px] h-[281px] p-4">
      <div className="flex items-center mb-4">
        <figure className="relative rounded-full overflow-hidden h-16 w-16 mr-3">
          <Image
            src="/assets/home/profile.png"
            alt="profile"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </figure>

        <div className="flex flex-col">
          <p className="text-lg text-gray-100 font-label font-bold">Otoko</p>
          <p className="text-sm text-gray-50 font-bold">Bandung, Jawa Barat</p>
        </div>
      </div>

      <Rating />

      <p className="text-sm text-gray-70 my-4">
        Nyari makanan halal gampang banget udah ada tour guidenya, tour guidenya juga ramah enak
        diajak ngobrol, dan penginapannya pun nyaman
      </p>
      <p className="text-sm text-gray-100 font-bold">Nusa Penida, Bali</p>
      <p className="text-xs text-gray-50">01-01-2024</p>
    </article>
  );
};

export default TestmonialCard;
