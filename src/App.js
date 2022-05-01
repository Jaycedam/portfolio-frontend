import './css/main.css';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import About from './components/About';
import Header from './components/Header';
import Technologies from './components/Technologies';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ProjectList />
      <Technologies />
      <Footer />
    </>
  );
}

export default App;
