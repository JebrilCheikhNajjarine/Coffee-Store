import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import {
  faEnvelope,
  faEnvelopeOpen,
  faMapLocation,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className="bg-secondary">
      <footer className="mx-auto  max-w-[1170px] ">
        <div className="grid grid-cols-1 gap-10 py-8 px-6 lg:grid-cols-4 md:grid-cols-2">
          <div>
            <div className="mb-2">
              <Image
                src="https://bslthemes.com/kaffen/wp-content/uploads/2022/04/logo.png"
                width={135}
                height={46}
              />
            </div>
            <div className="text-gray-500 my-4 ">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit
                tellus, luctus nec.
              </p>
            </div>
            <div className="text-white flex gap-8 mt-4">
              <div className="bg-gray-600 w-[40px] h-[40px] text-center  py-2 rounded-full hover:bg-orange transition-all duration-300 ease-in">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className="bg-gray-600 w-[40px] h-[40px] text-center  py-2 rounded-full hover:bg-orange transition-all duration-300 ease-in">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="bg-gray-600 w-[40px] h-[40px] text-center  py-2 rounded-full hover:bg-orange transition-all duration-300 ease-in">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="bg-gray-600 w-[40px] h-[40px] text-center  py-2 rounded-full hover:bg-orange transition-all duration-300 ease-in">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
            </div>
          </div>
          <div className="pl-0 md:pl-8">
            <h2 className="mb-6 text-md  font-semibold text-white uppercase ">
              Working Hours
            </h2>
            <ul className="text-gray-500 ">
              <li className="mb-2 list-disc text-white ">
                <a href="#" className="text-orange text-lg">
                  Sunday - Thursday
                </a>
              </li>
              <li className="mb-4 text-white text-sm">
                <a>08:00 am - 09:00pm</a>
              </li>
              <li className="mb-2 list-disc text-white ">
                <a href="#" className="text-orange text-lg">
                  Only Friday
                </a>
              </li>
              <li className="mb-4 text-white text-sm">
                <a>03:00 pm - 09:00pm</a>
              </li>
              <li className="mb-2 list-disc text-white ">
                <a href="#" className="text-orange text-lg">
                  Saturday
                </a>
              </li>
              <li className="mb-4 text-white text-sm">
                <a>Closed</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-md font-semibold text-white uppercase ">
              Contact Us
            </h2>
            <ul className="text-gray-500 ">
              <li className="mb-2  text-orange">
                <span className="pr-4 text-2xl">
                  <FontAwesomeIcon icon={faMapLocation} />
                </span>
                <a href="#" className=" text-lg">
                  Location :
                </a>
              </li>
              <li className="mb-4 ml-11 text-white text-sm">
                <a>55 Main Street, New York</a>
              </li>
              <li className="mb-2  text-orange">
                <span className="pr-4 text-2xl">
                  <FontAwesomeIcon icon={faEnvelopeOpen} />
                </span>
                <a href="#" className=" text-lg">
                  Email Address :
                </a>
              </li>
              <li className="mb-4 ml-11 text-white text-sm">
                <a>kaffendev@gmail.com</a>
              </li>
              <li className="mb-2  text-orange">
                <span className="pr-4 text-2xl">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                <a href="#" className=" text-lg">
                  Phone Number :
                </a>
              </li>
              <li className="mb-4 ml-11 text-white text-sm">
                <a>+012 (345) 678 99</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-md font-semibold text-white uppercase ">
              Follow Instagram
            </h2>
            <section className="overflow-hidden  ">
              <div className="container mx-auto ">
                <div className="flex flex-wrap -m-1 md:-m-2">
                  <div className="flex flex-wrap w-1/3 ">
                    <div className="w-full p-1 md:p-2   ">
                      <Image
                        alt="gallery"
                        className="rounded-md hover:scale-105 duration-300 ease-linear"
                        width={140}
                        height={140}
                        src="https://bslthemes.com/kaffen/wp-content/uploads/2022/04/inst4.jpeg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap w-1/3">
                    <div className="w-full  p-1 md:p-2 ">
                      <Image
                        alt="gallery"
                        className="rounded-md hover:scale-105 duration-300 ease-linear"
                        width={140}
                        height={140}
                        src="https://bslthemes.com/kaffen/wp-content/uploads/2022/04/inst2.jpeg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                      <Image
                        alt="gallery"
                        className="rounded-md hover:scale-105 duration-300 ease-linear"
                        width={140}
                        height={140}
                        src="https://bslthemes.com/kaffen/wp-content/uploads/2022/04/inst1.jpeg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                      <Image
                        alt="gallery"
                        className="rounded-md hover:scale-105 duration-300 ease-linear"
                        width={140}
                        height={140}
                        src="https://bslthemes.com/kaffen/wp-content/uploads/2022/04/inst5.jpeg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                      <Image
                        alt="gallery"
                        className="rounded-md hover:scale-105 duration-300 ease-linear"
                        width={140}
                        height={140}
                        src="https://bslthemes.com/kaffen/wp-content/uploads/2022/04/inst3.jpeg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap w-1/3">
                    <div className="w-full p-1 md:p-2">
                      <Image
                        alt="gallery"
                        className="rounded-md hover:scale-105 duration-300 ease-linear"
                        width={140}
                        height={140}
                        src="https://bslthemes.com/kaffen/wp-content/uploads/2022/04/inst6.jpeg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </footer>
      <div className="py-6 px-4 bg-black  flex items-center justify-center ">
        <span className="text-md text-white  text-center">
          © 2022 Najjarine. All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
export default Footer;
