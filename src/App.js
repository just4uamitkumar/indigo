import './CSS/App.scss';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import Home from './Components/Home/Index';
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          <Header/>
          <Switch>
          <Route exact path="/"><Home/></Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
     
    </div>
  );
}

export default App;
