import { CommandInfoCardType } from "./utils";
import s from "./CommandInfoCard.module.scss";

export const CommandInfoCard = ({
  photo,
  title,
  info,
  contact,
}: CommandInfoCardType) => (
  <div className={s.container}>
    <img src={photo} alt={title} className={s.photo} />
    <div className={s.textWrapper}>
      <p className={s.title}>{title}</p>
      <p className={s.info}>{info}</p>
      <div className={s.numberWrapper}>
        <div className={s.icon}></div>
        <p className={s.contact}>{contact}</p>
      </div>
    </div>
  </div>
);
