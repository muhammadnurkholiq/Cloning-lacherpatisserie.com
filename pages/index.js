// react
import React, { useState } from "react";

// react bootstrap
import { Carousel } from "react-bootstrap";

// iconfy
import { Icon } from "@iconify/react";

// css
import Styles from "../assets/css/pages/Home.module.css";

// components
import Navbar from "../components/Layout/navbar";
import Footer from "../components/Layout/footer";
import Adverts from "../components/home/adverts";
import Collection from "../components/home/collection";
import Blog from "../components/home/blog";
import Help from "../components/home/help";

// images
import CarouselImage from "../assets/images/carousel.jpg";

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* content */}
      <div className={Styles.home}>
        {/* carousel */}
        <img src={CarouselImage.src} className={Styles.carousel} />
        <div className={Styles.carouselDetail}>
          <h1 className={Styles.carouselTitle}>NEW FLAVOUR</h1>
          <h1 className={Styles.carouselDesc}>Uji Matcha Tart</h1>
          <div className={Styles.carouselType}>
            <h1 className={Styles.carouselTypeInfo}>Uji Matcha</h1>
            <Icon icon="bi:dot" />
            <h1 className={Styles.carouselTypeInfo}>Azuki</h1>
            <Icon icon="bi:dot" />
            <h1 className={Styles.carouselTypeInfo}>Entrement Tart</h1>
          </div>
          <btn className={Styles.carouselButton}>1 Day Pre-order</btn>
        </div>
        {/* adverts */}
        <div className={Styles.advertsContainer}>
          <Adverts
            icon="feather:truck"
            title="Delivery to PJ/KL (within 50km)"
            desc="Free delivery available*"
          />
          <div className={Styles.advertsLine} />
          <Adverts
            icon="feather:smile"
            title="Preorder Basis"
            desc="Freshness Guaranteed"
          />
          <div className={Styles.advertsLine} />
          <Adverts
            icon="feather:heart"
            title="Finest Ingredients"
            desc="100% Halal, No Alcohol"
          />
          <div className={Styles.advertsLine} />
          <Adverts
            icon="feather:award"
            title="Award Winning Chef"
            desc="Champion of 2016 Asian Pastry Cup"
          />
        </div>
        {/* collection*/}
        <div className={Styles.collectionContainer}>
          <div className={Styles.collection}>
            <Collection
              type="collection"
              image="https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/whole-cake_2100x.jpg?v=1641461225"
              title="Whole Cake"
            />
            <Collection
              type="collection"
              image="https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/individual-dessert_2100x.jpg?v=1641461226"
              title="Individual Dessert"
            />
            <Collection
              type="collection"
              image="https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/limited-edition_2100x.jpg?v=1649837060"
              title="Limited Edition"
            />
            <Collection
              type="collection"
              image="https://cdn.shopify.com/s/files/1/0040/2305/8561/collections/add-ons_2100x.jpg?v=1641461224"
              title="Add-Ons"
            />
          </div>
          <h1 className={Styles.collectionMonthlyTitle}>Monthly Bestsellers</h1>
          <div className={Styles.collectionMonthly}>
            <Collection
              type="collectionMonthly"
              image="https://cdn.shopify.com/s/files/1/0040/2305/8561/products/valrhona-caraibe-hazelnut-praline-01_3646be8b-1afe-4aec-8b90-5824445c1d9c_2100x.jpg?v=1644764724"
              title="Valrhona Caraibe Hazelnut Praline"
              title2="from RM115.00"
            />
            <Collection
              type="collectionMonthly"
              image="https://cdn.shopify.com/s/files/1/0040/2305/8561/products/uji-matcha-tart-01_2100x.jpg?v=1646536413"
              title="Uji Matcha Tart"
              title2="RM105.00"
              preOrder="1 day pre-order"
            />
            <Collection
              type="collectionMonthly"
              image="https://cdn.shopify.com/s/files/1/0040/2305/8561/products/citron-tart-01_2100x.jpg?v=1644764918"
              title="Citron Tart"
              title2="RM82.00"
            />
            <Collection
              type="collectionMonthly"
              image="https://cdn.shopify.com/s/files/1/0040/2305/8561/products/kochi-yuzu-mango-tart-01_a44ff425-3b2a-4a41-b22c-92c7badc8310_2100x.jpg?v=1644764856"
              title="Kochi Yuzu Mango Tart"
              title2="RM120.00"
            />
          </div>
        </div>
        {/* location */}
        <div className={Styles.locationContainer}>
          <img
            src="https://cdn.shopify.com/s/files/1/0040/2305/8561/files/storefront_65175bc7-c865-4345-aaf3-7159a050bfce_2100x.jpg?v=1617550765"
            className={Styles.locationImage}
          />
          <div className={Styles.locationDetails}>
            <div className={Styles.locationTop}>
              <h1 className={Styles.locationTitle}>Our Location</h1>
              <h1 className={Styles.locationTitle2}>
                <strong>Lachér Patisserie</strong>
              </h1>
              <p className={Styles.locationInfo}>A-1-11, Eve Suite,</p>
              <p className={Styles.locationInfo}>
                Jalan PJU 1A/41, Ara Damansara,
              </p>
              <p className={Styles.locationInfo}>47301,</p>
              <p className={Styles.locationInfo}>Petaling Jaya, Selangor.</p>
              <h1 className={Styles.locationTitle2}>
                <strong>Delivery & Pickup</strong>
              </h1>
              <p className={Styles.locationInfo}>Mon - Sun, 10am - 6pm</p>
              <p className={Styles.locationInfo}>(No dine-in)</p>
            </div>
            <btn className={Styles.locationButton}>Pickup Information</btn>
          </div>
        </div>
        {/* testimonial */}
        <div className={Styles.testimonialContainer}>
          <h1 className={Styles.testimonialTitle}>Testimonials</h1>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className={Styles.testimonialContent}
            controls={false}
            fade
            interval={2500}
          >
            <Carousel.Item>
              <div className={Styles.testimonialItem}>
                <div className={Styles.testimonialMessage}>
                  <p>
                    "Great service & selection, perfect for last minute gifts as
                    well with their same-day delivery! The lemon tart is always
                    a hit!"
                  </p>
                </div>
                <div className={Styles.testimonialUser}>
                  <p>Rebecca Jo-Rushdy (Google reviews)</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={Styles.testimonialItem}>
                <div className={Styles.testimonialMessage}>
                  <p>
                    "Delicate and scrumptious. Definitely top-notch dessert in
                    Msia. Will order again for future occasions!"
                  </p>
                </div>
                <div className={Styles.testimonialUser}>
                  <p>Siaujuen Chin (Google Review)</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={Styles.testimonialItem}>
                <div className={Styles.testimonialMessage}>
                  <p>
                    "Great service & selection, perfect for last minute gifts as
                    well with their same-day delivery! The lemon tart is always
                    a hit!" Rebecca Jo-Rushdy (Google reviews) "Delicate and
                    scrumptious. Definitely top-notch dessert in Msia. Will
                    order again for future occasions!" Siaujuen Chin (Google
                    Review) "Lacher Patisserie is my go to place when i need a
                    reliable birthday cake provider. I ordered the jivarra
                    mousse cake twice and hazelnut praline twice over the span
                    of 8 months (so many birthdays during MCO period!). The
                    cakes look good, simple and classy. Perfect for a small and
                    intimate bday celebration. Well done!"
                  </p>
                </div>
                <div className={Styles.testimonialUser}>
                  <p>Dirk WD (Google Review)</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={Styles.testimonialItem}>
                <div className={Styles.testimonialMessage}>
                  <p>
                    "I trust them with the quality of patisseries (HALAL & REAL
                    FINEST INGREDIENT) and delivery. Definitely if you are
                    looking for a true gourmand, they know how to be creative
                    with their desserts and understand how they travel to your
                    doorstop. Whatever you see on their website THAT is exactly
                    what you will get and more."
                  </p>
                </div>
                <div className={Styles.testimonialUser}>
                  <p>Thara Liyana Abdul Aziz (Google Review)</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={Styles.testimonialItem}>
                <div className={Styles.testimonialMessage}>
                  <p>
                    "This is one of the best bakers in KL! My favourite is their
                    valrhona cakes (hazelnut & raspberry) and the gateau fromage
                    (which is basically a cheesecake) is awesome too! Their mini
                    desserts are great if you want it for a small number of
                    people and want to try all the different types of cakes they
                    have."
                  </p>
                </div>
                <div className={Styles.testimonialUser}>
                  <p>Julie Lee (Google Review)</p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className={Styles.testimonialItem}>
                <div className={Styles.testimonialMessage}>
                  <p>
                    "the cake was delivered to me as a gift and when I had my
                    first bite on it I was OMG how come I never heard of this
                    shop!! the pastry is superb and being a fussy dessert eater,
                    their pastry is one of the best in kl. better than those 5
                    star dining places. really amazing"
                  </p>
                </div>
                <div className={Styles.testimonialUser}>
                  <p>Adeline Soo (Google Review)</p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        {/* blog */}
        <div className={Styles.blogContainer}>
          <h1 className={Styles.blogTitle}>From the blog</h1>
          <div className={Styles.blogContent}>
            <Blog
              image="https://cdn.shopify.com/s/files/1/0040/2305/8561/articles/cny-wishes_2100x.jpg?v=1641350220"
              title="25 Chinese New Year Wishes in Chinese & English for CNY 2022!"
              desc="One of the best ways to send your family and friends your good blessings
        for the year 2022 is of course, through words of encouragement,..."
            />
            <Blog
              image="https://cdn.shopify.com/s/files/1/0040/2305/8561/articles/2021-christmas-edition-slider_2100x.jpg?v=1639814151"
              title="2 captivating 2021 Christmas cakes that will WOW your friends and family!"
              desc="Don't you think it's time to spice up your Christmas dessert table with something new, fresh, and jaw-dropping all at the same time? We do!..."
            />
          </div>
          <btn className={Styles.blogButton}>View All</btn>
        </div>
      </div>
      {/* help */}
      <Help />
      {/* footer */}
      <Footer />
    </>
  );
}
