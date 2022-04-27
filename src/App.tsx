import AppIcon from './components/AppIcon/AppIcon';
import settingsIcon from './assets/settings.svg';
import './app.scss';

function App() {
  return (
    <div className="desktop">
      <AppIcon name="Настройки" icon={settingsIcon} />
    </div>
  );
}

export default App;
