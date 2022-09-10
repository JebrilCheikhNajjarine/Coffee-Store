import MButton from "../MButton";
import { Parallax, Background } from "react-parallax";

function HBackground() {
  return (
    <div>
      <div className=" ">
        <Parallax className=" flex items-center py-24 " strength={500}>
          <Background className="bg-cover bg-no-repeat bg-center w-[1920px] h-full  ">
            <img src="https://bslthemes.com/kaffen/wp-content/uploads/2022/04/started_img_n6.jpg" />
          </Background>
          <div className="ml-[50px] lg:ml-[150px] py-20 lg:py-36 max-w-[1170px]">
            <div className="flex items-center">
              <div className="bg-orange w-10 h-[1px] m-4"></div>
              <span className="text-white text-sm md:text-md ">
                WELCOME TO THE KAFFEN
              </span>
            </div>
            <div>
              <div className="text-4xl text-white flex-row my-3  lg:text-[128px] md:text-8xl sm:text-6xl">
                <div>Great Coffee</div>
                <div>Good Vibes</div>
              </div>
            </div>
            <div className="flex items-center justify-start ">
              <div className="p-3">
                <a
                  href="#_"
                  className="relative  items-center justify-start  px-5 py-3 overflow-hidden text-xs sm:text-xl rounded-md group bg-orange block "
                >
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-orange opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-90 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-orange">
                    Explore More
                  </span>
                </a>
              </div>
              <div className="p-3">
                <a
                  href="#_"
                  className="relative  items-center justify-start  px-5 py-3 overflow-hidden text-xs sm:text-xl  rounded-md group bg-gray-900 block "
                >
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-orange opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-90 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-orange">
                    Get Delivery
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default HBackground;
