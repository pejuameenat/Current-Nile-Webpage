import { useCases } from "../../utils";

const UseCase = () => {
  return (
    <section className="py-6 lg:py-14 px-4 md:px-0 my-[72px]">
      <div className="container md:w-[85%] max-w-[1311px] mx-auto">
        <div className="text-center">
          <span className="span-headings">USE CASE</span>
          <h3 className="section-headers">
            You’re in control of your Business
          </h3>
          <p className="text-pry3 md:text-2xl font-medium">
            How Nile would optimize your operations.
          </p>
        </div>
        <article className=" mt-16">
          <div className="hidden md:grid md:grid-cols-2 pt-6 border-b border-black">
            <h2 className="text-[32px] pb-4 text-pry3 font-semibold">YOUR BUSINESS GOAL</h2>
            <h2 className="text-[32px] pb-4 text-pry3 font-semibold">HOW TO SOLVE IT WITH NILE</h2>
          </div>
          {useCases.map((item) => {
            return (
              <div
                className="grid md:grid-cols-2 pt-6 border-b border-black"
                key={item.id}
              >
                <h4 className="text-2xl md:text-[32px] text-pry3">{item.title}</h4>
                <div className="">
                  <li className="mb-4 md:text-[20px]">{item.description1}</li>
                  <li className="mb-4 md:text-[20px]">{item.description2}</li>
                  <li className="mb-4 md:text-[20px]">{item?.description3}</li>
                </div>
              </div>
            );
          })}
        </article>
        <button type="button" className="bg-primary text-pry1 p-4 rounded-lg block mx-auto mt-6" ><a href="https://app.nile.ng/" target="_blank" rel="noopener noreferrer">Get Started- its free</a> </button>
      </div>
    </section>
  );
};

export default UseCase;
