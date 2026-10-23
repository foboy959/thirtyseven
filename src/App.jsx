
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
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <SplashPage />
            </>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
            </>
          }
        />

        {/* Coaches */}
        <Route
          path="/coaches"
          element={
            <>
              <Header />
              <Meet />
            </>
          }
        />

        {/* Services */}
        <Route
          path="/services"
          element={
            <>
              <Header />
              <Services />
            </>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
            </>
          }
        />

        {/* Beginners Course */}
        <Route
          path="/beginners"
          element={
            <>
              <Header />
              <Beginners />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
