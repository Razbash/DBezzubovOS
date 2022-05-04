import photo from '../../assets/photo.jpg';
import './summary.scss';

const Summary = () => {
    return(
        <div className="summary">
            <div className="summary__left">
                <img src={photo} alt="Беззубов Дмитрий" className="summary__photo"/>
                <h1 className="summary__name">Дмитрий Беззубов</h1>
                <h2 className="summary__profession">Frontend Developer</h2>
                <div className="summary__separator"></div>
                <div className="section">
                    <h3 className="section__title">Личные данные</h3>
                    <p className="section__text">TODO</p>
                </div>
                <div className="section">
                    <h3 className="section__title">Навыки и умения</h3>
                    <p className="section__text">TODO</p>
                </div>
                <div className="section">
                    <h3 className="section__title">Контактная информация</h3>
                    <div className="section__group">
                        <span className="section__text">Тел.: +7 (927) 803-63-03</span>
                        <span className="section__text">bezzubovds@mail.ru</span>
                        <span className="section__text">Россия, г. Ульяновск</span>
                    </div>
                </div>
            </div>
            <div className="summary__right">
                <div className="section">
                    <h3 className="section__title">Опыт работы</h3>
                    <div className="section__item">
                        <span className="section__name">Frontend Developer</span>
                        <span className="section__subname">Simtech Development (июль 2020 - по н.в.)</span>
                        <p className="section__text">TODO</p>
                    </div>
                    <div className="section__item">
                        <span className="section__name">IT Recruiter</span>
                        <span className="section__subname">IT Атлас</span>
                        <p className="section__text">TODO</p>
                    </div>
                </div>

                <div className="section">
                    <h3 className="section__title">Образование</h3>
                    <div className="section__item">
                        <span className="section__name">Институт авиационных технологий</span>
                        <span className="section__subname">Бакалавр в области информационных технологий, 2017 г. - 2022 г.</span>
                        <p className="section__text">TODO</p>
                    </div>
                    <div className="section__item">
                        <span className="section__name">Ульяновский авиационный колледж</span>
                        <span className="section__subname">Программист, 2013 г. - 2017 г.</span>
                        <p className="section__text">TODO</p>
                    </div>
                </div>

                <div className="section">
                    <h3 className="section__title">Интересы и хобби</h3>
                    <p className="section__text">TODO</p>
                </div>
            </div>
        </div>
    )
}

export default Summary;