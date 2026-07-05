import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-grid">

        <div>
          <h4>Inspiration for future getaways</h4>

          <div className="tabs">
            <span>Popular</span>
            <span>Arts & culture</span>
            <span>Beach</span>
            <span>Mountains</span>
            <span>Outdoors</span>
            <span>Things to do</span>
            <span>Airbnb-friendly apartments</span>
          </div>
        </div>

      </div>


      {/* LIST SECTION */}
      <div className="footer-links">

        <div>
          <h5>Chicago</h5>
          <p>House rentals</p>
          <h5>Cleveland</h5>
          <p>Monthly Rentals</p>
          <h5>Tokyo</h5>
          <p>Vacation rentals</p>
        </div>

        <div>
          <h5>Lake Michigan</h5>
          <p>Cabin rentals</p>
          <h5>Barcelona</h5>
          <p>Monthly Rentals</p>
          <h5>Portland</h5>
          <p>Vacation rentals</p>
        </div>

        <div>
          <h5>Minneapolis</h5>
          <p>Apartment rentals</p>
          <h5>North Myrtle Beach</h5>
          <p>Villa rentals</p>
          <h5>Nice</h5>
          <p>Monthly Rentals</p>
        </div>

        <div>
          <h5>San Jose</h5>
          <p>Condo rentals</p>
          <h5>Sarasota</h5>
          <p>Monthly Rentals</p>
          <h5>Branson</h5>
          <p>House rentals</p>
        </div>

      </div>


      {/* SHOW MORE */}
      <div className="show-more">
        Show more
      </div>


      {/* BOTTOM SECTION */}
      <div className="bottom-footer">

        <div className="left">
          © 2026 Airbnb, Inc. · Privacy · Terms
        </div>

        <div className="right">
          English · ZAR
        </div>

      </div>

    </footer>
  );
}

export default Footer;