import { faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
function LastSectionItems(props) {
  return (
    <div className="relative mx-4 mt-4 mb-4 group max-w-[1170px] ">
      <div className=" overflow-hidden left-0 top-0 w-full h-full ">
        <Image
          src={props.source}
          width={900}
          height={1000}
          className=" absolute left-0  top-0 bg-cover rounded-lg  group-hover:scale-105 transition-all duration-500 ease-in-out  "
        />
      </div>
      <div className="text-white p-[30px] absolute left-0 bottom-0 w-full z-4">
        <h5>SWR React Hooks With Next Increm Ental Static Regeneration</h5>
        <div>
          <FontAwesomeIcon icon={faCalendar} /> March 26, 2022
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} /> Comments (0)
        </div>
      </div>
    </div>
  );
}
export default LastSectionItems;
