import './App.css';
import Community from './community/community'
import Navigation from './navigation/navigation';
function App() {
  return (
    <div className="App hover:overflow-y-scroll overflow-y-hidden no-scrollbar">
      <Navigation />
      <Community />
    </div>
  );
}

export default App;
