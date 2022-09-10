import FeedBackItems from "./FeedBackItems";
function FeedbackSecttion() {
  return (
    <div className="bg-black">
      <div className="text-center py-[30px]  max-w-[1170px] mx-auto">
        <div className="p-8 ">
          <div className="text-orange text-lg py-4">CUSTOMER FEEDBACK</div>
          <h3 className="text-white text-5xl py-4">What Our Clients Say</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-3 items-center gap-y-28 my-30">
          <FeedBackItems source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/rev1.jpg" />
          <FeedBackItems source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/rev3.jpg" />
          <FeedBackItems source="https://bslthemes.com/kaffen/wp-content/uploads/2022/03/rev2.jpg" />
        </div>
      </div>
    </div>
  );
}
export default FeedbackSecttion;
