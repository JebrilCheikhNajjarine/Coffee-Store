import Image from "next/image";
function SectionCard(props) {
  return (
    <div className="my-8 mx-12">
      <div className="flex flex-col items-center  justify-between sm:flex-row">
        <div className="group ">
          <Image
            height={200}
            width={200}
            className="h-[18rem] w-[19rem] sm:h-[14rem] sm:w-[22rem]   rounded-md  group-hover:scale-105 transition-all duration-500 ease-linear "
            src={props.src}
          />
        </div>
        <div className="text-white w-full h-full bg-cover relative pl-0 sm:pl-8 text-center sm:text-left">
          <h1 className="text-3xl mb-3 mt-4 sm:mt-0 sm:text-xl">
            {props.heading}
          </h1>
          <p className="text-gray-400 mb-5">{props.paragraph}</p>
          <div className="relative text-[24px] text-orange flex items-center  justify-center sm:justify-start gap-3 ">
            <div className=" w-[140px] sm:w-[130px] border-b-[1px] border-dashed border-orange content-none "></div>
            <span className="">{props.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionCard;
