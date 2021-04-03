import React, {useState, useContext} from 'react'
import { Link, NavLink, withRouter, useHistory } from 'react-router-dom';
import {UserContext} from '../../App';
import {FaAngleDown, FaAngleUp,  FaPlane,  FaHotel,  FaBus,  FaTrain, 
  FaPhone, FaUser,  FaTable} from 'react-icons/fa';


const Header = () => {
  const {state, dispatch } = useContext(UserContext);
  const history = useHistory();

  const logo = 'Traveller';
  const [updatedNav, setUpdatedNav] = useState<any[]>([]); 
 

  const userLink:any[] = [
    { name: 'Login', path: '/Login', icon: <FaUser /> },
    { name: 'Register', path: '/SignUp', icon: <FaUser /> }]

  const [topLink, setTopLink] = useState<any[]>([
    { name: 'FLIGHTS', path: '/Flight', icon: <FaPlane />, hasMenu:false },
    { name: 'HOTELS', path: '/Hotel', icon: <FaHotel />, hasMenu:false },
    { name: 'Tables', path: '#', icon: <FaTable />, hasMenu:true,
      isExpanded:false,
      subMenu:[{'name':'Places', path:'/Places'}, 
          {'name':'Closure', path:'/Closure'},
          {'name':'LeftMenu', path:'/LeftMenu'},
          {'name':'HomeStays 4', path:'/HomeStays4'},
          {'name':'HomeStays 5', path:'/HomeStays5'}]
    },
    { name: 'BUS', path: '/Bus', icon: <FaBus />, hasMenu:false },
    { name: 'TRAINS', path: '/Trains', icon: <FaTrain />, hasMenu:false },
    { name: 'CONTACT US', path: '/Contact', icon: <FaPhone />, hasMenu:false }, 
    { name: 'My Account', path: '#', icon: <FaUser /> , hasMenu:true,
      isExpanded:false,
        subMenu:[{'name':'My Profile', path:'/Profile'}, 
        {'name':'Change Password', path:'/ChangePassword'},
        {'name':'Logout', path:'#'}]       
    }
    
  ]);

  const renderList = () => {
    if(state){
      return[
        topLink.map((e, index) => 
          e.hasMenu ?  

          <li key={index} onClick={() => expandNav(index)}>
            <NavLink to={e.path}>
              {e.icon} {e.name}
                {e.isExpanded ? <FaAngleUp/> : <FaAngleDown/>} 
              </NavLink> {e.isExpanded &&
                <ul>
                {
                e.subMenu.map((a:any, index:number) => 
                a.name === 'Logout' ?

                <li key={index}>
                  <NavLink to={a.path}  onClick={ () =>{ localStorage.clear()
                    dispatch({type:"CLEAR"})
                    history.push('/Login') }}>Logout</NavLink>                 
                </li>
                 : 
                <li key={index}>
                  <NavLink to={a.path}>{a.name}</NavLink>
                </li>
                )}
              </ul>
              }               
          </li>
          :
          <li key={index}>
            <NavLink to={e.path}>{e.icon} {e.name}</NavLink>
          </li>
      )
      ]
    }
    else{
      return[
        userLink.map((e, index) => 
        <li key={index}>
            <NavLink to={e.path}> {e.icon} {e.name} </NavLink>
        </li>
        )        
      ]
    }
  }  

  const expandNav = (index:number) => {
    let arr = [...topLink];
    let item1 = arr[index];
    item1.isExpanded = !item1.isExpanded;
    setUpdatedNav(arr);
  }

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to={state ? '/Home' : '/'}>{logo}</Link>
        </div>
        <nav>
          <ul>{renderList()}</ul>          
        </nav>
      </div>
    </header>
  );
};

export default withRouter(Header);
