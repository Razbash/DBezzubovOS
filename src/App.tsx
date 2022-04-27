import AppIcon from './components/AppIcon/AppIcon';
import settingsIcon from './assets/settings.svg';
import './app.scss';
import BottomPanel from './components/BottomPanel/BottomPanel';

function App() {
  return (
    <div className="desktop">
      <AppIcon name="Настройки" icon={settingsIcon} />
      <BottomPanel/>
    </div>
  );
}

export default App;
