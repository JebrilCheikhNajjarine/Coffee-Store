import Image from "next/image";
function GalleryCart(props) {
  return (
    <div className=" relative w-[400px] inline-block px-4  cursor-pointer group hover:scale-105 ease-in-out duration-500 ">
      <Image
        width={700}
        height={1000}
        alt="gallery"
        className="block object-center w-full h-full rounded-md  "
        src={props.source}
      />
      <div className="absolute top-0 left-0 rounded-xl  border-orange border-2 w-full z-40 h-full scale-75 opacity-0 group-hover:opacity-100 ease-in-out duration-500">
        <div className="text-center text-white text-3xl mt-[65%] ">
          {props.name}
        </div>
      </div>
    </div>
  );
}
export default GalleryCart;
