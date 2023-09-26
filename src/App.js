import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/newcube/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
