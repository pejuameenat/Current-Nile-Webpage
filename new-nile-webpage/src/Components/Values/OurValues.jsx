import { values } from "../../utils";
const OurValues = () => {
  return (
    <div className="mt-[72px]">
      <h2 className="text-[32px] md:text-[40px] font-semibold">Our Values</h2>
      <article className="mt-14 grid md:grid-cols-2 gap-x-6 gap-y-[40px]">
        {values.map((value) => {
          const { id, title, text } = value;
          return (
            <div className="border-b  border-black" key={id}>
              <h4 className="font-medium  text-2xl md:text-[32px] ">{title}</h4>
              <p className="pt-2 pb-4">{text}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default OurValues;
