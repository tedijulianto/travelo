import PackageCard from "./PackageCard";

const Packages = () => {
  return (
    <>
      <h3 className="text-2xl text-white mb-1 pt-14 font-label font-bold">Paket Liburan Populer</h3>
      <p className="text-lg text-white mb-4">Paket terbaik yang sering dipilih oleh pelanggan</p>

      <div className="flex justify-between">
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
    </>
  );
};

export default Packages;
