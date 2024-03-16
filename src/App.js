import './App.css';
import Community from './community/community'
import Navigation from './navigation/navigation';
import Signin from './signin/signin';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Community />
      {/* <Signin /> */}
    </div>
  );
}

export default App;
