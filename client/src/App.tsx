import React, { useReducer, Suspense,  useEffect, createContext, useContext } from 'react';
import './Assets/CSS/App.scss';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import Login from './Components/Login';
import SignUp from './Components/Login/SignUp';
import {initialState, user1Reducer} from './redux/user/userReducer';

const Home = React.lazy(() => import('./Components/Home/Index'));
const Trains = React.lazy(() => import('./Components/Trains'));
const Bus = React.lazy(() => import('./Components/Bus'));
const HomeStays = React.lazy(() => import('./Components/Tables/Places'));
const Hotel = React.lazy(() => import('./Components/Hotel'));
const Flight = React.lazy(() => import('./Components/Flight'));
const Contact = React.lazy(() => import('./Components/Contact'));
const Places = React.lazy(() => import('./Components/Tables/Places'));
const Closure = React.lazy(() => import('./Components/Tables/Closure'));
const LeftMenu = React.lazy(() => import('./Components/Tables/LeftMenu'));


interface IContextProps {
  state: string;
  dispatch: ({type}:{type:string}) => void;
}


export const UserContext = createContext({} as IContextProps)

const Routing = () => { 

  const history = useHistory()
  const {state, dispatch} = useContext<any | string>(UserContext)
 
  useEffect ( () => {
    const user = JSON.parse(localStorage.getItem("user")  || '{}')
    
    if(user){
      dispatch({type:"USER", payload:user})
      history.push('/')
    }else{
      history.push('/Login')
    }
    
  }, [])

  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route  exact path="/" ><Login /></Route>
        <Route  path="/SignUp"><SignUp/></Route>
        <Route path="/Home"><Home /></Route>
        <Route path="/Flight"><Flight /></Route>
        <Route path="/Hotel"><Hotel /></Route>
        <Route path="/HomeStays"><HomeStays /></Route>
        <Route path="/Bus"> <Bus /></Route>
        <Route path="/Trains"> <Trains /></Route>
        <Route path="/Contact"><Contact /></Route>
        <Route path="/Closure"><Closure /></Route>
        <Route path="/Places"><Places /></Route>
        <Route path="/LeftMenu"><LeftMenu /></Route>

        
      </Suspense>
    </Switch>
  )
}


function App() {
  const [state, dispatch] = useReducer(user1Reducer, initialState)
  return (
    <Provider store={store}>
      <UserContext.Provider value={{state, dispatch}}>
      <div className="App">
        <div className="wrapper">
          <Router>
            <Header /> 
            <Routing/>           
            <Footer />
          </Router>
        </div>
      </div>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
