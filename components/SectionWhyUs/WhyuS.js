import MButton from "../MButton";
import Image from "next/image";
function Whyus() {
  return (
    <div className="bg-black p-[20px] md:p-[130px] grid grid-cols-1 lg:grid-cols-2 gap-x-8 relative">
      <div className="py-7">
        <div className="w-[500] h-[500]">
          <Image
            height={900}
            width={900}
            className="rounded-lg"
            src="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/choose_img-900x600.jpg"
          />
        </div>
        <div className="absolute top-0 -left-[1000px] md:-left-24">
          <Image
            width={200}
            height={200}
            src="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/parallax_icon1.png"
          />
        </div>
        <div className="absolute bottom-14 right-[1000px] md:right-20 ">
          <Image
            width={160}
            height={100}
            src="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/parallax_icon3.png"
          />
        </div>
        <div className="absolute top-40 right-[1000px] md:right-0">
          <Image
            width={100}
            height={150}
            src="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/parallax_icon2.png"
          />
        </div>
      </div>
      <div>
        <div>
          <div className="text-orange text-lg py-4">WHY CHOOSE US</div>
          <div className="text-white text-4xl  py-4">
            <h3>New London Coffee Founded</h3>
            <h3>For Extraordinary Test</h3>
          </div>

          <p className=" text-gray-500 py-4">
            Sed ut perspiciatis unde omnis iste natus error voluptate
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
            abillo inventore veritatis
          </p>
          <div className="flex items-center">
            <div className="pr-4 py-4">
              <Image
                width={80}
                height={80}
                src="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/choose_icon1.png"
              />
            </div>
            <div>
              <h1 className="text-white text-2xl py-4">Natural Coffee Beans</h1>
              <p className="text-gray-500 py-2 text-md">
                Sed ut perspiciatis unde omnis iste natus error voluptate
                accusantium doloremque
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="pr-4 py-4">
              <Image
                width={80}
                height={80}
                src="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/choose_icon2.png"
              />
            </div>
            <div>
              <h1 className="text-white text-2xl py-4">
                100% ISO Certification
              </h1>
              <p className="text-gray-500 py-2 text-md">
                Sed ut perspiciatis unde omnis iste natus error voluptate
                accusantium doloremque
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="py-4">
              <a
                href="#_"
                className="relative  items-center justify-start  px-5 py-3 overflow-hidden text-xs sm:text-xl  rounded-md group bg-orange block "
              >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-orange opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-90 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-1"></span>
                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-orange">
                  EXPLORE MORE
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Whyus;
