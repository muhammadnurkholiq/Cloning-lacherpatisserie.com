// next
import Head from "next/head";

// bootstrap
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

// iconfy
import { Icon } from "@iconify/react";

// css
import Styles from "../../assets/css/components/navbar.module.css";

// image
import LogoNav from "../../assets/images/logo-nav.png";

export default function navbar() {
  return (
    <>
      {/* head html */}
      <Head>
        <title>Online French Inspired Cake Shop - KL & PJ delivery</title>
        <meta
          name="description"
          content="Online cake shop serving the finest French desserts in KL and Selangor - perfect for birthdays, anniversaries, gifting. Same day delivery! 100% halal ingredients. All our cakes are professionally made with the finest ingredients."
        />
        {/* icon */}
        <link
          rel="icon"
          href="//cdn.shopify.com/s/files/1/0040/2305/8561/files/favicon_db0de3e0-3249-45b3-be51-d7d45556048f_32x32.png?v=1641050290"
        />
      </Head>

      {/* content */}
      <div className={Styles.container}>
        {/* notification */}
        <div className={Styles.notification}>
          <div md={12}>
            <p className={Styles.notification_P}>
              Order by 2pm for same day delivery/pickup. Latest pickup by 6pm.
            </p>
          </div>
        </div>
        {/* header content */}
        <div className={Styles.headerContainer}>
          <div className={Styles.headerContent}>
            <div className={Styles.appLogo}>
              <img
                src={LogoNav.src}
                alt="Lacherpatisserie"
                className={Styles.logoImage}
              />
            </div>
            <div className={Styles.appAction}>
              <Icon icon="feather:user" className={Styles.headerIcon} />
              <div className={Styles.appCart}>
                <Icon
                  icon="feather:shopping-cart"
                  className={Styles.headerIcon}
                />
                <span className={Styles.cart}>0</span>
              </div>
            </div>
          </div>
          <div className={Styles.headerNavbar}>
            <Navbar expand="lg">
              <Container className={Styles.navbarContainer}>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className={Styles.toogle}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    {/* home */}
                    <Nav.Link href="/" className={Styles.navLink}>
                      Home
                    </Nav.Link>
                    {/* Same Day Delivery */}
                    <Nav.Link href="#" className={Styles.navLink}>
                      Same Day Delivery
                    </Nav.Link>
                    {/* 1 Day Preorder */}
                    <Nav.Link href="#" className={Styles.navLink}>
                      1 Day Preorder
                    </Nav.Link>
                    {/* All Products */}
                    <NavDropdown
                      title="All Products"
                      id="basic-nav-dropdown"
                      className={Styles.navLink}
                    >
                      <NavDropdown.Item href="#" className={Styles.navLink}>
                        Whole Cake
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#" className={Styles.navLink}>
                        Individual Dessert
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#" className={Styles.navLink}>
                        Limited Edition
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#" className={Styles.navLink}>
                        Add-Ons
                      </NavDropdown.Item>
                    </NavDropdown>
                    {/* Delivery & Pickup */}
                    <NavDropdown
                      title="Delivery & Pickup"
                      id="basic-nav-dropdown"
                      className={Styles.navLink}
                    >
                      <NavDropdown.Item href="#" className={Styles.navLink}>
                        Delivery Information
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#" className={Styles.navLink}>
                        Pickup Information
                      </NavDropdown.Item>
                    </NavDropdown>
                    {/* FAQs */}
                    <NavDropdown
                      title="FAQs"
                      id="basic-nav-dropdown"
                      className={Styles.navLink}
                    >
                      <NavDropdown.Item href="#" className={Styles.navLink}>
                        FAQs
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#" className={Styles.navLink}>
                        How To Choose The Flavour
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#" className={Styles.navLink}>
                        Allergen and Diet Information
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" className={Styles.navLink}>
                      About Us
                    </Nav.Link>
                    <Nav.Link href="#" className={Styles.navLink}>
                      Contact Us
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
        {/* header navbar */}
      </div>
    </>
  );
}
