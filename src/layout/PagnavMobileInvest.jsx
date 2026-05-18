import { useRef } from "react";
import { Link } from "react-router-dom";

const NavItems = [
  {
    id: 1,
    text: "Services",
    href: "/",
  },
  {
    id: 2,
    text: "Products",
    href: "/",
  },
  {
    id: 3,
    text: "Comments",
    href: "/",
  },
  {
    id: 4,
    text: "Contacts",
    href: "/",
  },
];
function PagnavMobileInvest() {
  const checkboxRef = useRef(null);

  const Onclick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };
  return (
    <div>
      <div className="z-30 h-15 w-full bg-black/90 lg:hidden">
        <img
          src="/images/logo.png"
          alt="images"
          className="w-10 h-10 rounded-full pt-3 ml-5"
        />
        <input
          type="checkbox"
          ref={checkboxRef}
          className="absolute peer top-2 right-5 w-8 h-8 z-20 opacity-0 cursor-pointer"
        />
        <div className="w-6 h-5 space-y-1 absolute top-5 right-5 peer-checked:opacity-0">
          <div className="h-1 w-full bg-white mb-0.5 rounded-xs"></div>
          <div className="h-1 w-full bg-white mb-0.5 rounded-xs"></div>
          <div className="h-1 w-full bg-white  mb-0.5 rounded-xs"></div>
        </div>
        <ul className="bg-white h-0 w-0 peer-checked:h-screen peer-checked:w-full transition-all duration-700 absolute top-0 z-15 overflow-scroll no-scrollbar">
          <span className="w-6 h-6 absolute top-3 right-3 text-black text-[18px] text-center font-bold ">
            X
          </span>
          <span className="block absolute top-[50%] left-[50%] -translate-[50%]">
            <span
              onClick={Onclick}
              className=" block mb-5 w-fit font-bold hover:text-[#f1cf69] hover:after:block after:bg-[#f1cf69] after:h-1 after:w-5"
            >
              <Link to="/"> Home </Link>
            </span>
            {NavItems.map((items) => (
              <li
                key={items.id}
                onClick={Onclick}
                className="mb-5 w-fit font-bold hover:text-[#f1cf69] hover:after:block after:bg-[#f1cf69] after:h-1 after:w-5"
              >
                <Link to={items.href}>{items.text}</Link>
              </li>
            ))}
            <span
              onClick={Onclick}
              className=" block mb-5 w-fit font-bold hover:text-[#f1cf69] hover:after:block after:bg-[#f1cf69] after:h-1 after:w-5"
            >
              <Link to="/invest"> Invest </Link>
            </span>
            <Link
              to="/"
              onClick={Onclick}
              className="block border-2 border-[#f1cf69] p-2 w-40 text-center text-[12px] font-bold uppercase hover:bg-[#f1cf69]/30"
            >
              Get in Touch
            </Link>
          </span>
        </ul>
      </div>
    </div>
  );
}

export default PagnavMobileInvest;
