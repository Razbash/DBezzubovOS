import { useEffect, useState } from 'react';
import './exit.scss';

type Props = {
    stopTimer: () => void;
};

const Exit: React.FC<Props> = ({stopTimer}) => {
    const [timer, setTimer] = useState(5);

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return () => clearInterval(timerID);
    });

    const tick = () => {
        timer === 0 ? window.close() : setTimer(timer - 1);
    }

    return(
        <>
            <div className="mask"></div>
            <div className="exit-window">
                <h3 className="exit-window__title">Приложение закроется через {timer} секунд</h3>
                <button type="button" className="exit-window__button" onClick={stopTimer}>Отмена</button>
            </div>
        </>
    )
}

export default Exit;