import Image from "next/legacy/image";
import Button from "../../../Button";

const PromoCard = () => {
  return (
    <article className="bg-white shadow-lg rounded-xl overflow-hidden w-[500px] h-[312px] flex">
      <figure className="relative h-full w-[212px]">
        <Image
          src="/assets/home/borobudur.png"
          alt="borobudur"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </figure>
      <div className="flex flex-1 flex-col justify-center p-4">
        <p className="text-lg text-gray-100 font-label font-bold">Borobudur, Magelang</p>
        <p className="text-lg text-gray-70 mb-4">Indonesia</p>

        <div className="flex gap-1">
          <p className="text-sm text-gray-70 line-through">Rp. 7.700.000</p>
          <p className="text-sm text-red-100 font-bold">10%</p>
        </div>
        <p className="font-bold text-gray-100 mb-4">Rp. 6.500.000</p>
        <p className="text-sm text-gray-70 mb-4 capitalize">
          Untuk 2 Orang, tiket pesawat, tempat penginapan 5 malam, tour guide max
        </p>
        <p className="text-sm text-gray-70 mb-4">Berangkat: 01-01-2024 10:00</p>
        <div className="flex justify-between gap-3">
          <Button className="w-full" outlined>
            Lihat Detail
          </Button>
          <Button className="w-full">Pesan</Button>
        </div>
      </div>
    </article>
  );
};

export default PromoCard;
