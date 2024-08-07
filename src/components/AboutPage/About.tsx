import "./About.css";

import AboutPhoto from "src/images/AboutPhoto.png";

export const About = () => (
  <div className="aboutContainer" id="about">
    <h1 className="title">О нас</h1>
    <div className="container">
      <div className="comtainerInfo">
        <p className="info">
          Как принято считать, многие известные личности лишь добавляют
          фракционных разногласий и объективно рассмотрены соответствующими
          инстанциями. Вот вам яркий пример современных тенденций — базовый
          вектор развития однозначно фиксирует необходимость распределения
          внутренних резервов и ресурсов.
        </p>
        <div className="acsent">Акцентная информация о компании</div>
      </div>
      <div className="containerPhoto">
        <img src={AboutPhoto} alt="" className="aboutPhoto" />
      </div>
    </div>
  </div>
);
