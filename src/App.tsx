import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
