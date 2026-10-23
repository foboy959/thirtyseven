import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './HEader';
import SplashPage from './SplashPage';
import About from './subpages/About';
import Meet from './subpages/Meet';
import Services from './subpages/Services';
import Beginners from './subpages/Beginners';
import Contact from './subpages/Contact';


function App() {
  return (
    <Router>
      <Routes>
        {/* Home - No Scroll Container */}
        <Route path="/" element={
          <>
            <Header />
            <SplashPage />
          </>
        } />

        {/* About - Scroll Allowed */}
        <Route path="/about" element={
          <> <Header />
            <About /></>

        } />

        {/* Coaches - Scroll Allowed */}
        <Route path="/coaches" element={
          <> <Header />
            <Meet /></>
        } />

        {/* Services - Scroll Allowed */}
        <Route path="/services" element={
          <> <Header />
            <Services /></>
        } />

        {/* Contact - Scroll Allowed */}
        <Route path="/contact" element={
          <> <Header />
            <Contact /></>
        } />

        {/* Beginners Course - Scroll Allowed */}
        <Route path="/beginners" element={
          <> <Header />
            <Beginners /></>
        } />
      </Routes>
    </Router>
  );
}

export default App;