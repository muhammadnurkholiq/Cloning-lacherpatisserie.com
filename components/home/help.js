// react
import { useState } from "react";

// bootstrap
import { Alert } from "react-bootstrap";

// iconfy
import { Icon } from "@iconify/react";

// css
import Styles from "../../assets/css/components/help.module.css";

export default function Help() {
  const [help, setHelp] = useState(false);
  const [helpMenu, setHelpMenu] = useState(true);
  const [alerts, setAlerts] = useState(true);

  const handleHelp = () => {
    setHelp(true);
  };

  const handleCloseHelpMenu = () => {
    setHelp(false);
  };

  const handleDetailHelp = () => {
    setHelpMenu(false);
  };

  const handleCloseDetailHelp = () => {
    setHelpMenu(true);
  };

  return (
    <>
      {!help ? (
        <>
          <div className={Styles.help}>
            {alerts && (
              <Alert
                variant="light"
                onClose={() => setAlerts(false)}
                className={Styles.notification}
                dismissible
              >
                <p onClick={handleHelp}>Click me for help :)</p>
              </Alert>
            )}
            <div className={Styles.action} onClick={handleHelp}>
              <Icon icon="akar-icons:question" className={Styles.icon} />
            </div>
          </div>
        </>
      ) : (
        <>
          {helpMenu ? (
            <div className={Styles.helpMenu}>
              <div className={Styles.helpMenuHeader}>
                {/* action */}
                <div className={Styles.helpMenuAction}>
                  <div className={Styles.helpMenuSearch}>
                    <Icon icon="bi:search" className={Styles.helpMenuIconS} />
                  </div>
                  <Icon
                    icon="clarity:email-line"
                    className={Styles.helpMenuIcon}
                  />
                  <Icon icon="bx:link-alt" className={Styles.helpMenuIcon} />
                </div>
                {/* close */}
                <div className={Styles.helpMenuClose}>
                  <div
                    className={Styles.helpMenuX}
                    onClick={handleCloseHelpMenu}
                  >
                    <Icon
                      icon="bytesize:close"
                      className={Styles.helpMenuIconClose}
                      onClick={handleCloseHelpMenu}
                    />
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className={Styles.helpMenuWaves}
              >
                <path
                  fill="#88694e"
                  fillOpacity={1}
                  d="M0,96L120,101.3C240,107,480,117,720,106.7C960,96,1200,64,1320,48L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                ></path>
              </svg>
              <div className={Styles.helpMenuBody}>
                <div className={Styles.CategoriesContainer}>
                  <h1 className={Styles.helpMenuTitle}>FAQ Categories</h1>
                  {/* categories */}
                  <div className={Styles.categories}>
                    <div className={Styles.helpMenuBox}>
                      <div className={Styles.helpMenuBoxIconPink}>
                        <h1 className={Styles.helpMenuBoxUser}>Or</h1>
                      </div>
                      <h1 className={Styles.helpMenuBoxUsername}>Ordering</h1>
                    </div>
                    <div className={Styles.helpMenuBox}>
                      <div className={Styles.helpMenuBoxIconGreen}>
                        <h1 className={Styles.helpMenuBoxUser}>De</h1>
                      </div>
                      <h1 className={Styles.helpMenuBoxUsername}>Delivery</h1>
                    </div>
                    <div className={Styles.helpMenuBox}>
                      <div className={Styles.helpMenuBoxIconGreen}>
                        <h1 className={Styles.helpMenuBoxUser}>In</h1>
                      </div>
                      <h1 className={Styles.helpMenuBoxUsername}>
                        In Store Pick Up
                      </h1>
                    </div>
                    <div className={Styles.helpMenuBox}>
                      <div className={Styles.helpMenuBoxIconOrange}>
                        <h1 className={Styles.helpMenuBoxUser}>Pr</h1>
                      </div>
                      <h1 className={Styles.helpMenuBoxUsername}>Products</h1>
                    </div>
                  </div>

                  {/* question */}
                  <h1 className={Styles.helpMenuTitle}>Popular Questions</h1>
                  {/* content */}
                  <div
                    className={Styles.helpMenuQuestionBox}
                    onClick={handleDetailHelp}
                  >
                    <div className={Styles.helpMenuQuestionBoxPink}>
                      <h1 className={Styles.helpMenuBoxUser}>Or</h1>
                    </div>
                    <div className={Styles.helpMenuQuestion}>
                      <h1 className={Styles.helpMenuQuestionDesc}>
                        How to order?
                      </h1>
                      <h1 className={Styles.helpMenuQuestionType}>Ordering</h1>
                    </div>
                  </div>
                  <div
                    className={Styles.helpMenuQuestionBox}
                    onClick={handleDetailHelp}
                  >
                    <div className={Styles.helpMenuQuestionBoxPink}>
                      <h1 className={Styles.helpMenuBoxUser}>Or</h1>
                    </div>
                    <div className={Styles.helpMenuQuestion}>
                      <h1 className={Styles.helpMenuQuestionDesc}>
                        How does the same-day delivery/pickup work?
                      </h1>
                      <h1 className={Styles.helpMenuQuestionType}>Ordering</h1>
                    </div>
                  </div>
                  <div
                    className={Styles.helpMenuQuestionBox}
                    onClick={handleDetailHelp}
                  >
                    <div className={Styles.helpMenuQuestionBoxPink}>
                      <h1 className={Styles.helpMenuBoxUser}>Or</h1>
                    </div>
                    <div className={Styles.helpMenuQuestion}>
                      <h1 className={Styles.helpMenuQuestionDesc}>
                        What are your bestsellers?
                      </h1>
                      <h1 className={Styles.helpMenuQuestionType}>Ordering</h1>
                    </div>
                  </div>
                  <div
                    className={Styles.helpMenuQuestionBox}
                    onClick={handleDetailHelp}
                  >
                    <div className={Styles.helpMenuQuestionBoxGreen}>
                      <h1 className={Styles.helpMenuBoxUser}>De</h1>
                    </div>
                    <div className={Styles.helpMenuQuestion}>
                      <h1 className={Styles.helpMenuQuestionDesc}>
                        How much is the delivery fee?
                      </h1>
                      <h1 className={Styles.helpMenuQuestionType}>Delivery</h1>
                    </div>
                  </div>
                  <div
                    className={Styles.helpMenuQuestionBox}
                    onClick={handleDetailHelp}
                  >
                    <div className={Styles.helpMenuQuestionBoxGreen}>
                      <h1 className={Styles.helpMenuBoxUser}>De</h1>
                    </div>
                    <div className={Styles.helpMenuQuestion}>
                      <h1 className={Styles.helpMenuQuestionDesc}>
                        Can I request for a specific delivery time?
                      </h1>
                      <h1 className={Styles.helpMenuQuestionType}>Delivery</h1>
                    </div>
                  </div>
                  <div
                    className={Styles.helpMenuQuestionBox}
                    onClick={handleDetailHelp}
                  >
                    <div className={Styles.helpMenuQuestionBoxGreen}>
                      <h1 className={Styles.helpMenuBoxUser}>Or</h1>
                    </div>
                    <div className={Styles.helpMenuQuestion}>
                      <h1 className={Styles.helpMenuQuestionDesc}>
                        What if the receiver is not present at the time of
                        delivery?
                      </h1>
                      <h1 className={Styles.helpMenuQuestionType}>Delivery</h1>
                    </div>
                  </div>
                  <div
                    className={Styles.helpMenuQuestionBox}
                    onClick={handleDetailHelp}
                  >
                    <div className={Styles.helpMenuQuestionBoxGreen}>
                      <h1 className={Styles.helpMenuBoxUser}>In</h1>
                    </div>
                    <div className={Styles.helpMenuQuestion}>
                      <h1 className={Styles.helpMenuQuestionDesc}>
                        How do I find your store?
                      </h1>
                      <h1 className={Styles.helpMenuQuestionType}>
                        In Store Pick Up
                      </h1>
                    </div>
                  </div>
                  <div
                    className={Styles.helpMenuQuestionBox}
                    onClick={handleDetailHelp}
                  >
                    <div className={Styles.helpMenuQuestionBoxGreen}>
                      <h1 className={Styles.helpMenuBoxUser}>In</h1>
                    </div>
                    <div className={Styles.helpMenuQuestion}>
                      <h1 className={Styles.helpMenuQuestionDesc}>
                        Can I come pickup earlier/later/anytime?
                      </h1>
                      <h1 className={Styles.helpMenuQuestionType}>
                        In Store Pick Up
                      </h1>
                    </div>
                  </div>
                  <div
                    className={Styles.helpMenuQuestionBox}
                    onClick={handleDetailHelp}
                  >
                    <div className={Styles.helpMenuQuestionBoxOrange}>
                      <h1 className={Styles.helpMenuBoxUser}>Pr</h1>
                    </div>
                    <div className={Styles.helpMenuQuestion}>
                      <h1 className={Styles.helpMenuQuestionDesc}>
                        Do you write messages on the cake?
                      </h1>
                      <h1 className={Styles.helpMenuQuestionType}>Products</h1>
                    </div>
                  </div>
                  <div
                    className={Styles.helpMenuQuestionBox}
                    onClick={handleDetailHelp}
                  >
                    <div className={Styles.helpMenuQuestionBoxOrange}>
                      <h1 className={Styles.helpMenuBoxUser}>Pr</h1>
                    </div>
                    <div className={Styles.helpMenuQuestion}>
                      <h1 className={Styles.helpMenuQuestionDesc}>
                        How long can the cake last in a car ride?
                      </h1>
                      <h1 className={Styles.helpMenuQuestionType}>Products</h1>
                    </div>
                  </div>
                  <div
                    className={Styles.helpMenuQuestionBox}
                    onClick={handleDetailHelp}
                  >
                    <div className={Styles.helpMenuQuestionBoxOrange}>
                      <h1 className={Styles.helpMenuBoxUser}>Pr</h1>
                    </div>
                    <div className={Styles.helpMenuQuestion}>
                      <h1 className={Styles.helpMenuQuestionDesc}>
                        Do you use halal ingredients? Does your cake contain
                        alcohol?
                      </h1>
                      <h1 className={Styles.helpMenuQuestionType}>Products</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={Styles.helpMenu}>
              <div className={Styles.helpMenuHeader}>
                <div className={Styles.helpMenuAction}>
                  <div className={Styles.helpMenuSearch}>
                    <Icon icon="bi:search" className={Styles.helpMenuIconS} />
                  </div>
                  <Icon
                    icon="clarity:email-line"
                    className={Styles.helpMenuIcon}
                  />
                  <Icon icon="bx:link-alt" className={Styles.helpMenuIcon} />
                </div>
                <div className={Styles.helpMenuClose}>
                  <div
                    className={Styles.helpMenuX}
                    onClick={handleCloseHelpMenu}
                  >
                    <Icon
                      icon="bytesize:close"
                      className={Styles.helpMenuIconClose}
                      onClick={handleCloseHelpMenu}
                    />
                  </div>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className={Styles.helpMenuWaves}
              >
                <path
                  fill="#88694e"
                  fillOpacity={1}
                  d="M0,96L120,101.3C240,107,480,117,720,106.7C960,96,1200,64,1320,48L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                ></path>
              </svg>
              <div className={Styles.helpMenuBody}>
                <div className={Styles.CategoriesContainer}>
                  {/* content */}
                  <div className={Styles.helpContent}>
                    <div className={Styles.helpContentHeader}>
                      <Icon
                        icon="akar-icons:arrow-left"
                        className={Styles.helpContentIcon}
                        onClick={handleCloseDetailHelp}
                      />
                      <div className={Styles.helpContentDesc}>
                        <h1 className={Styles.helpContentQuestion}>
                          How to order?
                        </h1>
                        <h1 className={Styles.helpContentType}>Ordering</h1>
                      </div>
                    </div>

                    <div className={Styles.helpContentBody}>
                      <ol className={Styles.helpContentBodyOl}>
                        <li className={Styles.helpContentBodyLi}>
                          Step 1: Browse the products.
                        </li>
                        <li className={Styles.helpContentBodyLi}>
                          Step 2 : Select your
                          <strong>
                            preferred date and time of delivery/pickup.
                          </strong>
                        </li>
                        <li className={Styles.helpContentBodyLi}>
                          Step 3 : Select candle/knife, enter the message you
                          would like us to print on the card.
                        </li>
                        <li className={Styles.helpContentBodyLi}>
                          Step 4 : Add to cart.
                        </li>
                        <li className={Styles.helpContentBodyLi}>
                          Step 5 : Select <strong>Delivery</strong> or
                          <strong>In-store Pickup</strong>. (Delivery fee will
                          be calculated after you have entered the delivery
                          details.)
                        </li>
                        <li className={Styles.helpContentBodyLi}>
                          Step 6 : Complete the payment.
                        </li>
                        <li className={Styles.helpContentBodyLi}>
                          Step 7: Your order is confirmed!
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
