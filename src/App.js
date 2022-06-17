import "./styles.css";
import mastercard from "./mastercard.jpg";
import paypal from "./paypal.jpg";
import visa from "./visa.jpg";
import chip from "./chip.png";
import profile from "./profile.jpeg";

function App() {
  return (
    <div className="main_box">
      <nav className="nav_bar">
        <p>TRIPS</p>
        <p>RECENTLY VIEWED</p>
        <p>BOOKINGS</p>
        <div className="profile_pic">
          <img className="profile_pic" src={profile} alt="Profile" />
        </div>
      </nav>
      <main className="display_box">
        <section className="card_display_section">
          <div>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
              }}
            >
              Payment Information
            </p>
            <p style={{ color: "gray" }}>Choose your method of payment</p>
          </div>
          <div className="credit_card">
            <div className="card_details">
              <p>CARD NUMBER</p>
              <p style={{ fontSize: "1.1rem" }}>4324 5433 9382 1030</p>
              <div className="card_chip">
                <img className="card_chip" src={chip} alt="credit card chip" />
              </div>
              <p>EXPIRATION DATE</p>
              <p style={{ fontSize: "1.1rem" }}>03/24</p>
              <p>John Doe</p>
            </div>
            <img
              className="mastercard_logo"
              src={mastercard}
              alt="mastercard logo"
            />
          </div>
        </section>
        <section className="form_section">
          <div className="payment_options_logos">
            <img className="img_bar" src={visa} alt="visa" />
            <img className="img_bar" src={paypal} alt="paypal" />
          </div>
          <form>
            <div>
              <div className="input_block">
                <label for="credit_card_number">Credit card number</label>
                <br></br>
                <input
                  type="text"
                  id="credit_card_number"
                  name="credit_card_number"
                  value="4333 7658 9349 0065"
                  className="input_field"
                />
              </div>
              <div className="input_block">
                <label for="expiration_date">Expiration date</label>
                <br></br>
                <input
                  id="expiration_date"
                  name="expiration_date"
                  value="03/24"
                  className="input_field"
                />
              </div>
            </div>
            <div>
              <div className="input_block">
                <label for="security_code">Security code</label>
                <br></br>
                <input
                  id="security_code"
                  name="security_code"
                  value="420"
                  className="input_field"
                />
              </div>

              <div className="input_block">
                <label for="postal_code">Postal code</label>
                <br></br>
                <input
                  id="postal_code"
                  name="postal_code"
                  value="17489"
                  className="input_field"
                />
              </div>
            </div>
            <div className="radio_input">
              <input
                type="radio"
                id="save_payment_method"
                name="save_payment_method"
                value="Use this card for next time purchase"
              />
              <label for="save_payment_method">
                Use this card for next time purchase
              </label>
            </div>

            <button>Add Card</button>
          </form>
        </section>
      </main>
      <div class="price_overview">
        <section class="invoice_breakdown">
          <p>Subtotal</p>
          <p>Estimated TAX</p>
          <p>
            Promotional Code: <span style={{ color: "gray" }}>Z4KXLM9A</span>
          </p>
        </section>
        <section class="price_values">
          <p>$290.25</p>
          <p>$50.99</p>
          <p>-$30.74</p>
        </section>
      </div>
      <footer>
        <button class="final_cta">Complete payment</button>
        <p style={{ fontSize: "1.5rem", fontWeight: "800" }}>TOTAL: $310.50</p>
      </footer>
    </div>
  );
}

export default App;
