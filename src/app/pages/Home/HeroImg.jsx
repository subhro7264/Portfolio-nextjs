import Image from "next/image";
import subhroImage from "../../../../public/asset/subhro07.png";

const HeroImg = () => {
  return (
    <div className="flex flex-1 justify-center md:justify-end">
      <Image
        src={subhroImage}
        alt="Subhro Hazra coding"
        className="rounded-xl shadow-xl"
        width={200}
        height={200}
        priority
      />
    </div>
  );
};

export default HeroImg;