import './App.css';
import Community from './community/community'
import Navigation from './navigation/navigation';
function App() {
  return (
    <div className="App hover:overflow-y-scroll hover:no-scrollbar">
      <Navigation />
      <Community />
    </div>
  );
}

export default App;
