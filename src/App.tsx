import Header from './components/Header';
import BodyStays from './components/BodyStays';

import './css/header.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="container">
      <Header />
      <BodyStays />
      <Footer />
    </div>
  );
};

export default App;
