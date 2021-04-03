import React, { useState, useEffect } from 'react';
import PageHeader from './Shared/PageHeader';
import ReadMore from './Shared/ReadMore';
import { connect } from 'react-redux';
import { fetchData } from '../redux';

const Flight = ({ fetchData, userData }: any) => {
  const pageTitle = 'Flights';
  const [flightData, setFlightData] = useState<any[]>([]);

  useEffect(() => {
    fetchData();

    for (let i = 0; i < userData.readData.length; i++) {
      userData.readData[i].isExpanded = false;
    }

    console.log(userData.readData);
  }, []);

  const explore = (index: number) => {
    let arr = [...userData.readData];
    let item = arr[index];
    item.isExpanded = !item.isExpanded;
    setFlightData(arr);
  };

  return (
    <main>
      <div className="pageContent">
        <PageHeader pageTitle={pageTitle} />

        <div className="container">
          <section className="contentBlock">
            <h2>Flights Detail</h2>

            {userData &&
              userData.readData &&
              userData.readData.map((e: any, index: any) => (
                <div className="blockCont" key={index}>
                  <ReadMore
                    imgUrl={e.imgUrl}
                    name={e.name}
                    isExpanded={e.isExpanded}
                    descrip={e.descrip}
                    explore={() => explore(index)}
                  />
                </div>
              ))}
          </section>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userData: state.readData,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Flight);
