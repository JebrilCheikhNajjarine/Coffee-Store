import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
function AboutCard(props) {
  return (
    <div className="">
      <div className="relative group">
        <div className=" bg-black opacity-60  group-hover:opacity-75   transition-all duration-500 ease-in-out">
          <Image
            width={700}
            height={434}
            src={props.source}
            className="group-hover:scale-105 blur-sm group-hover:blur-none transition-all duration-500 ease-in-out"
          />
        </div>
        <div className="absolute top-0 left-0  z-10 w-[100%] h-[100%] flex justify-center flex-col  border border-orange  border-1 group-hover:border-2 "></div>
        <div className="absolute top-0 left-0 w-[100%] h-[100%] flex justify-center  flex-col z-4  text-center">
          <div className="text-white text-4xl lg:text-2xl md:text-5xl">
            <FontAwesomeIcon icon={props.icon} />
          </div>
          <div className="text-white  text-4xl lg:text-2xl md:text-5xl">
            {props.name}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutCard;
