import { Pricing } from ".";
import { useSelector } from "react-redux";
const PricingPlan = ({ id, head, monthly, yearly, text, textArray }) => {
  const { monthlyPrice } = useSelector((store) => store.plans);
  return (
    <article
      className="shadow-lg rounded-2x px-4 lg:px-12 py-14"
      key={id}
    >
      <div className="mb-4">
        <h4 className="text-[#6e6e6e] mb-2 text-2xl">
          {head}
        </h4>
        {monthlyPrice ? (
          <span className="block text-myCustomColor-secondary ">
            <strong className="text-pry3 text-3xl font-normal">
              &#8358;{monthly}
            </strong>{id!==4?"/Month": ''}
          
          </span>
        ) : (
          <span className="block text-myCustomColor-secondary">
            <strong className="text-pry3 text-3xl font-normal">&#8358;{yearly}</strong>{id!==4?"/Year ":''}
          </span>
        )}
        <p className="text-[#6e6e6e] font-medium text-xl pt-4">{text}</p>
      </div>
      {/* Pricing */}
      <div className="#">
        {textArray.map((plan) => (
          <Pricing key={plan.id} {...plan} />
        ))}
      </div>
      <button type="button" className='bg-primary mx-auto block  w-[200px] lg:w-[344px] mt-10 p-2 text-pry1 rounded-lg hover:bg-black transitions'>{id!==4? "Start For Free":"Enquire Now"}
        <a href="https://app.nile.ng/" target="_blank" rel="noopener noreferrer"></a>
      </button>
    </article>
  );
};

export default PricingPlan;
