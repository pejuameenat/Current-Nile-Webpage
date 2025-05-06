import { Pricing } from "../Components";
import { useSelector } from "react-redux";
const PricingPlan = ({ id, head, monthly, yearly, textArray }) => {
  const { monthlyPrice } = useSelector((store) => store.plans);
  return (
    <article
      className={`${id!==2?'bg-pry1 text-myCustomColor-secondary':'bg-primary text-pry1'} relative rounded-2xl px-4 lg:px-6 py-14 border  `}
      key={id}
    >
      <div className="mb-4">
        <h4 className="mb-2 text-2xl">
          {head}
        </h4>
        {monthlyPrice ? (
          <span className="block   ">
            <strong className={`${id!==2?'text-pry3':'text-pry1'} text-7xl font-normal`}>
              {monthly}
            </strong>{id!==4?"/Month": ''}
          </span>
        ) : (
          <span className="block">
            <strong className={`${id!==2?'text-pry3':'text-pry1'}  text-7xl font-normal`}>&#8358;{yearly}</strong>{id!==4?"/Year ":''}
          </span>
        )}
      </div>
      {/* Pricing */}
      <div className="">
        {textArray.map((plan) => (
          <Pricing key={plan.id} {...plan} />
        ))}
      </div>
      <button type="button" className={`${id!==2?'bg-primary text-pry1':'bg-pry1 text-primary hover:text-pry1'}  mx-auto block w-[90%] mt-10 p-2 rounded-lg hover:bg-black transitions absolute bottom-3 left-0 right-0`}> 
        <a href="https://app.nile.ng/" target="_blank" rel="noopener noreferrer">{id!==4? "Start For Free":"Enquire Now"}</a>
      </button>
    </article>
  );
};

export default PricingPlan;
