import logo from "./logo.svg";
import "./App.css";
import image from "./images/illustration-hero.svg";

function App() {
  return (
    <div className="container">
      <div className="order--container">
        <img src={image} />
        <div className="order--info--container">
          <div className="heading">Order Summary</div>
          <p>
            {" "}
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div>
            <div className="price--container">
              <div className="music--image"></div>
              <div className="price">
                <div>Annual Plan </div>
                <div>$59.99/year</div>
              </div>
              <a>Change</a>
            </div>
          </div>
          <button>Proceed to Payment</button>
          <div>Cancel Order</div>
        </div>
      </div>
    </div>
  );
}

export default App;
