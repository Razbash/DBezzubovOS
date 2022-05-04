import AppIcon from './components/AppIcon/AppIcon';
import summaryIcon from './assets/summary.svg';
import settingsIcon from './assets/settings.svg';
import Settings from './components/Settings/Settings';
import Summary from './components/Summary/Summary';
import './app.scss';
import BottomPanel from './components/BottomPanel/BottomPanel';

function App() {
  return (
    <div className="desktop">
      <AppIcon name="Настройки" icon={settingsIcon} component={<Settings/>} />
      <AppIcon name="Резюме" icon={summaryIcon} component={<Summary/>} />

      <BottomPanel/>
    </div>
  );
}

export default App;
