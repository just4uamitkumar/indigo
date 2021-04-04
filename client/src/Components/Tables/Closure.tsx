import React, { useState, MouseEvent  } from 'react';
import ColorModal from '../Shared/ColorModal';

import { FaEyeDropper } from 'react-icons/fa';

const Closure = () => {
  const pageTitle = 'Closure';
  const [isModal, setIsModal] = useState<Boolean>(false);
  const [myColor, setColor] = useState<any>([
    { colorValue: 'green', colorName: 'Color A' },
    { colorValue: 'red', colorName: 'Color B' },
    { colorValue: 'dodgerBlue', colorName: 'Color C' },
    { colorValue: 'pink', colorName: 'Color D' },
    { colorValue: 'yellow', colorName: 'Color E' },
    { colorValue: 'orange', colorName: 'Color F' },
    { colorValue: 'slateBlue', colorName: 'Color G' },
    { colorValue: 'violet', colorName: 'Color H' },
    { colorValue: 'DarkBlue', colorName: 'Color I' },
  ]);

   //Close Modal
   function closeModal() {
    setIsModal(false);
    document.body.style.overflow = 'visible';
  }

  //Choose Color
  const chooseColor = () => {
    setIsModal(true);
  }

  const getColor = (props:any, event:MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(props)
    let currentColor = props.target.attributes[1].value as string
    let colordiv = event.target.previousElementSibling as any
    console.log(currentColor, colordiv)
    
  

  }

  return (
    <main>
      <div className="pageContent">
        <section className="pageHeader">
          <div className="container">
            <h1>{pageTitle}</h1>
            <div className="pageSlogan">
              <p>Staying in HomeStays</p>
            </div>
          </div>
        </section>

        <div className="container">
          <section className="contentBlock">
            <div className="row">
              <div className="col-3">
                <h2>Where can I get some?</h2>
                <p>
                  Even a small change in your daily routine can make a big
                  difference over time.
                </p>
                <div className="tableResponsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Sr. No.</th>
                        <th>Color</th>
                        <th>Color Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myColor.map((e: any, index: number) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <div className="color"></div>
                            <button className="btn btnSuccess" onClick={() =>  chooseColor()}>
                              <FaEyeDropper />
                            </button>
                          </td>
                          <td> {e.colorName}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {
        isModal && <ColorModal title={'Pick a Color'} myColor={myColor} closeModal={closeModal}
        getColor={(event:MouseEvent<HTMLButtonElement, MouseEvent>, index:number) => getColor(event, index)} />
      }
      
    </main>
  );
};

export default Closure;
