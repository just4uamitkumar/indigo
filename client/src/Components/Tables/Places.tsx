import React, { useEffect } from 'react';

const Places = () => {
  const pageTitle = 'Places';

  useEffect(( ) => {
    fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=1600+Amphitheatre&key=AIzaSyCIQw15a7-XESV8JanWlvb3NV4y6cz7z54&sessiontoken=1234567890
    `)
    .then(data => {
      return data.json()
    })
    .then(data2 => {
      console.log(data2)
    })
    .catch(err => {
      console.log(err)
    })

  }, [])

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
            
          </section>
        </div>
      </div>
    </main>
  );
};

export default Places;
