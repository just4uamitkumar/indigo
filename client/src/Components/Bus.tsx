import React, { useEffect, useState } from 'react';

import CameraBlock from './Shared/CameraBlock';
import CameraDetail from './Shared/CameraDetail';
import { FaChevronLeft } from 'react-icons/fa';

const Bus = () => {
  const pageTitle = 'Buses';
  const [camData, setcamData] = useState<any[]>([]);
  const [activeCamera, setActiveCamera] = useState<any[]>([]);
  const [showDetail, setShowDetail] = useState<boolean>(false);

  useEffect(() => {
    fetch('./Camera.json')
      .then((data) => {
        return data.json();
      })
      .then((data2) => {
        setcamData(data2);
      });
  }, []);

  const explore = (id: number) => {
    console.log(id);
    const newList = camData.filter((e) => e.id === id);
    setActiveCamera(newList);
    setShowDetail(true);
  };

  const goBack = () => {
    setShowDetail(false);
  };

  return (
    <main>
      <div className="pageContent">
        <section className="pageHeader">
          <div className="container">
            <h1>{pageTitle}</h1>
            {showDetail && (
              <button type="button" className="btn btnSuccess" onClick={goBack}>
                <FaChevronLeft /> Back
              </button>
            )}
          </div>
        </section>      

       

        <div className="container">
          <section className="contentBlock">
            <h2>Camera</h2>
            {showDetail ? (
              <div className="cardDetail">
                {activeCamera.map((e, index) => (
                  <CameraDetail
                    key={index}
                    name={e.name}
                    imgUrl={e.imgUrl}
                    price={e.price}
                    regularPrice={e.regularPrice}
                    reviewCount={e.reviewCount}
                    isAvailable={e.isAvailable}
                    writer={e.writer}
                    discount={e.discount}
                    descrip={e.descrip}
                  />
                ))}
              </div>
            ) : (
              <div className="row">
                {camData.map((e, index) => (
                  <div className="col-3" key={index}>
                    <CameraBlock
                      id={e.id}
                      name={e.name}
                      imgUrl={e.imgUrl}
                      price={e.price}
                      explore={() => explore(e.id)}
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Bus;
