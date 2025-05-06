import { Hero, LogoCompanies, Aboutus, Features, Testimonies, UseCase, Faq, PricingPlan, Footer } from '../Components'
import { plans, pricing } from "../utils";
const Home = () => {
  return (
    <>
      <Hero />
      <LogoCompanies />
      <Aboutus />
      <UseCase />
      <>
        <h2 className='section-headers text-center mt-10'>Simple, Affordable and Transprent Pricing</h2>
        <span className='block text-center text-[#6e6e6e]'>You can cancel Anytime</span>
     <div className="grid md:grid-cols-3 gap-8 lg:max-w-[1100px] mx-auto mt-10">
        {plans.map((item, i) => (
          <PricingPlan key={item.id} {...item} {...pricing[i]}/>
        ))}
      </div>
        </>
      <Features />
      <Testimonies />
      <Faq/>
      <Footer/>
    </>
  );
};

export default Home;
