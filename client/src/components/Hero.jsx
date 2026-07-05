import "./Hero.css";

import heroImage from "../assets/hero.jpg";

function Hero() {

  return (

    <section className="hero">

      <img
        src={heroImage}
        alt="Hero"
        className="hero-image"
      />


      <div className="hero-overlay">

        <h1>

          Not sure where to go?

        </h1>


        <p>

          Perfect.

        </p>


        <button>

          Flexible

        </button>

      </div>

    </section>

  );

}

export default Hero;