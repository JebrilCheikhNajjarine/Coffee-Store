import {
  faCoffee,
  faGlassCheers,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Parallax } from "react-parallax";
import AboutCard from "./AboutCard";
function About() {
  return (
    <div className="bg-black">
      <div className="mx-auto py-[46px] px-[40px] sm:px-[100px] font-Roboto max-w-[1170px] ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 ">
          <div>
            <div>
              <div className="text-orange text-lg pt-4">About Us</div>
              <div className="text-white text-4xl lg:text-5xl py-4">
                Organic & Fresh Coffee
                <div>Provider Center</div>
              </div>
              <p className="text-gray-300 py-4 text-xl">
                Sed ut perspiciatis unde omnis iste natus error voluptate
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa
                quae abillo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsluptatem quia voluptas sit
                aspernatur aut odit aut fugit sed quia consequuntur magni
                dolores eos qui ratione
              </p>
            </div>
            <div className="py-4">
              <div className="bg-orange flex items-center rounded-md">
                <div className="p-4">
                  <Image
                    src="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/quote_img.png"
                    width={95}
                    height={95}
                  />
                </div>
                <p className="text-white text-lg ">
                  Quis autem vel eum iure reprehenderit in ealuptate velit esse
                  molestiae
                </p>
              </div>
            </div>
          </div>
          <div className="py-4">
            <Image
              width={686}
              height={544}
              src="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/about_img.png"
            />
          </div>
        </div>
        <div>
          <div className="mt-10 grid grid-cols-1 items-center justify-center lg:grid-cols-3 gap-10 ">
            <AboutCard
              source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/service2.jpg"
              name="Coffe Menu"
              icon={faCoffee}
            />

            <AboutCard
              source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/service1.jpg"
              name="Restaurant Menu"
              icon={faGlassCheers}
            />
            <AboutCard
              source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/service3.jpg"
              name="Food Services"
              icon={faUtensils}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
