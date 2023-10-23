import Image from "next/legacy/image";

const Rating = () => {
  return (
    <div className="flex gap-1 align-middle">
      {Array.from({ length: 5 }).map((_, index) => (
        <Image key={index} src="/assets/icons/yellow-star.svg" width="20" height="20" alt="star" />
      ))}
    </div>
  );
};

export default Rating;
