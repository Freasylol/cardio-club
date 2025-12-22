import Image from "next/image";
import materialImg1 from "../../public/images/materials__img__1.png";
import materialImg2 from "../../public/images/materials__img__2.png";
import materialImg3 from "../../public/images/materials__img__3.png";

export default function Slider() {
  return (
    <div className="materials">
            <button className="slider__arrow slider__arrow__left">‹</button>
            <div className="container">
                
                <div className="materials__inner">
                    <h2 className="header__style materials_header">
                        Последние материалы
                    </h2>
                    <div className="materials__slider">
                        <div className="materials__item">
                            <Image src={materialImg1} className="materials__item__img" alt=""></Image>
                            <div className="materials__item__text">
                                <div className="materials__item__header">Видео</div>
                                <div className="materials__item__subheader">Типы инфаркта миокардаИнтерпретация тропонинов</div>
                                <div className="materials__item__description">В этой лекции вы найдете ответы на два вопроса: "Какие существуют причины ИМ?" и "Как понимать результаты тропонинов?"</div>
                            </div>
                        </div>
                        <div className="materials__item">
                            <Image src={materialImg2} className="materials__item__img" alt=""></Image>
                            <div className="materials__item__text">
                                <div className="materials__item__header materials__article">Статья</div>
                                <div className="materials__item__subheader">QRS и его обличия</div>
                                <div className="materials__item__description">Мы разобрали с вами блокады п.Гиса, ЭОС и гипертрофию левого желудочка. А что их связывает? А связывает их комплекс QRS и его десятки различных форм.
Понимание формирования QRS в грудных отведений — это уровень «джедая»
Давайте просто начнем с того, каким может быть комплекс QRS...</div>
                            </div>
                        </div>
                        <div className="materials__item">
                            <Image src={materialImg3} className="materials__item__img" alt=""></Image>
                            <div className="materials__item__text">
                                <div className="materials__item__header">Видео</div>
                                <div className="materials__item__subheader">Реноваскулярная артериальная гипертензия. Этиология, патогенез, клиника, диагностика, лечение.</div>
                                <div className="materials__item__description">В этой лекции ответим на два вопроса: "Какие существуют причины ИМ?" и "Как понимать результаты тропонинов?"</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="slider__arrow slider__arrow__right">›</button>
        </div>
  );
}