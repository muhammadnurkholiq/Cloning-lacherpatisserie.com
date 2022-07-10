// iconfy
import { Icon } from "@iconify/react";

// css
import Styles from "../../assets/css/components/footer.module.css";

export default function Footer() {
  return (
    <div className={Styles.footerContainer}>
      <div className={Styles.footer}>
        <div className={Styles.desc}>
          <h1 className={Styles.title}>Lachér Patisserie</h1>
          <div className={Styles.detail}>
            <p className={Styles.p}>
              We serve quality French desserts in Malaysia. All our cakes are
              professionally made from scratch using only the finest halal
              ingredients. We provide same-day delivery to KL and Selangor (T&Cs
              apply).
            </p>
          </div>
        </div>
        <div className={Styles.social}>
          <h1 className={Styles.title}>Follow Our Socials</h1>
          <div className={Styles.detail}>
            <Icon icon="ant-design:facebook-filled" className={Styles.icon} />
            <Icon icon="akar-icons:instagram-fill" className={Styles.icon} />
            <Icon icon="bxl:tiktok" className={Styles.icon} />
          </div>
        </div>
        <div className={Styles.links}>
          <h1 className={Styles.title}>Quick Links</h1>
          <div className={Styles.detail}>
            <ol className={Styles.ol}>
              <li className={Styles.li}>
                <a className={Styles.a} href="#">
                  Same Day Delivery/Pickup
                </a>
              </li>
              <li className={Styles.li}>
                <a className={Styles.a} href="#">
                  Delivery Fee
                </a>
              </li>
              <li className={Styles.li}>
                <a className={Styles.a} href="#">
                  Pickup Information
                </a>
              </li>
              <li className={Styles.li}>
                <a className={Styles.a} href="#">
                  Allergen and Diet Information
                </a>
              </li>
              <li className={Styles.li}>
                <a className={Styles.a} href="#">
                  FAQs
                </a>
              </li>
              <li className={Styles.li}>
                <a className={Styles.a} href="#">
                  Blogs
                </a>
              </li>
              <li className={Styles.li}>
                <a className={Styles.a} href="#">
                  Join Our Team
                </a>
              </li>
              <li className={Styles.li}>
                <a className={Styles.a} href="#">
                  Contact Us
                </a>
              </li>
              <li className={Styles.li}>
                <a className={Styles.a} href="#">
                  Cancellation and Refund Policy
                </a>
              </li>
              <li className={Styles.li}>
                <a className={Styles.a} href="#">
                  Terms of Service
                </a>
              </li>
              <li className={Styles.li}>
                <a className={Styles.a} href="#">
                  Privacy Policy
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div className={Styles.info}>
          <h1 className={Styles.title}>Be In The Know</h1>
          <div className={Styles.detail}>
            <p className={Styles.p}>
              Join our mailing list for updates on new product launches and
              seasonal specials!
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter Email"
                className={Styles.input}
              />
              <button type="submit" className={Styles.button}>
                <Icon
                  icon="dashicons:arrow-right-alt2"
                  className={Styles.formIcon}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={Styles.copyright}>
        © 2022 Lacher Malaysia Sdn Bhd (1412523-D)
      </div>

      {/* script */}
      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossOrigin="anonymous"
        async
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
        integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
        crossOrigin="anonymous"
        async
      />
    </div>
  );
}
