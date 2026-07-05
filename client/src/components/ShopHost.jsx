import "./ShopHost.css";

import pic3 from "../assets/pic3.jpg";

function ShopHost() {
  return (
    <section className="shop-host">

      {/* SHOP AIRBNB SECTION */}
      <div className="shop-section">

        <div className="shop-left">

          <h2>Shop Airbnb gift cards</h2>

          <button className="black-btn">
            Learn more
          </button>

        </div>


        <div className="shop-right">

          <div className="card pink">Airbnb</div>

          <div className="card blue">Airbnb</div>

          <div className="card purple">Airbnb</div>

        </div>

      </div>


      {/* HOSTING BANNER SECTION */}
      <div className="host-banner">

        <img src={pic3} alt="Hosting" />

        <div className="host-overlay">

          <h2>Questions about hosting?</h2>

          <button className="black-btn">
            Ask Superhost
          </button>

        </div>

      </div>

    </section>
  );
}

export default ShopHost;