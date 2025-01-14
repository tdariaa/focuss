import s from "./Main.module.scss";

export const Main = () => (
  <>
    <div className={s.mainContainer} id="home">
      <div className={s.focusLens}></div>
      <div className={s.circleSml}></div>
      <div className={s.circleLrg}></div>
      <div className={s.logoContainer}>
        <h2 className={s.logoTextLeft}>Быть с нами</h2>
        <h1 className={s.logoImg}>FOCUSENSE</h1>
        <h2 className={s.logoTextRight}>Быть в фокусе</h2>
      </div>
    </div>
  </>
);
