import SevicesCountItem from "./SevicesCountItem";

function SevicesCount() {
  return (
    <div className="bg-secondary">
      <div className=" py-[46px] px-[40px] sm:px-[100px] max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3  ">
          <SevicesCountItem
            count="256"
            Heading="Premium Clients"
            para="Sed ut perspiciatis unde"
          />
          <SevicesCountItem
            count="362"
            Heading="Expert Members"
            para="Sed ut perspiciatis unde"
          />
          <SevicesCountItem
            count="753"
            Heading="Winning Awards"
            para="Sed ut perspiciatis unde"
          />
        </div>
      </div>
    </div>
  );
}
export default SevicesCount;
