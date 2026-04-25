import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedBots from './components/FeaturedBots';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedBots />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
