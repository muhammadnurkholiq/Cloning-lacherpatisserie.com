// next
import Image from "next/image";

// css
import Styles from "../../assets/css/components/collection.module.css";

export default function Collection({ image, title, title2, type }) {
  return (
    <div className={Styles.collectionMonthly}>
      {type === "collection" ? (
        <>
          <Image
            src={image}
            className={Styles.imageMonthly}
            alt={title}
            width="100%"
            height="100%"
            layout="responsive"
          />
          <h1 className={Styles.title1}>{title}</h1>
        </>
      ) : (
        <>
          <Image
            src={image}
            className={Styles.imageMonthly}
            alt={title}
            width="100%"
            height="100%"
            layout="responsive"
          />
          <h1 className={Styles.titleMonthly}>{title}</h1>
          <h1 className={Styles.titleMonthly}>{title2}</h1>
        </>
      )}
      ;
    </div>
  );
}
