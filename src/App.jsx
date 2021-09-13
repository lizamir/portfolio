import { Navbar } from './cmps/Navbar';
import { Menu } from './cmps/Menu';
import { Intro } from './cmps/Intro';
import { Portfolio } from './cmps/Portfolio';
import { Skills } from './cmps/Skills';
import './app.scss';
import './assets/scss/main.scss';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Skills />
      </div>
    </div>
  );
}

export default App;
