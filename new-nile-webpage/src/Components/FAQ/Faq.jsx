import { faqs } from "../../utils";
import { minusIcon } from "../../assets";
import { useState } from "react";
const Faq = () => {
const [openFaqs, setOpenFaqs] = useState({id:false});
  const[ currentId, setCurrentId] = useState(null)

  const handleShow = (id) => {
    // Toggle the visibility of the clicked FAQ by its id
    setOpenFaqs((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle visibility of the clicked FAQ
    }));
  };
  return (
    <section className="bg-pry2 py-6 lg:py-14 px-4 md:px-0 mt-[57px]">
      <div className="container md:w-[85%] max-w-[1311px] mx-auto">
        <div className="header text-center">
          <span className="span-headings">SUPPORTS</span>
          <h2 className="section-headers">Frequently Asked Questions</h2>
        </div>
        <article className="mt-16 grid md:grid-cols-2 gap-x-6 gap-y-8">
          {faqs.map((item) => {
            const { id, icon, heading, text } = item;
            const isOpen = openFaqs[id];
            return (
              <div className="bg-pry1 flex p-4 h-fit justify-between
              " key={id}>
                <div>
                  <h4 className="text-xl md:text-2xl font-medium">{heading}</h4>
                  <p className={`py-1 transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>{text}</p>
                </div>
                  <img
                    src={isOpen ? `${minusIcon}` : `${icon}`}
                    className="w-10 h-10"
                    alt=""
                    onClick={()=>handleShow(id)}
                  />
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Faq;
