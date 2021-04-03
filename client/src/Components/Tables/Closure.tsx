import React, { useEffect, useState } from 'react';
import { useStore } from 'react-redux';

const Closure = () => {
  const pageTitle = 'Closure';
  const [myColor, setColor] = useState<any>([
    {colorValue:'green', colorName:'Color A'},
    {colorValue:'red', colorName:'Color B'},
    {colorValue:'dodgerBlue', colorName:'Color C'},
    {colorValue:'pink', colorName:'Color D'},
    {colorValue:'yellow', colorName:'Color E'},
    {colorValue:'orange', colorName:'Color F'},
    {colorValue:'slateBlue', colorName:'Color G'},
    {colorValue:'violet', colorName:'Color H'},
    {colorValue:'DarkBlue', colorName:'Color I'}
  ]);
  

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
            <h2>Where can I get some?</h2>
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
                  {myColor.map((e:any, index:number) => 
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{e.colorValue}</td>
                      <td>{e.colorName}</td>
                    </tr>
                  
                  )}
                </tbody>
              </table>

            </div>
            
          </section>
        </div>
      </div>
    </main>
  );
};

export default Closure;
