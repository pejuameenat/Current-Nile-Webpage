import { FiCheck } from 'react-icons/fi';

const Pricing = ({ id, text }) => {
  return (
    <div className="text-myCustomColor-secondary mt-3 flex items-start gap-1" key={id}>
       <FiCheck className=" w-7 h-6 mt-[2px]" />
      <li className="w-[90%]">{text}</li>
    </div>
  );
};

export default Pricing;
