// import {ScrollRevealComponent } from "../components";

const ContactWay = ({ icon, contact, name }) => {
  return (
    <a
    href="#"
    className="bg-pry2 shadow-sm w-full shadow-myCustomColor-light rounded-md p-6 lg:w-2/5 mx-auto lg:mx-0"
    >
        <div>
          <img src={icon} className="block w-10 h-10 mx-auto" alt="" />
          <h5 className="font-bold">{name}</h5>
          <p className="py-2 lg:text-lg">{contact}</p>
        </div>
      </a>
  );
};

export default ContactWay;
