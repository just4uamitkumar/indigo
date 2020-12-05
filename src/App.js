import './CSS/App.scss';
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import Home from './Components/Home/Index';
import Flight from './Components/Flight';
import Hotel from './Components/Hotel';
import HomeStays from './Components/HomeStays';
import Bus from './Components/Bus';
import Trains from './Components/Trains';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/Flight"><Flight/></Route>
            <Route path="/Hotel"><Hotel/></Route>
            <Route path="/HomeStays"><HomeStays/></Route>
            <Route path="/Bus"><Bus/></Route>
            <Route path="/Trains"><Trains/></Route>
            <Route path="/Contact"><Contact/></Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
     
    </div>
  );
}

export default App;
