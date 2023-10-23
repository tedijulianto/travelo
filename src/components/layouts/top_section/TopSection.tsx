import React from "react";
import Container from "../../containers/Container";
import Button from "../../Button";
import InfoItem from "./InfoItem";

const TopSection = () => {
  return (
    <section className="bg-top-section bg-right-top bg-no-repeat bg-auto mt-[85px]">
      <Container>
        <div className="flex flex-col pt-[112px] pb-[58px]">
          <div className="flex flex-col mb-[174px]">
            <h1 className="text-4xl font-bold font-label text-gray-100 w-[500px] mb-8 capitalize">
              jelajahi dunia yang indah dengan satu sentuhan
            </h1>
            <p className="text-2xl text-gray-70 w-[526px] mb-7">
              Jelajahi dunia yang indah dengan satu sentuhan dengan pesan tiket di Travelo kamu akan
              dapatkan pelayanan terbaik untuk wisata liburanmu kemana saja dan kapan saja
            </p>

            <Button className="w-[190px]">Lihat Paket</Button>
          </div>
          <div className="flex gap-40 mx-auto">
            <InfoItem label="+30" sublabel="Negara" />
            <InfoItem label="+1500" sublabel="Penginapan" />
            <InfoItem label="+100" sublabel="Tempat Wisata" />
            <InfoItem label="+50000" sublabel="Pelanggan" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TopSection;
