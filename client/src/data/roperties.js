import dbn from "../assets/dbn.jpg";
import jhb from "../assets/jhb.jpg";
import kapa from "../assets/kapa.jpg";
import kruger from "../assets/kruger.jpg";
import paris from "../assets/paris.jpg";

const properties = [
  {
    id: 1,
    title: "Modern Apartment in Durban",
    city: "Durban",
    type: "Entire Apartment",
    description:
      "Beautiful beachfront apartment with ocean views and modern finishes.",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    rating: 4.9,
    reviews: 214,
    price: 1850,
    host: "Johann",
    image: dbn,
  },

  {
    id: 2,
    title: "Luxury Apartment in Johannesburg",
    city: "Johannesburg",
    type: "Entire Apartment",
    description:
      "Luxury apartment located in the heart of Sandton.",
    guests: 3,
    bedrooms: 2,
    bathrooms: 1,
    rating: 4.8,
    reviews: 152,
    price: 2100,
    host: "Sarah",
    image: jhb,
  },

  {
    id: 3,
    title: "Cape Town Sea View Apartment",
    city: "Cape Town",
    type: "Entire Apartment",
    description:
      "Amazing sea views just minutes from the Waterfront.",
    guests: 5,
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.95,
    reviews: 310,
    price: 2500,
    host: "David",
    image: kapa,
  },

  {
    id: 4,
    title: "Kruger Safari Lodge",
    city: "Kruger",
    type: "Entire Lodge",
    description:
      "Experience wildlife from your private luxury lodge.",
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    rating: 5,
    reviews: 98,
    price: 3200,
    host: "Michael",
    image: kruger,
  },

  {
    id: 5,
    title: "Paris Romantic Studio",
    city: "Paris",
    type: "Entire Studio",
    description:
      "Romantic apartment close to the Eiffel Tower.",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    rating: 4.7,
    reviews: 401,
    price: 2750,
    host: "Emma",
    image: paris,
  },
];

export default properties;