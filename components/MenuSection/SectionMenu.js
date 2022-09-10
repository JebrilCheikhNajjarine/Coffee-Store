import SectionCard from "./SectionCard";

function SectionMenu() {
  return (
    <div className="bg-black ">
      <div className=" mx-[50px] lg:mx-auto max-w-[1170px] ">
        <div className="text-center">
          <div className="p-8 ">
            <div className="text-orange text-lg py-4">About Us</div>
            <h3 className="text-white text-5xl py-4">Popular Coffee Menu</h3>
          </div>
          <div className="bg-secondary w-full h-full  ">
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              <SectionCard
                src="https://bslthemes.com/kaffen/wp-content/uploads/2022/04/gallery-i-5.jpg"
                heading="Cold Brew Coffee"
                paragraph="2/3 espresso, 1/3 streamed milk"
                price="$7.9"
              />

              <SectionCard
                src="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/menu1.jpg"
                heading="Americano"
                paragraph="2/3 espresso, 1/3 streamed milk"
                price="$4.9"
              />
              <SectionCard
                src="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/menu2.jpg"
                heading="Espresso Coffee"
                paragraph="2/3 espresso, 1/3 streamed milk"
                price="$4.3"
              />
              <SectionCard
                src="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/menu3.jpg"
                heading="Barista Pouring Syrup"
                paragraph="2/3 espresso, 1/3 streamed milk"
                price="$3.5"
              />
              <SectionCard
                src="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/menu4.jpg"
                heading="Cold – Coffee"
                paragraph="2/3 espresso, 1/3 streamed milk"
                price="$2.6"
              />
              <SectionCard
                src="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/menu5.jpg"
                heading="Cappuccino Arabica"
                paragraph="2/3 espresso, 1/3 streamed milk"
                price="$6.0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionMenu;
