import { faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LastSectionItems from "./LastSectionItems";

function LastSection() {
  return (
    <div className="bg-black pt-[130px] pb-[130px]">
      <div className="flex mr-auto ml-auto relative">
        <div className="w-full">
          <div className="a">
            <div className="mr-auto ml-auto max-w-[1170px]">
              <div className="w-full text-center ">
                <div className="text-orange mb-4 ">
                  <span>Get Every Single Update</span>
                </div>
                <h3 className="text-white text-4xl mb-4">
                  <span>Read Some Latest Blog & News</span>
                </h3>
              </div>
              <div className=" grid grid-cols-1  gap-y-4  md:grid-cols-3">
                <LastSectionItems source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/latest_blog1-900x600.jpg" />
                <LastSectionItems source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/latest_blog2-900x600.jpg" />
                <LastSectionItems source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/latest_blog3-900x600.jpg" />
              </div>
              <div className="w-40 text-center mx-auto my-4">
                <a
                  href="#_"
                  className="relative  items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-md group bg-orange block "
                >
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-orange opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-90 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-6"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-orange">
                    View All
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LastSection;
