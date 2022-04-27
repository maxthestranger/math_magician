import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/qoute" element={<Quote />} />
      </Routes>
    </Router>
  );
}
