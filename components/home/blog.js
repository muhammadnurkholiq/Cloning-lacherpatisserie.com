// next
import Image from "next/image";
import Link from "next/link";

// css
import Styles from "../../assets/css/components/blog.module.css";

export default function Blog({ image, title, desc }) {
  return (
    <div className={Styles.blog}>
      <Image
        src={image}
        className={Styles.blogImage}
        alt={title}
        width="100%"
        height="100%"
      />
      <h1 className={Styles.blogTitle}>{title}</h1>
      <p className={Styles.blogDesc}>{desc}</p>
      <Link href="/" className={Styles.blogNav}>
        Read More
      </Link>
    </div>
  );
}
