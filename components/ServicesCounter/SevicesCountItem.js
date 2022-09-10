import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function SevicesCountItem(props) {
  const [counterOn, SetCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => SetCounterOn(true)}>
      <div className="">
        <div className="flex  items-center mt-[20px]">
          <div className="text-[60px] text-orange font-light">
            {counterOn && (
              <CountUp start={0} end={props.count} duration={2} delay={0} />
            )}
            +
          </div>
          <div className="ml-6 ">
            <h5 className="mb-4 text-white">
              <span>{props.Heading} </span>
            </h5>
            <div className="text-gray-400">
              <span>{props.para}</span>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
export default SevicesCountItem;
