// iconfy
import { Icon } from "@iconify/react";

// css
import Styles from "../../assets/css/components/adverts.module.css";

export default function adverts({ icon, title, desc }) {
  return (
    <div className={Styles.adverts}>
      <div className={Styles.iconSide}>
        <Icon icon={icon} className={Styles.icon} />
      </div>
      <div className={Styles.detailSide}>
        <h1 className={Styles.title}>{title}</h1>
        <h1 className={Styles.desc}>{desc}</h1>
      </div>
    </div>
  );
}
