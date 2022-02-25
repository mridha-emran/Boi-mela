
import './App.css';
import Header from './component/header/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './component/footer/Footer';
import MainPage from './utils/MainPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <MainPage /> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
