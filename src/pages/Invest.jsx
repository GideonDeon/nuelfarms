import PagnavMobileInvest from "../layout/PagnavMobileInvest";
import PagnavDesktopInvest from "../layout/PagnavDesktopInvest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../layout/Footer";

function Invest() {
  return (
    <div>
      <PagnavMobileInvest />
      <div
        className="relative bg-cover bg-center h-60 w-full lg:h-100"
        style={{ backgroundImage: "url('/images/layers.png')" }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/50 to-transparent"></div>
        <span className=" relative z-10">
          <PagnavDesktopInvest />
        </span>
        <div className="relative z-10 text-white pl-5 pt-15">
          <span className="text-5xl uppercase lg:text-7xl xl:text-9xl">Poultry</span>
          <br />
          <span className="text-2xl text-[#f1cf69] uppercase lg:text-4xl xl:text-6xl lg:pl-1 xl:pl-2">
            Layer Investment
          </span>
          <p className="bg-[#4a8b71] h-fit w-fit pl-2 pr-2 mt-5 text-white uppercase rounded-2xl animate-bounce xl:ml-2">
            <span className="h-0.5 w-3 bg-white inline-block mb-1"></span>
            &nbsp;200 birds production unit &nbsp;
            <span className="h-0.5 w-3 bg-white inline-block mb-1"></span>
            <br />
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-black text-center font-bold uppercase lg:mt-10">
          <span className="h-0.5 w-3 bg-black inline-block mb-1"></span>
          &nbsp;How the investment works &nbsp;
          <span className="h-0.5 w-3 bg-black inline-block mb-1"></span>
        </h1>
        <div className="text-justify p-2 lg:pl-20 lg:pr-20 xl:text-[20px]">
          <p>
            Nuel Farms investment is a layers poultry farming business. We raise
            egg-laying chickens, sell the eggs they produce daily, and share the
            profits with our investors.
          </p>
          <p>
            <span className="font-bold">What we do with your money - </span>
            Your contribution is pooled together with other investors in a group
            to fund a 200-bird poultry unit, covering the purchase of birds,
            feed, medications, and all farm management operations. You don’t
            lift a finger.
          </p>
          <p>
            <span className="font-bold">How you earn - </span> Once the birds
            reach laying age which is 5 to 6 months, they produce eggs daily.
            Those eggs are sold to the market consistently. Your returns come
            from that egg sales revenue monthly.
          </p>
          <p>
            <span className="font-bold">Is it safe? - </span> We currently have
            a batch ongoing, one of many, so this is a real, running, and
            consistent operation, not a new idea. We give regular updates, and
            we provide clear reporting on egg sales and returns.
          </p>
          <p>
            <span className="font-bold">What you get - </span> Participation in
            asset-backed production, Professional farm management, Periodic
            operational udates.
          </p>
        </div>
      </div>
      <InvestmentPackage />
      <InvestmentCard />
      <NextStep />
      <Footer />
    </div>
  );
}
function InvestmentPackage() {
  return (
    <div>
      <h1 className="text-black text-center font-bold uppercase mb-5 lg:mt-10">
        <span className="h-0.5 w-3 bg-black inline-block mb-1"></span>
        &nbsp;Investment Package &nbsp;
        <span className="h-0.5 w-3 bg-black inline-block mb-1"></span>
      </h1>
      <div className="w-80 h-40 border-2 border-[#4a8b71] rounded text-center mb-10 relative mx-auto">
        <p className="bg-[#4a8b71] text-white text-[16px] uppercase">
          Capital Requirements
        </p>
        <div>
          <p className="text-3xl font-bold">₦200,000</p>
          <p className="pt-2 pb-2 font-semibold">200 birds</p>
          <p className="font-semibold">12-months-cycle</p>
        </div>
      </div>
    </div>
  );
}
function InvestmentCard() {
  return (
    <div className="bg-[#4a8b71]/40 w-full h-fit p-1 grid grid-cols-2 gap-1 md:grid-cols-3">
      <div className="bg-white w-full h-45 p-2">
        <div className="text-[#4a8b71] text-center text-bold uppercase">
          <FontAwesomeIcon icon="fa-solid fa-calendar" className="text-3xl" />
          <span className="block">Project status</span>
        </div>
        <ol className="list-disc pl-5 mt-5 text-[12px] lg:text-[14px] xl:text-[16px]">
          <li>
            Current Batch: <span className="font-bold">10 weeks old.</span>
          </li>
          <li>
            Egg production begins:
            <span className="font-bold">18 - 20 weeks old.</span>
          </li>
        </ol>
      </div>
      <div className="bg-white w-full h-45 p-2">
        <div className="text-[#4a8b71] text-center text-bold uppercase">
          <FontAwesomeIcon icon="fa-solid fa-chart-pie" className="text-3xl" />
          <span className="block">Investment Structures</span>
        </div>
        <ol className="list-disc pl-5 mt-5 text-[12px] lg:text-[14px] xl:text-[16px]">
          <li>
            Total Unit: <span className="font-bold">200.</span>
          </li>
          <li>Investors participate in shared production.</li>
          <li>Full managed farm operation.</li>
        </ol>
      </div>
      <div className="bg-white w-full h-45 p-2">
        <div className="text-[#4a8b71] text-center text-bold uppercase">
          <FontAwesomeIcon icon="fa-solid fa-coins" className="text-3xl" />
          <span className="block">Production Estimate</span>
        </div>
        <ol className="list-disc pl-5 mt-5 text-[12px] lg:text-[14px] xl:text-[16px]">
          <li>
            <span className="font-bold text-[#f1cf69]">120</span> eggs/day-
            Conservative
          </li>
          <li>
            <span className="font-bold text-[#f1cf69]">120-130</span> eggs/day -
            Average
          </li>
          <li>
            Up to <span className="font-bold text-[#f1cf69]">150</span> eggs/day
            - Peak
          </li>
        </ol>
      </div>
      <div className="bg-white w-full h-45 p-2">
        <div className="text-[#4a8b71] text-center text-bold uppercase">
          <FontAwesomeIcon icon="fa-solid fa-chart-line" className="text-3xl" />
          <span className="block">Revenue Model</span>
        </div>
        <ol className="list-disc pl-5 mt-5 text-[12px] lg:text-[14px] xl:text-[16px]">
          <li>Eggs sold daily (Cash Flow System)</li>
          <li>Market dependent pricing</li>
        </ol>
      </div>
      <div className="bg-white w-full h-45 p-2">
        <div className="text-[#4a8b71] text-center text-bold uppercase">
          <FontAwesomeIcon
            icon="fa-solid fa-hand-holding-dollar"
            className="text-3xl"
          />
          <span className="block">Return Structure</span>
        </div>
        <ol className="list-disc pl-5 mt-5 text-[12px] lg:text-[14px] xl:text-[16px]">
          <li>Profit begins after laying starts</li>
          <li>
            Estimated Annual Returns:
            <span className="font-bold text-[#f1cf69]">20%-35%</span>{" "}
            (performance based)
          </li>
        </ol>
      </div>
      <div className="bg-white w-full h-45 p-2">
        <div className="text-[#4a8b71] text-center text-bold uppercase">
          <FontAwesomeIcon
            icon="fa-solid fa-triangle-exclamation"
            className="text-3xl"
          />
          <span className="block">Risk Factors</span>
        </div>
        <ol className="list-disc pl-5 mt-5 text-[12px] lg:text-[14px] xl:text-[16px]">
          <li>Feed cost fluctuations</li>
          <li>Market price variability</li>
          <li>Mortality (actively managed)</li>
        </ol>
      </div>
    </div>
  );
}

function NextStep() {
  return (
    <div className="bg-[#4a8b71] pb-2">
      <h1 className="text-white text-center font-bold uppercase mb-5">
        <span className="h-0.5 w-3 bg-white inline-block mb-1"></span>
        &nbsp; Next Step &nbsp;
        <span className="h-0.5 w-3 bg-white  inline-block mb-1"></span>
      </h1>
      <p className="text-center text-white mb-5">
        If you're interested in investing or want to learn more, please contact
        us.
      </p>
      <div className="pl-2 pr-2 text-center">
        <p className="mb-2 text-white">
          <a
            href="tel:+2347032760850"
            className="bg-white text-black pl-1 pr-1 pb-1 rounded-[10px]"
          >
            +2347032760850
          </a>
          &nbsp; or &nbsp;
          <a
            href="tel:+2347069718984"
            className="bg-white text-black pl-1 pr-1 pb-1 rounded-[10px]"
          >
            +2347069718984
          </a>
        </p>
        <p className="text-white mb-2">
          <a
            href="mailto:nuelfarms09@gmail.com"
            className="bg-white text-black pl-1 pr-1 pb-1 rounded-[10px]"
          >
            nuelfarms09@gmail.com
          </a>
        </p>
        <p className="mb-10 text-white">
          <a
            href="https://wa.me/+2347032760850"
            target="_blank"
            className="bg-white text-black pl-1 pr-1 pb-1 hover:pr-1 rounded-[10px]"
          >
            Chat on WhatsApp
          </a>
        </p>
        <p className="text-white">
          <FontAwesomeIcon icon="fa-solid fa-seedling" className="" /> &nbsp;
          Your Investment. Our Management. Profitable Returns
        </p>
      </div>
    </div>
  );
}

export default Invest;
