import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Location from "./pages/Location";
import LocationDetails from "./pages/LocationDetails";
import Signup from "./pages/Signup";
import HostDashboard from "./pages/HostDashboard";
import MyListings from "./pages/MyListings";
import HostRoute from "./components/HostRoute";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/location/:id" element={<LocationDetails />} />
        <Route path="/signup" element={<Signup />} />
\        <Route path="/host" element={ <HostRoute> <HostDashboard /></HostRoute> }/>

<Route
    path="/my-listings"
    element={
        <HostRoute>
            <MyListings />
        </HostRoute>
    }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App