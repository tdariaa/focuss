import { CommandInfoCard } from "src/view/molecules";
import { ContactCard } from "src/view/molecules";
import "./Contacts.css";

import photo from "src/images/AboutPhoto.png";

const contactsData = [
  { id: "0", name: "Почта", link: "focus@yandex.ru" },
  { id: "1", name: "Телеграм", link: "@focus" },
  { id: "2", name: "Whatsapp", link: "+7 800-555-35-35" },
  { id: "3", name: "Телефон", link: "+7 800-555-35-35" },
];

export const Contacts = () => (
  <div className="contactsContainer" id="contacts">
    <h1 className="contactsTitle">Оставьте заявку на покупку наших камер</h1>
    <h2 className="contactsSubtitle">и повысьте свою безопасность</h2>
    <div className="contactsTable">
      <div className="contactsTableCol">
        <h3 className="contactsTableTitle">Связаться с нами</h3>
        {contactsData.map((item) => (
          <ContactCard key={item.id} title={item.name} link={item.link} />
        ))}
      </div>
      <div className="contactsTableCol">
        <h3 className="contactsTableTitle">Команда</h3>
        <CommandInfoCard
          photo={photo}
          title="Иван Иванов"
          info="Важная информация для связи"
          contact="+7 800-555-35-35"
        />
        <h3 className="contactsTableTitle">Адрес</h3>
        <CommandInfoCard
          photo={photo}
          title="Санкт-Петербург"
          info="Невский проспект д11 к11"
          contact="Ссылка яндекс карты"
        />
      </div>
    </div>
  </div>
);
