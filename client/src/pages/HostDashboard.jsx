import { useState } from "react";
import "./HostDashboard.css";
import api from "../api/api";

function HostDashboard() {
  const [form, setForm] = useState({
    title: "",
    city: "",
    type: "",
    price: "",
    guests: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
  });

  const [images, setImages] = useState([]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

 function handleImageChange(e) {
  const files = Array.from(e.target.files);

  if (files.length > 5) {
    alert("You can upload a maximum of 5 images.");
    return;
  }

  setImages(files);
}
async function handleSubmit(e) {
  e.preventDefault();

  try {

    // Upload images first
    const imageUrls = [];

    for (const image of images) {

      const formData = new FormData();

      formData.append("image", image);

      const upload = await api.post(
        "/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      imageUrls.push(upload.data.url);
    }

const property={

...form,

amenities:form.amenities
.split(",")
.map(item=>item.trim()),

whereYouWillSleep:{
    bedroom:form.bedroomName,
    bed:form.bedType,
},

images:imageUrls,

};

    await api.post("/properties", property);

    alert("Property Published!");

  } 
  catch (err) {
  console.error("Publish Error:", err);

  if (err.response) {
    console.log("Backend Response:", err.response.data);
    alert(err.response.data.message || JSON.stringify(err.response.data));
  } else {
    alert(err.message);
  }
}
}

  return (
    <div className="host-dashboard">

      <div className="host-card">

        <h1>Create your Listing</h1>

        <form onSubmit={handleSubmit}>

          <label>Property Title</label>
          <input
            name="title"
            onChange={handleChange}
            placeholder="Luxury Apartment in Durban"
          />

          <label>City</label>
          <input
            name="city"
            onChange={handleChange}
            placeholder="Durban"
          />

          <label>Property Type</label>

          <select
            name="type"
            onChange={handleChange}
          >
            <option>Apartment</option>
            <option>House</option>
            <option>Villa</option>
            <option>Cabin</option>
            <option>Lodge</option>
          </select>

          <label>Price per Night</label>

          <input
            name="price"
            type="number"
            onChange={handleChange}
          />
<label>Weekly Discount (%)</label>

<input
type="number"
name="weeklyDiscount"
onChange={handleChange}
/>

<label>Cleaning Fee</label>

<input
type="number"
name="cleaningFee"
onChange={handleChange}
/>

<label>Service Fee</label>

<input
type="number"
name="serviceFee"
onChange={handleChange}
/>

          <div className="host-grid">

            <div>
              <label>Guests</label>
              <input
                name="guests"
                type="number"
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Bedrooms</label>
              <input
                name="bedrooms"
                type="number"
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Bathrooms</label>
              <input
                name="bathrooms"
                type="number"
                onChange={handleChange}
              />
            </div>

          </div>
<label>Bedroom Name</label>

<input
placeholder="Master Bedroom"
name="bedroomName"
onChange={handleChange}
/>

<label>Bed Type</label>

<input
placeholder="King Bed"
name="bedType"
onChange={handleChange}
/>
<label>House Rules</label>

<textarea
rows="3"
name="houseRules"
onChange={handleChange}
/>

<label>Health & Safety</label>

<textarea
rows="3"
name="healthSafety"
onChange={handleChange}
/>

<label>Cancellation Policy</label>

<textarea
rows="3"
name="cancellationPolicy"
onChange={handleChange}
/>

          <label>Description</label>


          <textarea
            name="description"
            rows="6"
            onChange={handleChange}
          />
          <label>Amenities</label>

<input
placeholder="WiFi, Pool, Kitchen, Parking"
name="amenities"
onChange={handleChange}
/>

          <label>Property Images</label>
<input
  type="file"
  accept="image/*"
  multiple
  onChange={handleImageChange}
/>

<p
  style={{
    color: "#777",
    fontSize: "14px",
    marginTop: "5px",
  }}
>
  Upload up to 5 photos
</p>
          <div className="preview-container">

             {images.slice(0, 5).map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt=""
              />

            ))}

          </div>

          <button>
            Publish Listing
          </button>

        </form>

      </div>

    </div>
  );
}

export default HostDashboard;