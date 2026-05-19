import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InvestPromptModal() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasShownModal = sessionStorage.getItem("investModalShown");

    if (!hasShownModal) {
      const timer = setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem("investModalShown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleInvest = () => {
    navigate("/invest");
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full mx-4">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-black/70 rounded-full text-white hover:cursor-pointer text-[12px] md:text-2xl font-bold"
        >
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </button>
        <div className="text-center">
          <FontAwesomeIcon
            icon="fa-solid fa-seedling"
            className="text-4xl text-[#4a8b71] mb-4"
          />
          <p className="text-gray-800 text-lg font-semibold mb-6">
            Invest in a shared 200-bird poultry unit while we handle feeding,
            management, and farm operations for you!
          </p>
          <button
            onClick={handleInvest}
            className="w-full bg-[#4a8b71] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#3d6d58] transition-colors uppercase"
          >
            INVEST
          </button>
        </div>
      </div>
    </div>
  );
}

export default InvestPromptModal;
