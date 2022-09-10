function MButton(props) {
  return (
    <div className="">
      <a
        href="#_"
        className="relative  items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-md group bg-orange hidden lg:block "
      >
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-orange opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-90 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
        <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-orange">
          {props.name}
        </span>
      </a>
    </div>
  );
}
export default MButton;
