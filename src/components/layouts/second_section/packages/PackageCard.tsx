import Button from "@/components/Button";
import Image from "next/legacy/image";

const PackageCard = () => {
  return (
    <article className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden w-[393px]">
      <figure className="relative w-full h-[268px]">
        <Image
          src="/assets/home/cliff.png"
          alt="Cliff image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </figure>

      <div className="flex flex-col p-4">
        <div className="flex items-center mb-4">
          <Image src="/assets/icons/yellow-star.svg" width="20" height="20" alt="star" />
          <p className="text-sm text-gray-70 ml-1">4.6 (1.000 Review)</p>
        </div>

        <p className="text-2xl text-gray-100 font-label font-bold">Colloseum, Roma</p>

        <p className="text-lg text-gray-70 mb-4">Italia</p>

        <p className="text-2xl text-gray-100 font-bold mb-4">Rp. 20.000.000</p>

        <p className="text-xs text-gray-70 mb-4">
          Untuk 1 Orang, tiket pesawat, penginapan 5 malam, tour guide makan siang, makan malam,
          transportasi travel
        </p>

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

export default PackageCard;
