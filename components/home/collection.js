// css
import Styles from "../../assets/css/components/collection.module.css";

export default function collection({ image, title, title2, preOrder, type }) {
  return type === "collection" ? (
    <div className={Styles.collection1}>
      <img src={image} className={Styles.image1} />
      <h1 className={Styles.title1}>{title}</h1>
    </div>
  ) : (
    <div className={Styles.collectionMonthly}>
      <img src={image} className={Styles.imageMonthly} />
      <h1 className={Styles.titleMonthly}>{title}</h1>
      <h1 className={Styles.titleMonthly}>{title2}</h1>
    </div>
  );
}
