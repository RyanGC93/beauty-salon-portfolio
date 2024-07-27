import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const App = () => (
  <Router>
    <GlobalStyles />
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/team" component={Team} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
