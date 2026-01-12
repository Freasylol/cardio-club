import styles from "../styles/Search.module.css";
import HeaderText from "./HeaderText";
import DescriptionText from "./DescriptionText";
import SubHeaderText from "./SubHeaderText";

export default function Search() {
  return (
      <div className={styles.search}>
            <div className="container">
                <div className={styles.search__inner}>
                    <HeaderText className={`header__style ${styles.search__header}`}>
                        Поиск по сайту
                    </HeaderText>
                    <SubHeaderText className={styles.search__text}>
                        Введите тему, которая вас интересует и найдите полезные статьи на сайте
                    </SubHeaderText>
                    <input type="text" placeholder="Введите ваш запрос" className={styles.search__input}>
                    </input>
                    <DescriptionText className={styles.search__input__text}>
                        Например: «Инфаркт миокарда на ЭКГ», «Как высчитать ЧСС?», ЭОС...
                    </DescriptionText>
                </div>
            </div>
        </div>
  );
}
