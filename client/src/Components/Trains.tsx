import React from 'react';
import PageHeader from './Shared/PageHeader'
import {useSelector, useDispatch} from 'react-redux';
import { buyTrain } from '../redux';

const Trains = () => {
  const pageTitle = 'Trains';
 const numofTrains = useSelector((state:any) => state.trainData.numofTrain)
 const dispatch = useDispatch()
 

  return (
    <main>
      <div className="pageContent">
      <PageHeader pageTitle={pageTitle} tagline={'your are on the train page'}/>

        <div className="container">
          <section className="contentBlock">
            <h2>Number of Trains - {numofTrains}</h2>
            <button onClick={() => dispatch(buyTrain())}  className="btn btnPrime">Buy Train</button>            
          </section>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-3">
                <h3>Fill the Trains Details</h3>
                <form>
                  <div className="formGroup">
                    <input type="text" placeholder="Enter Train No." />
                  </div>
                  <div className="formGroup">
                    <input type="text" placeholder="Enter Train Name" />
                  </div>
                  <div className="formGroup">
                    <input type="text" placeholder="Enter Source Station" />
                  </div>
                  <div className="formGroup">
                    <input type="text" placeholder="Enter Last Station" />
                  </div>
                  <div className="formGroup">
                    <input type="text" placeholder="Enter Start Time" />
                  </div>
                  <div className="formGroup">
                    <input type="text" placeholder="Enter Last Time" />
                  </div>
                  <div className="formGroup">
                    <input type="text" placeholder="Enter Distance" />
                  </div>
                  <div className="formGroup text-right">
                    <button className="btn btnDanger" type="submit">
                        Reset
                      </button>
                      <button className="btn btnPrime" type="submit">
                        Submit
                      </button>
                  </div>

                </form>
            </div>

            <div className="col-9">
              <div className="tableResponsive">               
                <table className="table">
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Train No.</th>
                      <th>Train Name</th>
                      <th>Source Station</th>
                      <th>Last Station</th>
                      <th>Source Time</th>
                      <th>End Time</th>
                      <th>Total Distance</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Trains;
