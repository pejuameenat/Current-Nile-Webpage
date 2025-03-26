import { hero, joinOthers } from "../../assets";
const Hero = () => {
  return (
    <section id="hero" className="px-4 py-6 md:py-0 lg:px-0 md:my-16 ">
      <div
        className="container lg:w-[86%] max-w-[1312px] mx-auto md:flex items-start
      "
      >
        <div className="lg:w-[55%] ">
          <h1 className="text-[40px] md:text-[48px] leading-[56px] text-pry3 font-semibold">
            Run Your Business, <br /> Not Your Books.
          </h1>
          <p className="text-pry3 py-4">
            Effortless inventory and cash flow management that keeps you focused on what matters.
            {/* The AI-powered workspace for businesses—organizing finances,
            inventory, and operations seamlessly. */}
          </p>
          <button
            type="button"
            className="text-pry1 p-4 bg-primary rounded-2xl md:w-[237px] md:h-[61px] w-[205px] h-[60px] hover:bg-black transitions"
          >
            <a
              href="https://app.nile.ng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Get Started - its free
            </a>
          </button>
          <div className="mt-4 flex gap-2 ">
            <img
              src={joinOthers}
              className="max-w-full"
              alt="images of the community people"
              loading="lazy"
            />
            <p className="text-pry3">Loved by 1k businesses</p>
          </div>
        </div>
        <img
          src={hero}
          className="w-[343px] max-w-full lg:w-[49%] self-center"
          loading="lazy"
          lt="screenshot from the look of the nile web app"
        />
      </div>
    </section>
  );
};

export default Hero;
