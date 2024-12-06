import { faqs } from "../../utils";
import { minusIcon } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { toggleFaq } from "../../StoreFeatures/FaqSlice/FaqSlice";
const Faq = () => {
  const{isOpen} = useSelector(store=>store.faq)
  const dispatch = useDispatch();

  const handleShow = (id) => {
    dispatch(toggleFaq(id)); // Dispatch the toggle action
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
            const openFaq = isOpen[id];
            return (
              <div className="bg-pry1 flex p-4 min-h-fit justify-between
              " key={id}>
                <div>
                  <h4 className="text-xl md:text-2xl font-medium">{heading}</h4>
                  <p className={`py-1 transition-all duration-500 ease-in-out overflow-hidden ${openFaq ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>{text}</p>
                </div>
                  <img
                    src={openFaq ? `${minusIcon}` : `${icon}`}
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
