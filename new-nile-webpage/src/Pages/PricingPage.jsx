import { PricingPlan, Footer} from "../Components";
import { plans, pricing } from "../utils";
import{setMonthlyPrice} from '../StoreFeatures/Plans/pricingSlice'
import { useDispatch } from "react-redux";
import { curved } from "../assets";
const PricingPage = () => {
  const dispatch = useDispatch();
  return (
    <>
    <section  id="pricingSection"className="pb-5 lg:pb-[80px] px-8 lg:px-0">
      <h2 className="section-headers text-center mt-10">Simple, Affordable and Transprent Pricing</h2>
      <span className="block text-center text-[#6e6e6e]">You can cancel anytime</span>
        <div className="flex items-center justify-center my-10 bg-[#fbfbfb] border max-w-[200px] mx-auto rounded-full relative">
          <span className="text-[#6e6e6e] absolute -right-20 rotate-12 -top-3">save 60%</span>
          <img src={curved} alt="curve" className="absolute -right-5 -top-[2px]" />
        <button type="button" className="text-white w-32 py-3 font-bold rounded-full bg-primary hover:bg-pry1 hover:text-[#6e6e6e] transitions" onClick={()=>{dispatch(setMonthlyPrice(true))}}>Monthly</button>
        <button type="button" className=" text-[#6e6e6e] font-bold rounded-full w-32 py-3 hover:text-primary" onClick={()=>{dispatch(setMonthlyPrice(false))}}>Annual</button>
      </div>
      {/* render a plan for each plan */}
      <div className="grid md:grid-cols-2  gap-10 max-w-[1047px] mx-auto">
        {plans.map((item, i) => (
          <PricingPlan key={item.id} {...item} {...pricing[i]}/>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default PricingPage;
