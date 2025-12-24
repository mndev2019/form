import { useState } from "react";
import "./App.css";
// import bgimage from "./assets/Image/bgh.png";
// import mgmobile from "./assets/Image/mobile.png"
import { FaCheckCircle, FaMoneyCheckAlt, FaSolarPanel } from "react-icons/fa";

function App() {
  const [state, setState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    const result = await response.json();

    if (result.success) {
      window.location.href = "https://holsolindia.com";
    }
  };

  return (
    // <div
    //   className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-10 md:py-0"
    //   style={{ backgroundImage: `url(${mgmobile})` }}
    // >
    <div
  className="
    min-h-screen flex items-center justify-center
    px-4 py-10 md:py-0
    bg-cover bg-center
    bg-[url('./assets/Image/mobile.png')]
    md:bg-[url('./assets/Image/bgh.png')]
  "
>
      <div className="max-w-6xl w-full grid md:grid-cols-2 md:gap-10 items-center">
        <div className="col-span-1">

        </div>
        {/* FORM CARD */}
        <div className="bg-gradient-to-r from-[#fbfdff] via-[#f1f7ff] to-[#e9f2ff] rounded-xl shadow-lg p-6 md:p-8 md:mt-0 mt-[100%]">
          <h2 className="text-lg font-semibold text-center mb-5 text-[#192e5b]">
            Book your FREE Solar Site Survey
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 ">

            {/* REQUIRED */}
            <input type="hidden" name="access_key" value="8fe568e7-7eeb-45c0-bb54-7847c67912cb" />
            <input type="hidden" name="subject" value="New Solar Lead - Holsol" />
            <input type="hidden" name="from_name" value="Holsol Solar Form" />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              className="input"
              required
            />

            <select name="city" className="input" required>
              <option value="">Select City</option>
              <option>Jaipur</option>
              <option>Agra</option>
              <option>Gorakhpur</option>
              <option>Lucknow</option>
              <option>Firozabad</option>
            </select>

            <select
              name="state"
              className="input"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            >
              <option value="">Select State</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
            </select>

            <select name="bill" className="input" required>
              <option>Monthly Electricity Bill</option>
              <option>2001 - 4000 INR</option>
              <option>4001 - 6000 INR</option>
              <option>6000+ INR</option>
            </select>

            <select name="capacity" className="input" required>
              <option>Preferred Solar Capacity (KW)</option>
              <option>3 KW</option>
              <option>5 KW</option>
              <option>10 KW</option>
            </select>

            <div>
              <p className="text-sm font-medium mb-2">Best Time Call</p>
              <div className="flex gap-4 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" name="call_time" value="Morning" required /> Morning
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="call_time" value="Afternoon" /> Afternoon
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="call_time" value="Evening" /> Evening
                </label>
              </div>
            </div>

            {/* SUBSIDY DISPLAY */}
            {state === "Rajasthan" && (
              <div className="w-full bg-green-100 text-green-700 font-semibold py-3 rounded-full text-center">
                Subsidy Available: ₹7,800
              </div>
            )}

            {state === "Uttar Pradesh" && (
              <div className="w-full bg-blue-100 text-blue-700 font-semibold py-3 rounded-full text-center">
                Subsidy Available: ₹1,02,000
              </div>
            )}

            <button
              type="submit"
              className="cursor-pointer w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 rounded-full"
            >
              Get My Festive Solar Offer
            </button>
          </form>

          <div className="flex flex-wrap gap-3 justify-between text-sm font-semibold text-[#192e5b] mt-5">
            <span className="flex items-center gap-1">
              <FaSolarPanel />
              PM Surya Ghar Subsidy
            </span>

            <span className="flex items-center gap-1">
              <FaMoneyCheckAlt />
              Easy EMI
            </span>

            <span className="flex items-center gap-1">
              <FaCheckCircle />
              Govt Empanelled
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;





