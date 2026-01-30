import { useEffect, useState } from "react";
const BgSlide = [
  {
    image: "/images/bg_pond.png",
    text: "nuel farms & services",
    text2: "Reliable Poultry, Catfish Supply and Agricultural Consulting",
    text3: "Discover",
    href:"#products"
  },
  {
    image: "/images/layers_two.png",
    text: "Our Core Services",
    text2:
      "Nuel Farm & Services provides poultry production and supply, catfish farming and distribution.",
    text3: "Find Out",
    href:"#services"
  },
  {
    image: "/images/ct.jpg",
    text: "Consultation Services",
    text2: "We also provide agricultural consultation and farm setup support.",
    text3: "Contact US",
    href:"#contacts"
  },
];
function Header() {
  return (
    <div id="home">
      <Carousel />
    </div>
  );
}

function Carousel() {
  const [index, setIndex] = useState(0);

  // Timed slide
  useEffect(() => {
    const nextSlide = () => {
      setIndex((prev) => (prev + 1) % BgSlide.length);
    };

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);
  return (
    <div>
      <div className="relative overflow-scroll no-scrollbar no-scrollbar::-webkit-scrollbar">
        <div className="h-screen w-full absolute bg-black/60 z-5"></div>
        <img
          src={BgSlide[index].image}
          alt={BgSlide[index].text}
          className="h-screen w-full animate-scale"
          key={index}
        />
        <div className="absolute top-[40%] text-white z-10 w-full font-raleway">
          <p className="text-3xl text-center uppercase font-bold">
            {BgSlide[index].text}
          </p>
          <p className="text-center p-2">{BgSlide[index].text2}</p>
          <span className="block text-center bg-[#f1cf69] text-[#7a6c43] py-2 px-2 w-30 rounded-[10px] relative mt-10 left-[50%] -translate-[50%]">
            <a href={BgSlide[index].href}>{BgSlide[index].text3}</a>
          </span>
          <div className="flex justify-center gap-2 mt-6">
            {BgSlide.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  i === index ? "bg-[#f1cf69] w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
