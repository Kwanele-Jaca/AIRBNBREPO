import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import api from "../api/api";

import "./LocationDetails.css";

function LocationDetails() {

    const { id } = useParams();

    const [property, setProperty] = useState(null);
    const [showReservation, setShowReservation] = useState(false);

    useEffect(() => {
        loadProperty();
    }, []);

    async function loadProperty() {
        try {

            const res = await api.get(`/properties/${id}`);

            console.log(res.data);

            setProperty(res.data);

        } catch (err) {
            console.error(err);
        }
    }

    if (!property) {
        return <h2 style={{ padding: "40px" }}>Loading...</h2>;
    }
    return (

        <>

            <Header />

            <div className="details-page">

                <h1 className="details-title">
                    {property.title}
                </h1>

                <p className="details-rating">

                    ⭐ {property.rating}

                    ({property.reviews} Reviews)

                    ·

                    {property.city}

                </p>

                {/* IMAGE GALLERY */}

                <div className="gallery">

                    <div className="gallery-left">

                        <img
                            src={property.images?.[0]}
                            alt={property.title}
                        />

                    </div>
<div className="gallery-right">

    {property.images?.slice(1, 5).map((image, index) => (

        <img
            key={index}
            src={image}
            alt=""
        />

    ))}

</div>

                </div>

                {/* MAIN CONTENT */}

                <div className="details-content">

                    <div className="left-column">

                        <h2>

                            Hosted by {property.host}

                        </h2>

                        <p>

                            {property.guests} guests •

                            {property.bedrooms} bedrooms •

                            {property.bathrooms} bathrooms

                        </p>

                        <hr />

                        <div className="feature">

                            ✔ Self Check-in

                        </div>

                        <div className="feature">

                            ✔ Enhanced Cleaning

                        </div>

                        <div className="feature">

                            ✔ Entire Apartment

                        </div>

                        <div className="feature">

                            ✔ Free Cancellation

                        </div>

                        <hr />
                        <h3>About this place</h3>

<p>{property.description}</p>

<hr />

{/* WHERE YOU'LL SLEEP */}

<h2>Where you'll sleep</h2>

<div className="sleep-card">

    <img
        src={property.image}
        alt="Bedroom"
    />

    <div>

        <h3>Bedroom</h3>

        <p>1 Queen Bed</p>

    </div>

</div>

<hr />

{/* WHAT THIS PLACE OFFERS */}

<h2>What this place offers</h2>

<div className="amenities">

    <div>📶 Free Wifi</div>

    <div>🍳 Kitchen</div>

    <div>🚗 Free Parking</div>

    <div>🌳 Garden View</div>

    <div>🏊 Swimming Pool</div>

    <div>🏋 Gym</div>

    <div>📺 TV</div>

    <div>🧺 Dryer</div>

    <div>📷 Security Cameras</div>

    <div>❄ Air Conditioning</div>

</div>

<hr />

{/* SECOND DATE PICKER */}

<h2>Select your stay</h2>

<div className="second-calendar">

    <div>

        <label>Check In</label>

        <input type="date" />

    </div>

    <div>

        <label>Check Out</label>

        <input type="date" />

    </div>

</div>

<hr />

{/* REVIEWS */}

<h2>★★★★★ Reviews</h2>

<div className="review-bars">

    <div>

        <span>Cleanliness</span>

        <progress value="95" max="100"></progress>

    </div>

    <div>

        <span>Communication</span>

        <progress value="98" max="100"></progress>

    </div>

    <div>

        <span>Accuracy</span>

        <progress value="94" max="100"></progress>

    </div>

    <div>

        <span>Location</span>

        <progress value="100" max="100"></progress>

    </div>

    <div>

        <span>Value</span>

        <progress value="90" max="100"></progress>

    </div>

</div>

<hr />

{/* COMMENTS */}

<h2>Guest Reviews</h2>

<div className="comments">

<div className="comment">

<img src="https://i.pravatar.cc/80?img=1" alt="" />

<div>

<h3>Sarah</h3>

<small>June 2026</small>

<p>

Amazing place! Everything was clean and exactly as advertised.

</p>

</div>

</div>

<div className="comment">

<img src="https://i.pravatar.cc/80?img=5" alt="" />

<div>

<h3>Michael</h3>

<small>May 2026</small>

<p>

The location was perfect. Would definitely stay here again.

</p>

</div>

</div>

<div className="comment">

<img src="https://i.pravatar.cc/80?img=8" alt="" />

<div>

<h3>Emily</h3>

<small>April 2026</small>

<p>

Excellent host and an easy check-in process.

</p>

</div>

</div>

</div>

<hr />

{/* HOST */}

<h2>Hosted by {property.host}</h2>

<p>

⭐ Superhost

</p>

<p>

Hosting for over 5 years

</p>

<p>

Response rate: 100%

</p>

<hr />

{/* HOUSE RULES */}

<h2>House Rules</h2>

<ul>

<li>✔ Check-in after 2:00 PM</li>

<li>✔ Check-out before 10:00 AM</li>

<li>✔ No Smoking</li>

<li>✔ No Parties</li>

<li>✔ No Pets</li>

</ul>

<hr />

{/* HEALTH */}

<h2>Health & Safety</h2>

<ul>

<li>✔ Carbon monoxide alarm</li>

<li>✔ Smoke alarm</li>

<li>✔ Exterior security cameras</li>

<li>✔ Enhanced cleaning process</li>

</ul>

<hr />

{/* CANCELLATION */}

<h2>Cancellation Policy</h2>

<p>

Free cancellation within 48 hours.

After that, partial refunds may apply according to Airbnb policies.

</p>
                    </div>
                  <div className="right-column">

    <div className="reservation-card">

        <h2>

            R{property.price}

            <span> / night</span>

        </h2>

        {/* Check In & Check Out */}

        <div className="date-container">

            <div className="date-box">

                <label>CHECK-IN</label>

                <input type="date" />

            </div>

            <div className="date-box">

                <label>CHECK-OUT</label>

                <input type="date" />

            </div>

        </div>

        {/* Guests */}

        <div className="guest-box">

            <label>GUESTS</label>

            <select>

                <option>1 Guest</option>

                <option>2 Guests</option>

                <option>3 Guests</option>

                <option>4 Guests</option>

                <option>5 Guests</option>

                <option>6 Guests</option>

            </select>

        </div>

        <button className="reserve-btn"
        onClick={()=>setShowReservation(true)}  >

            Reserve

        </button>

        <p className="note">

            You won't be charged yet

        </p>

        <hr />

        {/* Price Breakdown */}

        <div className="price-row">

            <span>4 nights</span>

            <span>R{property.price * 4}</span>

        </div>

        <div className="price-row">

            <span>Weekly Discount</span>

            <span>-R400</span>

        </div>

        <div className="price-row">

            <span>Cleaning Fee</span>

            <span>R350</span>

        </div>

        <div className="price-row">

            <span>Service Fee</span>

            <span>R250</span>

        </div>

        <div className="price-row">

            <span>Occupancy Tax</span>

            <span>R180</span>

        </div>

        <hr />

        <div className="total-price">

            <strong>Total</strong>

            <strong>

                R{property.price * 4 - 400 + 350 + 250 + 180}

            </strong>

        </div>

    </div>

</div>
                </div>

            </div>
            {showReservation && (
  <div className="reservation-overlay">
    <div className="reservation-popup">

      <h2> Reservation Confirmed!</h2>

      <p>
        Your reservation request has been received.
      </p>

      <p>
        <strong>{property.title}</strong>
      </p>

      <p>{property.city}</p>

      <p>
        Total:
        <strong> R{property.price}</strong>
      </p>

      <button
        onClick={() => setShowReservation(false)}
      >
        Close
      </button>

    </div>
  </div>
)}
            
            


        </>

    );

}

export default LocationDetails;