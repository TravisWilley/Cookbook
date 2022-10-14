import Background from './Images/Background.jpeg';
import './MenuBar/MenuBar';
import './App.css';
import MenuBar from './MenuBar/MenuBar';
import DockBar from './DockBar/DockBar';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${Background})`,
        height: `100vh`,
        width: '100vw',
        backgroundSize: 'cover',
      }}
    >
      <MenuBar />
      <DockBar />
    </div>
  );
}

export default App;
