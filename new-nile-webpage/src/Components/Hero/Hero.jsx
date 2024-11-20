import { hero, joinOthers } from "../../assets";
const Hero = () => {
  return (
    <section className="px-4 py-6 md:py-0 md:px-0 md:my-[72px]">
      <div className="container lg:w-[85%] max-w-[1311px] mx-auto lg:flex items-start
      ">
        <div className="md:w-[45%]">
          <h1 className="text-[40px] md:text-[48px] leading-[56px] text-pry3 font-semibold">
            Automate Inventory, Cash Flow And Sales With Ease.
          </h1>
          <p className="text-pry3 py-4">
            The AI-powered workspace for businesses—organizing finances,
            inventory, and operations seamlessly.
          </p>
          <button type="button" className="text-pry1 p-4 bg-primary rounded-2xl md:w-[237px] md:h-[61px] w-[205px] h-[60px]">
            Get Started - its free
          </button>
          <div className="mt-4 flex gap-2">
            <img
              src={joinOthers}
              className="max-w-full"
              alt=""
            />
            <p className="text-pry3">Loved by 10k businesses</p>
          </div>
        </div>
        <img src={hero} className="w-[343px] max-w-full lg:w-[55%] self-end" alt="" />
      </div>
    </section>
  );
};

export default Hero;
