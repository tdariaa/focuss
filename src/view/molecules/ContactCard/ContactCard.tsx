import { ContactCardType } from "./utils";
import s from "./ContactCard.module.scss";

export const ContactCard = ({ title, link }: ContactCardType) => (
  <div className={s.container}>
    <div className={s.wrapperContacts}>
      <p className={s.title}>{title}</p>
      <p className={s.link}>{link}</p>
    </div>
  </div>
);
