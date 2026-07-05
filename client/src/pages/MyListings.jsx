import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import "./MyListings.css";

function MyListings() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  async function fetchProperties() {

    try {

      const res = await api.get("/Properties");

      setProperties(res.data);

    } catch (err) {

      console.log(err);

    }

  }

  async function deleteProperty(id) {

    const confirmDelete = window.confirm(
      "Delete this property?"
    );

    if (!confirmDelete) return;

    try {

      await api.delete(`/properties/${id}`);

      alert("Property deleted!");

      fetchProperties();

    } catch (err) {

      console.log(err);

      alert("Delete failed");

    }

  }

  return (

    <div className="my-listings">
        <div className="dashboard-header">

    <h1>Host Dashboard</h1>

    <p>
        Manage your listings and reservations.
    </p>

    <div className="stats">

        <div className="stat-card">

            <h2>{properties.length}</h2>

            <p>Listings</p>

        </div>

        <div className="stat-card">

            <h2>0</h2>

            <p>Reservations</p>

        </div>

        <div className="stat-card">

            <h2>R0</h2>

            <p>Earnings</p>

        </div>

    </div>

</div>

      <div className="top">

        <h1>My Listings</h1>

        <Link to="/host">

          <button
          className="create-btn"
          >Create Listing</button>

        </Link>

      </div>

      <div className="listing-grid">

        {properties.map((property) => (

          <div
            key={property._id}
            className="listing-card"
          >

            <img
              src={property.images[0]}
              alt=""
            />

            <div className="listing-info">

              <h2>{property.title}</h2>

              <p>{property.city}</p>

              <p>{property.type}</p>

              <h3>R{property.price}/night</h3>

            </div>

            <div className="listing-buttons">

              <button
              className="edit-btn"
              >
                Edit</button>

              <button
              className="delete-btn"
                onClick={() =>
                  deleteProperty(property._id)
                }
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default MyListings;