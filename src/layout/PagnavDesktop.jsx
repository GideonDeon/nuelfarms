import { useRef } from "react";

const NavItems = [
  {
    id: 1,
    text: "Home",
    href: "#home",
  },
  {
    id: 2,
    text: "Services",
    href: "#services",
  },
  {
    id: 3,
    text: "Products",
    href: "#products",
  },
  {
    id: 4,
    text: "Comments",
    href: "#comments",
  },
  {
    id: 5,
    text: "Contacts",
    href: "#contacts",
  },
];

function PagnavDesktop() {
    const checkboxRef = useRef(null);

  const Onclick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };
  return (
    <div >
      <div className="z-30 h-25 w-full text-white hidden lg:flex flex-row gap-10 bg-black/20">
        <img
          src="/images/logo.png"
          alt="images"
          className="w-15 h-15 rounded-full mt-6 ml-10"
        />
        <ul className="flex flex-row justify-between items-center w-full mr-10 uppercase text-[12px]">
            <span className="flex flex-row gap-3 items-center pt-10 ml-5">
                {NavItems.map((items) => (
              <li
                key={items.id}
                onClick={Onclick}
                className="mb-5 w-fit font-bold hover:text-[#f1cf69] hover:after:block after:bg-[#f1cf69] after:h-1 after:w-5"
              >
                <a href={items.href}>{items.text}</a>
              </li>
            ))}
            </span>
            
            <a
              href="#contacts"
              onClick={Onclick}
              className="block border-2 rounded-[5px] border-[#f1cf69] mt-2 p-2 w-40 h-fit text-center text-[12px] font-bold uppercase hover:bg-[#f1cf69]/30"
            >
              Get in Touch
            </a>
        </ul>
      </div>
    </div>
  );
}

export default PagnavDesktop
