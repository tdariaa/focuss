import s from "./About.module.scss";

import AboutPhoto from "src/images/aboutImage.png";

export const About = () => (
  <div className={s.aboutContainer} id="about">
    <h1 className={s.titleAbout}>О нас</h1>
    <div className={s.wrapperAboutInfo}>
      <div className={s.containerInfo}>
        <div className={s.aboutInfo}>
          <p className={s.accentInfo}>FOCUSENSE</p> - это молодой, но яркий и
          амбициозный отечественный производитель систем контроля безопасности и
          видеонаблюдения. Его появлению способствовал передовой опыт разработки
          надежных сервисов и технологий, учитывающих потребности местного рынка
          и адаптированных для использования в его условиях.
        </div>
      </div>
      <div className={s.aboutPhotoWrapper}>
        <img src={AboutPhoto} alt="" className={s.aboutPhoto} />
      </div>
    </div>
  </div>
);
