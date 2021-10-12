import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {

  const [ language, setLanguage ] = useState('eng');

  return (
    <div className="App">
      <Header language={language} setLanguage={setLanguage} />
      <Section language={language} />
      <Footer />
    </div>
  );
}

export default App;