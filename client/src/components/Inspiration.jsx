import "./Inspiration.css";

import dbn from "../assets/dbn.jpg";
import jhb from "../assets/jhb.jpg";
import kapa from "../assets/kapa.jpg";
import kruger from "../assets/kruger.jpg";
import paris from "../assets/paris.jpg";

const data = [
  { img: dbn, country: "South Africa", place: "Durban" },
  { img: jhb, country: "South Africa", place: "Johannesburg" },
  { img: kapa, country: "South Africa", place: "Cape Town" },
  { img: kruger, country: "South Africa", place: "Kruger Park" },
  { img: paris, country: "France", place: "Paris" },
];

function Inspiration() {
  return (
    <section className="inspiration">

      <h2>Inspiration for the next trip</h2>

      <div className="inspiration-grid">

        {data.map((item, index) => (
          <div className="card" key={index}>

            <img src={item.img} alt={item.place} />

            {/* TAG OVERLAY */}
            <div className="tag">
              <p className="country">{item.country}</p>
              <p className="place">{item.place}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Inspiration;