import './settings.scss';
import cityImage from '../../assets/backgrounds/city.jpg';
import leavesImage from '../../assets/backgrounds/leaves.jpg';
import mountainsImage from '../../assets/backgrounds/mountains.jpg';
import skyImage from '../../assets/backgrounds/sky.jpg';
import spaceImage from '../../assets/backgrounds/space.jpg';
import sunsetImage from '../../assets/backgrounds/sunset.jpg';

const Settings = () => {
    return(
        <div>
            <div className="setting-section">
                <span className="setting-section__label">Выберите основной цвет:</span>
                <div className="setting-section__colors">
                    <div className="setting-section__color setting-section__color--blue"></div>
                    <div className="setting-section__color setting-section__color--green"></div>
                    <div className="setting-section__color setting-section__color--yellow"></div>
                    <div className="setting-section__color setting-section__color--orange"></div>
                    <div className="setting-section__color setting-section__color--red"></div>
                    <div className="setting-section__color setting-section__color--pink"></div>
                    <div className="setting-section__color setting-section__color--purple"></div>
                    <div className="setting-section__color setting-section__color--violet"></div>
                </div>
            </div>

            <div className="setting-section">
                <span className="setting-section__label">Выберите фоновую заставку:</span>
                <div className="setting-section__grid">
                    <img className="setting-section__background" src={cityImage} alt="city" />
                    <img className="setting-section__background" src={leavesImage} alt="leaves" />
                    <img className="setting-section__background" src={mountainsImage} alt="mountains" />
                    <img className="setting-section__background" src={skyImage} alt="sky" />
                    <img className="setting-section__background" src={spaceImage} alt="space" />
                    <img className="setting-section__background" src={sunsetImage} alt="sunset"/>
                </div>
            </div>

            <div className="setting-section">
                <span className="setting-section__label">Выберите тему:</span>
                <div className="setting-section__switch-wrapper">
                    <div className="settings-section__switch">Светлая</div>
                    <div className="settings-section__switch">Темная</div>
                </div>
            </div>
        </div>
    )
}

export default Settings;