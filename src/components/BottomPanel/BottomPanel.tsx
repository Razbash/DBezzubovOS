import './bottomPanel.scss';

const BottomPanel = () => {
    return(
        <div className="bottom-panel">
            <div className="bottom-panel__icon" onClick={window.close}>
                <svg viewBox="0 0 24 24">
                    <path d="M12,14a1,1,0,0,1-1-1V5a1,1,0,0,1,2,0v8A1,1,0,0,1,12,14Z"/>
                    <path d="M12,21A8,8,0,0,1,7.43,6.44,1,1,0,1,1,8.57,8.08a6,6,0,1,0,6.86,0,1,1,0,0,1,1.14-1.64A8,8,0,0,1,12,21Z"/>
                </svg>
            </div>
            <div className="bottom-panel__components">
                <div className="bottom-panel__icon">
                    <svg viewBox="0 0 16 16">
                        <path d="M15,4H0v8h15V9h1V7h-1V4z M14,7v2v2H1V5h13V7z"/>
                        <rect height="4" width="2" x="8" y="6"/>
                        <rect height="4" width="2" x="5" y="6"/>
                        <rect height="4" width="2" x="2" y="6"/>
                    </svg>
                </div>
                <span className="bottom-panel__lang">RU</span>
                <span className="bottom-panel__time">17:47</span>
            </div>
        </div>
    )
}

export default BottomPanel;