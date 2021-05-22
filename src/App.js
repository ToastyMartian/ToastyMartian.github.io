import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//components
import Header from './layout/Header';
import Footer from './layout/Footer';

//pages
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

//images
import gameart from './img/gameart.jpg';
import modelart from './img/3dart.png';

function App() {
  return (
    <Router>
      <div className='h-screen bg-backdrop bg-cover bg-center bg-no-repeat font-overpass text-gray-50'>
        <Header />

        {/* Home */}
        <Route exact path='/' render={ props => (
          <div>
            <div className='ml-20 mt-20 max-w-prose'>
              <h1 className='text-4xl'>Game art, 3D art, UI/UX Design, Programming &amp; more...</h1>
              <h2>For any creative environment</h2>
              <p>Skills in programming, Game development, Concept art and 3D modeling using tools and languages like HTML, CSS, JS, React, Unity, Unreal Engine 4, Blender and many more </p>
            </div>

            <section className='flex mx-20 mt-20'>
              <div className='bg-gray-900 w-60 h-80 self-end text-center mx-20'>
                <img className='p-3 m-auto overflow-hidden' src={gameart} alt='Game art'/>
                <h4 className='mt-10'>Game Art</h4>
              </div>
              <div className='bg-gray-900 w-60 h-80 self-end text-center mx-20'>
                <img className='p-3 max-w-56 m-auto overflow-hidden' src={modelart} alt='3D modeling'/>
                <h4 className='mt-8'>3D modeling</h4>
              </div>
              <div className='bg-gray-900 w-60 h-80 self-end text-center mx-20'>
                <h4>Front-End</h4>
              </div>
              <div className='bg-gray-900 w-60 h-80 self-end text-center mx-20'>
                <h4>UI/UX Design</h4>
              </div>
            </section>
          </div>
        )}/>

        {/* About */}
        <Route path='/about' render={ props => (
          <About />
        )}/>

        {/* Portfolio */}
        <Route path='/portfolio' render={ props => (
          <Portfolio />
        )}/>

        {/* Contact */}
        <Route path='/contact' render={ props => (
          <Contact />
        )}/>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
