import { Route, Routes } from 'react-router-dom';
import { DevNav } from './components/DevNav';
import { Home } from './pages/Home';
import { FontLab } from './pages/FontLab';
import { ConceptEditorial } from './pages/concepts/ConceptEditorial';
import { ConceptBoldGrid } from './pages/concepts/ConceptBoldGrid';
import { ConceptModernLuxury } from './pages/concepts/ConceptModernLuxury';
import { ConceptMinimalPerformance } from './pages/concepts/ConceptMinimalPerformance';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fonts" element={<FontLab />} />
        <Route path="/concepts/editorial" element={<ConceptEditorial />} />
        <Route path="/concepts/bold-grid" element={<ConceptBoldGrid />} />
        <Route path="/concepts/modern-luxury" element={<ConceptModernLuxury />} />
        <Route path="/concepts/minimal-performance" element={<ConceptMinimalPerformance />} />
      </Routes>
      <DevNav />
    </>
  );
}

export default App;
