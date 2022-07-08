// css
import Styles from "../../assets/css/components/blog.module.css";

export default function blog({ image, title, desc }) {
  return (
    <div className={Styles.blog}>
      <img src={image} className={Styles.blogImage} />
      <h1 className={Styles.blogTitle}>{title}</h1>
      <p className={Styles.blogDesc}>{desc}</p>
      <a href="/" className={Styles.blogNav}>
        Read More
      </a>
    </div>
  );
}
