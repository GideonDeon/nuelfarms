const text = [
  { text: "Consultation Services", id: 1 },
  { text: "Sales of fresh fish and fish feeds", id: 2 },
  { text: "Sales of farm-fresh eggs, live & processed chicken", id: 3 },
  { text: "Quality assurance and hygiene in all products", id: 4 },
  { text: "Custom feed formulations for specific poultry needs", id: 5 },
];
const img = [
  {
    id: 1,
    image: "/images/hen.png",
    text: "Live Chicken"
  },
  {
    id: 2,
    image: "/images/fish.png",
    text: "Fresh Catfish"
  },
  {
    id: 3,
    image: "/images/eggs.png",
    text: "Fresh Eggs"
  },
];
function BodyOne() {
  return (
    <div id="services" className="md:pt-10">
      <div className="md:grid grid-cols-[1fr_2fr]">
        <h1 className="mt-6 font-bold text-2xl ml-2 mb-5 sm:ml-0 sm:text-center md:text-left md:ml-10 md:text-[28px] lg:text-4xl lg:ml-25 xl:ml-30">
          Nuel Farms Integrated <span className="text-[#59c499]">Agricultural Products</span> & Services
        </h1>
        <div>
          <div className="w-full flex flex-col items-center gap-2 md:pl-3">
            {text.map((txt) => (
              <p
                key={txt.id}
                className="bg-[#4a8b71] text-white pt-2 pb-2 rounded-[14px] w-90 text-[14px] md:w-95 lg:text-[20px] lg:w-150 hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                <span className="inline-block w-5 h-5 lg:w-6 lg:h-6 bg-[#f1cf69] text-center text-[#7a6c43] rounded-[14px] -ml-2 mr-3">
                  &#10003;
                </span>
                {txt.text}
              </p>
            ))}
          </div>
          <div className="flex flex-3 justify-evenly mt-5">
          {img.map((images) => (
            <span key={images.id}>
              <img src={images.image} className="w-20 h-20 relative left-[50%] -translate-x-[50%]" />
              <p className="text-center font-bold">{images.text}</p>
            </span>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}


export default BodyOne;
