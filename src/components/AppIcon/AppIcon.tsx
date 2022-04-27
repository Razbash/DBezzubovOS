import { useState } from 'react';
import Window from '../Window/Window';
import Settings from '../Settings/Settings';
import './appIcon.scss';

interface ButtonProps {
    name: string;
    icon: string;
}

const AppIcon: React.FC<ButtonProps> = ({name, icon}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openWindow = () => {
        if (!isOpen) {
            setIsOpen(true);
        }
    };

    const closeWindow = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    return(
        <>
            <div className="app-icon" onClick={openWindow}>
                <img src={icon}
                    alt={icon}
                    className="app-icon__image"
                />

                <span className="app-icon__title">{name}</span>
            </div>

            {isOpen ?
                <Window name="Настройки" closeEvent={closeWindow}>
                    <Settings/>
                </Window>
                : null
            }
        </>
    );
}

export default AppIcon;