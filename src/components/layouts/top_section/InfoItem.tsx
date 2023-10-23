type Props = {
  label: string;
  sublabel: string;
};

const InfoItem = ({ label, sublabel }: Props) => {
  return (
    <div className="flex flex-col text-center">
      <p className="text-4xl text-gray-100 font-label font-bold mb-2">{label}</p>
      <p className="text-lg text-gray-70">{sublabel}</p>
    </div>
  );
};

export default InfoItem;
