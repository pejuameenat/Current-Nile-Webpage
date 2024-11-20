import { socialIcons } from "../../utils";
const Footer = () => {
  return (
    <footer className="bg-black w-full">
      <div className="py-14 mx-auto">
        <h1 className="font-bold text-5xl text-pry1 text-center">
          <a href="">NILE</a>
        </h1>
        <div className="mt-8 flex mx-auto md:w-[546px]">
          {socialIcons.map((item) => (
            <a href={item.href} key={item.id} className="hover:opacity-50 transitions">
              <img src={item.img} className="w-[80px] h-[50px]" alt='' />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
