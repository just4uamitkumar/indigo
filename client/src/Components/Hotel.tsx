
import PageHeader from './Shared/PageHeader'
import {connect} from 'react-redux';
import { buyHotel } from '../redux';

const Hotel = (props:any) => {
  const pageTitle = 'Hotels';
  
  
  return (
    <main>
      <div className="pageContent">
        <PageHeader pageTitle={pageTitle}/>

        <div className="container">
          <section className="contentBlock">
            <h2>Number of Hotels - {props.numofHotel} </h2>
            <button onClick={props.buyHotel} className="btn btnPrime">Buy Hotel</button>            
          </section>
        </div>
       
      </div>
    </main>
  );
};

const mapStateToProps = (state:any) =>{
  return {
    numofHotel:state.hotelData.numofHotel
  }
}

const mapDispatchToProps = (dispatch:any) =>{
  return {
    buyHotel : () => dispatch(buyHotel())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hotel);
