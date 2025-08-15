import Header from './components/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-4 text-center text-body-secondary">
        © {new Date().getFullYear()} • Yao Tiem Lee • Built with React, MongoDB, Express, Node.js and Bootstrap
      </footer>
    </>
  );
}
