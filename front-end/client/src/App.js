import { useEffect } from "react";
import './App.css';
import Header from './component/header/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './component/footer/Footer';
import MainPage from './utils/MainPage';
import { Provider } from "react-redux";
import store from "./redux/stors";
import { singleUser } from "./redux/actions/userAction";


function App() {
  return (
     <Provider store={store}>
      <Router>
        <Header/>
          <MainPage /> 
        <Footer />
      </Router>
     </Provider>
    
  );
}

export default App;
