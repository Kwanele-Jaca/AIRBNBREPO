import "./Experiences.css";

import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";

function Experiences() {
  return (
    <section className="experiences">

      <h2>Discover Airbnb Experiences</h2>

      <div className="experiences-grid">

        {/* LEFT */}
        <div className="exp-card">
          <img src={pic1} alt="Trip" />

          <div className="overlay">
            <h3>Things to do on your trip</h3>
            <button>Experiences</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="exp-card">
          <img src={pic2} alt="Home" />

          <div className="overlay">
            <h3>Things to do from Home</h3>
            <button>Online Experiences</button>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Experiences;