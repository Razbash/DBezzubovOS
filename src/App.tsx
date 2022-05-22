import AppIcon from './components/AppIcon/AppIcon';
import summaryIcon from './assets/summary.svg';
import settingsIcon from './assets/settings.svg';
import paintIcon from './assets/paint.svg';
import Settings from './components/Settings/Settings';
import Summary from './components/Summary/Summary';
import Paint from './components/Paint/Paint';
import BottomPanel from './components/BottomPanel/BottomPanel';
import './app.scss';


function App() {
  return (
      <div className="desktop">
        <AppIcon name="Настройки" icon={settingsIcon} component={<Settings/>} />
        <AppIcon name="Резюме" icon={summaryIcon} component={<Summary/>} />
        <AppIcon name="Рисовалка" icon={paintIcon} component={<Paint/>} />

        <BottomPanel/>
      </div>
  );
}

export default App;
