import { socialIcons } from "../../utils";
import { Link } from "react-router-dom";
import { nilewhite } from "../../assets";
const Footer = () => {
  return (
    <footer className="bg-black w-full">
      <div className="py-14 mx-auto">
        <Link to="/">
          <img src={nilewhite} alt="" className="block mx-auto w-[130px]"  />
        </Link>
        <div className="mt-8 flex mx-auto md:w-[546px]">
          {socialIcons.map((item) => (
            <a
              href={item.href}
              key={item.id}
              className="hover:opacity-50 transitions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.img}
                className="w-[80px] h-[50px]"
                loading="lazy"
                alt="icon socials"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
