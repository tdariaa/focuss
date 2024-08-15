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
          <div className="contactItem" key={item.id}>
            <div className="contactsText">
              <p className="contactsName">{item.name}</p>
              <p className="contactsLink">{item.link}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="contactsTableCol">
        <h3 className="contactsTableTitle">Команда</h3>
        <div className="contactsInfo">
          <img src={photo} alt="" className="contactsInfoPhoto" />
          <div className="contactsInfoText">
            <p className="contactsInfoName">Иван Иванов</p>
            <p className="contactsInfoSubtitle">Важная информация для связи</p>
            <p className="contactsInfoNumber">+7 800-555-35-35</p>
          </div>
        </div>
        <h3 className="contactsTableTitle">Адрес</h3>
        <div className="contactsInfo">
          <img src={photo} alt="" className="contactsInfoPhoto" />
        </div>
      </div>
    </div>
  </div>
);
