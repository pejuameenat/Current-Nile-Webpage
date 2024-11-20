import { testimonies } from "../../utils";
const Testimonies = () => {
  return (
    <section className="py-6 lg:py-14 px-4 md:px-0 mt-[72px]">
      <div className="container md:w-[85%] max-w-[1311px] mx-auto">
        <div className="section-header-container">
          <span className="span-headings">CUSTOMERS LOVE</span>
          <h3 className="section-headers"> 
            Join Over 10,000 Empowered Businesses</h3>
          <p className="text-pry3 md:text-2xl font-medium">NILE has processed over 100K Orders from small businesses to Large Entreprises</p>
        </div>
        <article className="flex flex-col gap-4 md:gap-[27px] md:flex-row mt-6 md:mt-16">
          {testimonies.map((item, index) => (
            <div className="rounded-md p-4 h-full bg-pry2" key={item.id}>
              <div className="flex gap-2 items-center mb-2">
                <img
                  src={item.image}
                  alt={`testimony ${index + 1}`}
                  loading="lazy"
                  className="w-12 h-12 rounded-full"
                />
                <h4 className="font-bold">{item.name}</h4>
              </div>
              <p className="text-md">{item.text}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Testimonies;
