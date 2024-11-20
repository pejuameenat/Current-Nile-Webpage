import { hero, joinOthers } from "../../assets";
const Hero = () => {
  return (
    <section id="hero" className="px-4 py-6 md:py-0 md:px-0 md:my-[72px]">
      <div className="container lg:w-[85%] max-w-[1311px] mx-auto lg:flex items-start
      ">
        <div className="md:w-[47%]">
          <h1 className="text-[40px] md:text-[48px] leading-[56px] text-pry3 font-semibold">
            Automate Inventory, Cash Flow And Sales With Ease.
          </h1>
          <p className="text-pry3 py-4">
            The AI-powered workspace for businesses—organizing finances,
            inventory, and operations seamlessly.
          </p>
          <button type="button" className="text-pry1 p-4 bg-primary rounded-2xl md:w-[237px] md:h-[61px] w-[205px] h-[60px] hover:bg-black transitions">
            <a href="https://app.nile.ng/" target="_blank" rel="noopener noreferrer"> Get Started - its free</a>
            
          </button>
          <div className="mt-4 flex gap-2">
            <img
              src={joinOthers}
              className="max-w-full"
              alt="images of the community people"
              loading="lazy"
            />
            <p className="text-pry3">Loved by 10k businesses</p>
          </div>
        </div>
        <img src={hero} className="w-[343px] max-w-full lg:w-[53%] self-end" loading="lazy" alt="screenshot from the look of the nile web app" />
      </div>
    </section>
  );
};

export default Hero;
