import "./Categories.css";
import { categoriesData } from "src/utils";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const navigate = useNavigate();
  const handleButtonClick = (id: string) => navigate(id);

  return (
    <div className="categoriesContainer" id="products">
      <h1 className="title">Наша продукция</h1>
      <p className="info">
        Как принято считать, многие известные личности лишь добавляют
        фракционных разногласий и объективно рассмотрены соответствующими
        инстанциями. Вот вам яркий пример современных тенденций — базовый вектор
        развития однозначно фиксирует необходимость распределения внутренних
        резервов и ресурсов.
      </p>

      <div className="focusContainer">
        {categoriesData.map((item) => (
          <div className="categoriesItems" key={item.id}>
            <div className="categoriesItem">
              <h3 className="itemTitle">{item.title}</h3>
              <div className="itemInfo">
                <button
                  className="itemButton"
                  onClick={() => handleButtonClick(item.id)}
                >
                  <p className="buttonText">Перейти</p>
                </button>
                <div className="itemPicture"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
