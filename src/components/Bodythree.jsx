import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
const slides = [
  {
    id: 1,
    title: "Mr Kunle, Osogbo",
    title2: "",
    comment:
      "I have been buying poultry products and catfish from Nuel Farm & Services, and the quality has always been very good. They are reliable and deliver on time.",
    space: " ",
  },
  {
    id: 2,
    title: "Mrs Farotimi, Osogbo",
    title2: "(Restaurant Owner)",
    comment:
      "Working with Nuel Farm & Services has been a good experience for us. Their poultry products and catfish are always fresh. We are satisfied with their service and will continue working with them.",
  },
  {
    id: 3,
    title: "Mr Anu, Ibadan",
    title2: "(Poultry Farmer)",
    comment:
      "Nuel Farm & Services has been consistent in both product quality and support. We received proper guidance during our farm setup, and the results have been positive. They are trustworthy and professional in their dealings.",
  },
];

function Bodythree() {
  return (
    <div>
      <Carousel />
      <Contact />
    </div>
  );
}

function Carousel() {
  const [index, setIndex] = useState(0);

  // Timed slide
  useEffect(() => {
    const nextSlide = () => {
      setIndex((prev) => (prev + 1) % slides.length);
    };

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div id="comments" className="bg-[url('images/bg_what.jpg')] bg-no-repeat bg-center bg-cover bg-black/50 bg-blend-color text-white  pt-5 pb-10">
      <h1 className="mt-6 font-bold text-4xl ml-2 mb-2 text-center">
        What People Say
      </h1>
      <p className="text-center mt-5 font-bold">
        {slides[index].title}
        &nbsp;
        <span className="text-[10px]">{slides[index].title2}</span>
      </p>
      <p className="text-center p-5">"{slides[index].comment}"</p>
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, i) => (
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
  );
}

function Contact() {
  return (
    <div id="contacts">
      <div className="bg-[#4a8b71] text-white pb-5">
        <h1 className="text-4xl font-bold pt-2 pb-2 ml-2">Contacts</h1>
        <p className="pl-2 pr-2">
          Contact us for quality poultry, catfish, and farm consultancy
          services. We look forward to working with you.
        </p>
        <div className="mt-10">
          <span className="flex flex-2 gap-2 m-2">
            <FontAwesomeIcon
              icon="fa-solid fa-location-dot"
              className="pt-1 text-2xl"
            />
            <a
              href="https://maps.app.goo.gl/J7fkmD1BqW3cZGdf7"
              className="hover:bg-white hover:text-[#4a8b71] hover:pl-1 hover:pr-1 hover:rounded-[10px]"
            >
              Adeleke Street, Mosafejo Area, Kelebe, Osogbo, Osun state
            </a>
          </span>
          <span className="flex flex-2 gap-1 m-2">
            <FontAwesomeIcon
              icon="fa-solid fa-phone"
              className="pt-1 text-2xl"
            />
            <a
              href="tel:+2347032760850"
              className="hover:bg-white hover:text-[#4a8b71] hover:pl-1 hover:pr-1 hover:rounded-[10px]"
            >
              +2347032760850,
            </a>
            &nbsp;
            <a
              href="tel:+2347069718984"
              className="hover:bg-white hover:text-[#4a8b71] hover:pl-1 hover:pr-1 hover:rounded-[10px]"
            >
              +2347069718984
            </a>
          </span>
          <span className="flex flex-2 gap-1 mt-3 ml-2 mr-2">
            <FontAwesomeIcon
              icon="fa-solid fa-envelope"
              className="pt-1 text-2xl"
            />
            <a
              href="mailto:nuelfarms09@gmail.com"
              className="underline hover:bg-white hover:text-[#4a8b71] hover:pl-1 hover:pr-1 hover:rounded-[10px]"
            >
              nuelfarms09@gmail.com
            </a>
          </span>
        </div>
        <div
          id="home"
          className="mt-10 w-fit relative left-[50%] -translate-x-[50%]"
        >
          <a href="https://wa.me/+2347032760850" target="_blank">
            <FontAwesomeIcon
              icon="fa-brands fa-square-whatsapp"
              className="text-2xl inline-block hover:-translate-y-2"
            />
          </a>
          <a href="http://" target="_blank">
            <FontAwesomeIcon
              icon="fa-brands fa-square-facebook"
              className="text-2xl inline-block hover:-translate-y-2"
            />
          </a>
          <a href="https://x.com/nuelfarms09" target="_blank">
            <FontAwesomeIcon
              icon="fa-brands fa-square-twitter"
              className="text-2xl inline-block hover:-translate-y-2"
            />
          </a>
          <a href="https://t.me/NUELfarms" target="_blank">
            <FontAwesomeIcon
              icon="fa-brands fa-telegram"
              className="text-2xl inline-block hover:-translate-y-2"
            />
          </a>
        </div>
      </div>
      <div>
        <iframe
          className="w-full h-50 border border-[#4a8b71] hidden"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1976.4511332411992!2d4.590042158954059!3d7.800171232555301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1769527573679!5m2!1sen!2sng"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
export default Bodythree;
