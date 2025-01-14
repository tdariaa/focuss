import s from "./Categories.module.scss";
import { categoriesData } from "src/utils";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const navigate = useNavigate();
  const handleButtonClick = (id: string) => navigate(id);

  return (
    <div className={s.categoriesContainer} id="products">
      <h1 className={s.title}>Наша продукция</h1>
      <p className={s.info}>
        Наши камеры и видеорегистраторы просты в установке и настройке: с ними
        Вы почувствуете себя настоящим профессионалом, сможете доступно и
        выгодно обеспечить необходимый уровень безопасности. В Вашем
        распоряжении будут все необходимые инструменты: от интуитивно понятного
        мобильного приложения до современных интеллектуальных алгоритмов.
        FOCUSENSE - это современные удобные решения с широким спектром
        технических возможностей. ПрисоединяЙтесь к нам, оставайтесь с нами,
        будьте в фокусе!
      </p>

      <div className={s.focusContainer}>
        {categoriesData.map((item) => (
          <div className={s.categoriesItems} key={item.id}>
            <div className={s.categoriesItem}>
              <h3 className={s.itemTitle}>{item.title}</h3>
              <div className={s.itemInfo}>
                <button
                  className={s.itemButton}
                  onClick={() => handleButtonClick(item.id)}
                >
                  <p className={s.buttonText}>Перейти</p>
                </button>
                <div className={s[item.id]}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
