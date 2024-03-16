import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './navigation/navigation';
import Community from './community/community';
import Opportunities from './community/opportunities';
import PodcastPage from './community/podcasts';
import Signin from './signin/signin';
import './App.css';


const App = (props) => {
  return (
    
    <div>
      <Router>
      <div className="App hover:overflow-y-scroll hover:no-scrollbar">
        <Navigation />
        <Routes>
          <Route path="/community" element={<Community />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/podcasts" element={<PodcastPage />} />
        </Routes>
      </div>
    </Router>

    </div>
   
    
  );
}

export default App;
