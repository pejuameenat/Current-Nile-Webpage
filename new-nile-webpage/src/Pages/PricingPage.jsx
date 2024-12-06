import { PricingPlan, Footer} from "../Components";
import { plans, pricing } from "../utils";
import{setMonthlyPrice} from '../StoreFeatures/Plans/pricingSlice'
import { useDispatch, useSelector } from "react-redux";
import { curved } from "../assets";
const PricingPage = () => {
  const{monthlyPrice} = useSelector(store=>store.plans)
  const dispatch = useDispatch();
  return (
    <>
    <section  id="pricingSection" className="pb-5 lg:pb-[80px] px-4 lg:px-0">
      <h2 className="section-headers text-center mt-10">Simple, Affordable and Transparent Pricing</h2>
      <span className="block text-center text-[#6e6e6e]">You can cancel anytime</span>
        <div className="flex items-center justify-center my-10 bg-[#fbfbfb] border max-w-[200px] mx-auto rounded-full relative">
          <span className="text-[#6e6e6e] absolute -right-20 rotate-12 -top-3">save 60%</span>
          <img src={curved} alt="curve" className="absolute -right-5 -top-[2px]" />
        <button type="button" className={monthlyPrice?"text-white w-32 py-3 font-bold rounded-full bg-primary hover:text-[#6e6e6e] transitions" :'text-[#6e6e6e] w-32 py-3 font-bold rounded-full bg-[#fbfbfb] hover:text-[#6e6e6e] transitions'}onClick={()=>{dispatch(setMonthlyPrice(true))}}>Monthly</button>
        <button type="button" className={monthlyPrice?" text-[#6e6e6e] font-bold rounded-full w-32 py-3 ":'text-white font-bold rounded-full w-32 py-3 bg-primary'} onClick={()=>{dispatch(setMonthlyPrice(false))}}>Annual</button>
      </div>
      {/* render a plan for each plan */}
      <div className="grid md:grid-cols-2 gap-10 lg:max-w-[1047px] mx-auto">
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
