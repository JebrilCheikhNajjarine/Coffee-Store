import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
function FeedBackItems(props) {
  return (
    <div className=" my-4 mx-8">
      <div className=" bg-secondary p-12 rounded-lg">
        <div className="relative  -mt-[90px] mb-8 ml-auto mr-auto w-20 h-20 ">
          <Image
            width={80}
            height={80}
            className="absolute top-0 left-0  rounded-full  "
            src={props.source}
            W
          />
        </div>
        <div className="text-center">
          <div className="text-orange">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="text-white text-center">
            <div>
              <p>
                Sed ut perspiciatis unde omnis natus error luptatem accusantium
                doloremque laudantium totam remriam eaque quae abillo
              </p>
            </div>
          </div>
          <h5 className="text-white flex flex-col">
            <span className="font-bold text-xl">Frederick S. France</span>
            <em>
              <span className="text-orange">Web Deigner</span>
            </em>
          </h5>
        </div>
      </div>
    </div>
  );
}
export default FeedBackItems;
