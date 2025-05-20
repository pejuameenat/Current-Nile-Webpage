import { socialIcons } from "../../utils";
import { Link } from "react-router-dom";
import { nilewhite } from "../../assets";
const Footer = () => {
  return (
    <footer className="bg-black w-full ">
      <div className="py-14 mx-auto">
        <Link to="/">
          <img src={nilewhite} alt="" className="block mx-auto w-[130px]"  />
        </Link>
        <div className="mt-8 flex mx-auto md:w-[546px] gap-3 justify-center">
          {socialIcons.map((item, i) => (
            <a
              href={item.href}
              key={item.id}
              className="hover:opacity-50 transitions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.img}
                className={`p-0 ${i===4?'w-[40px] h-[50px] ':"w-fit h-[50px]"} block`}
                loading="lazy"
                alt="icon socials"
              />
            </a>
          ))}
        </div>
        <p className="text-white text-center mt-4 hover:underline">
          <a href="/terms"> Terms and Conditions</a>
          </p>
      </div>
    </footer>
  );
};

export default Footer;
