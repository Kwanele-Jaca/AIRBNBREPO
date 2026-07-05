import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import api from "../api/api";

import "./Location.css";

function Location() {
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [selectedCity, setSelectedCity] = useState("All Locations");

  useEffect(() => {
    loadProperties();
  }, []);

  async function loadProperties() {
    try {
      const res = await api.get("/properties");

      console.log("Properties:", res.data);

      setProperties(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  const cities = [
    "All Locations",
    ...new Set(properties.map((property) => property.city)),
  ];

  const filteredProperties =
    selectedCity === "All Locations"
      ? properties
      : properties.filter(
          (property) => property.city === selectedCity
        );

  return (
    <>
      <Header />

      <div className="location-page">

        <h1>Find your next stay</h1>

        <div className="filter-section">

          <label>Select Location</label>

          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

        </div>

        <div className="property-list">

          {filteredProperties.map((property) => (

            <div
              key={property._id}
              className="property-card"
              onClick={() => navigate(`/location/${property._id}`)}
            >

              <img
                src={
                  property.images?.length
                    ? property.images[0]
                    : "https://placehold.co/600x400?text=No+Image"
                }
                alt={property.title}
              />

              <div className="property-info">

                <h2>{property.title}</h2>

                <p>
                  <strong>{property.city}</strong>
                </p>

                <p>{property.type}</p>

                <p>{property.description}</p>

                <p>
                  {property.guests} Guests • {property.bedrooms} Bedrooms •{" "}
                  {property.bathrooms} Bathrooms
                </p>

                <p>
                  ⭐ {property.rating} ({property.reviews} Reviews)
                </p>

              </div>

              <div className="price">

                <h2>R{property.price}</h2>

                <p>per night</p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default Location;