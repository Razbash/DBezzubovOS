import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { CSSTransition } from 'react-transition-group';
import './window.scss';

type Props = {
    name: string;
    closeEvent: () => void;
    children: React.ReactNode;
};

const Window: React.FC<Props> = ({name, closeEvent, children}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    });

    const closeWindow = () => {
        setVisible(false);
        closeEvent();
    }

    return(
        <CSSTransition
            in={visible}
            timeout={300}
            classNames="window"
            unmountOnExit
        >
            <Draggable
                positionOffset={{x: '-50%', y: '-50%'}}
            >
                <div className="window">
                    <div className="window__title">
                        <h2 className="window__name">{name}</h2>
                        <span className="window__close-button" onClick={closeWindow}>
                            <svg viewBox="0 0 512 512" >
                                <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
                            </svg>
                        </span>
                    </div>
                    <div className="window__content">
                        {children}
                    </div>
                </div>
            </Draggable>
        </CSSTransition>
    )
}

export default Window;