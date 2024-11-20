import { aboutNile } from "../../utils";
const Aboutus = () => {
  return (
    <section className="bg-pry2 py-6 lg:py-14 px-4 md:px-0 my-[72px]
    ">
      <div className="container md:w-[85%] max-w-[1311px] mx-auto">
        <article className=" ">
          <div
            className="w-[288px]
          md:w-[600px]  
          "
          >
            <h2 className="text-[40px]">
              Sell anywhere easily, quickly, and seamlessly.
            </h2>
            <span className="mt-6 text-[#000]">TRY NILE TODAY</span>
          </div>
        </article>
        <div className="flex-container flex flex-col md:flex-row gap-2 md:gap-8 mt-16">
          {aboutNile.map((item) => {
            const { img, text, id } = item;
            return (
              <div className="md:w-[500px]" key={id}>
                <img src={img}  className='lg:bg-pry1 rounded-lg w-full p-4 maw-w-full' alt=""/> 
                <p className="mt-4 text-center md:text-left ">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
