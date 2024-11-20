import { teams } from "../../utils";
import { you } from "../../assets";
const OurTeam = () => {
  return (
    <section className="mt-[72px]">
      <h2 className="text-[32px] md:text-[40px] font-semibold">Our Team</h2>
      <div>
        <article className="mt-6 md:mt-14 grid  md:grid-cols-2 gap-x-[44px] gap-y-[35px]">
          {teams.map((item, index) => {
            const { id, position, name, img } = item;
            return (
              <div
                className="bg-[#FBFBFB] p-4 rounded-lg shadow-md shadow-pry2
]"
                key={id}
              >
                <div className="flex gap-2">
                  <img
                    src={img}
                    className="w-[50px] h-[50px] rounded-full"
                    alt={`image of ${name}`}
                    loading="lazy"
                  />
                  <div className="">
                    <h4 className="text-[24px] md:text-[32px]">{name}</h4>
                    <span className="mt-2">{position}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </article>
        <div
          className="bg-[#FBFBFB] p-4 rounded-lg w-[634px] mx-auto mt-[35px] mb-14 shadow-md shadow-pry2
]"
        >
          <div className="flex gap-2">
            <img src={you} className="w-[50px] h-[50px]" loading="lazy" alt={` pointing image favicon`} />
            <div className="">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIZDEjAV2b2jUORDrJZhibzD3iQ9HhCmEe3gDUa7-Fv4CuIQ/viewform?usp=sf_link" target='_blank' rel=''>
                <h4 className="text-[24px] md:text-[32px]">You</h4>
              </a>
              <span className="mt-2">Join the team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
