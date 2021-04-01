import React, { useEffect } from 'react';

const HomeStays = () => {
  const pageTitle = 'HomeStays';

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
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default HomeStays;
