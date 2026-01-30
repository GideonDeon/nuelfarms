const backGround = [
  {
    id: 1,
    background: "/images/layers.png",
    text: "Layers",
  },
  {
    id: 6,
    background: "/images/broilers.jpg",
    text: "Broilers",
  },
  {
    id: 2,
    background: "/images/egg.jpg",
    text: "Eggs",
  },
  {
    id: 3,
    background: "/images/catfish_two.png",
    text: "Catfish",
  },
  {
    id: 4,
    background: "/images/processed_chicken.jpg",
    text: "Processed Chicken",
  },
  {
    id: 5,
    background: "/images/feed.png",
    text: "Feeds",
  },
];
function BodyTwo() {
  return (
    <div id="products">
      <h1 className="mt-6 font-bold text-4xl ml-2 mb-2 text-center">Our Products</h1>
      <p className="text-center">
        We supply fresh, quality-assured poultry products to home and
        businesses.
      </p>
      <div className="p-5">
        {backGround.map((bg) => (
          <div
            key={bg.id}
            style={{backgroundImage: `url(${bg.background})`}}
            className="group ${bg.background} bg-no-repeat bg-cover bg-center h-80 w-full relative cursor-pointer"
          >
            <span className="block h-10 w-full absolute bottom-0 pl-2 pt-2 bg-black/50 text-white text-[16px] group-hover:opacity-0 italic transition-all duration-300">
              {bg.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BodyTwo;
