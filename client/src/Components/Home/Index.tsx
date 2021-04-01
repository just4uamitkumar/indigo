import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Accordion from './Accordion';
import Festive from './Festive';

const Home = () => {
  const [showFirst, setShowFirst] = useState<Boolean>(true);
  const [showSecond, setShowSecond] = useState<Boolean>(false);
  const [showThird, setShowThird] = useState<Boolean>(false);
  const [FeatureList, setFeatureList] = useState([]);

  useEffect(() => {
    fetch(`FeatureData.json`)
      .then((data) => {
        return data.json();
      })
      .then((data2) => {
        setFeatureList(data2);
      });
  }, []);

  const firstTab = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setShowSecond(false);
    setShowThird(false);
    setShowFirst(true);
  };

  const secondTab = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setShowSecond(true);
    setShowThird(false);
    setShowFirst(false);
  };

  const thirdTab = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setShowSecond(false);
    setShowThird(true);
    setShowFirst(false);
  };

  return (
    <>
      <Banner />

      <main>
        <section className="greyBox">
          <div className="container">
            <p>
              Travel smart with our Multi-Currency Forex card and you could be
              travelling with a brand new iPad Mini! Just be the highest loader
              for the day and get a brand new iPad Mini absolutely free! There’s
              an iPad Mini to be taken away every day.
            </p>
            <div className="tabLiks">
              <ul>
                <li>
                  <button
                    className={showFirst ? 'active' : ''}
                    onClick={firstTab}
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    className={showSecond ? 'active' : ''}
                    onClick={secondTab}
                  >
                    Festive Offers
                  </button>
                </li>
                <li>
                  <button
                    className={showThird ? 'active' : ''}
                    onClick={thirdTab}
                  >
                    Steps to get a Card
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="pageContent">
          <div className="container">
            <div className="tabWrapper">
              <div className={showFirst ? 'tabItem active' : 'tabItem'}>
                {FeatureList.map((e: any) => (
                  <Accordion key={e.id} title={e.title} content={e.content} />
                ))}
              </div>

              <div className={showSecond ? 'tabItem active' : 'tabItem'}>
                <Festive />
              </div>

              <div className={showThird ? 'tabItem active' : 'tabItem'}>
                <h3>Steps to get a Card</h3>
                <p>
                  Earlier in this tutorial we made a web page with rows and
                  columns, and it was responsive, but it did not look good on a
                  small screen. Media queries can help with that. We can add a
                  breakpoint where certain parts of the design behave
                  differently on each side of the breakpoint.
                </p>

                <p>
                  Earlier in this tutorial we made a web page with rows and
                  columns, and it was responsive, but it did not look good on a
                  small screen. Media queries can help with that. We can add a
                  breakpoint where certain parts of the design behave
                  differently on each side of the breakpoint.
                </p>

                <p>
                  Earlier in this tutorial we made a web page with rows and
                  columns, and it was responsive, but it did not look good on a
                  small screen. Media queries can help with that. We can add a
                  breakpoint where certain parts of the design behave
                  differently on each side of the breakpoint.
                </p>

                <p>
                  Earlier in this tutorial we made a web page with rows and
                  columns, and it was responsive, but it did not look good on a
                  small screen. Media queries can help with that. We can add a
                  breakpoint where certain parts of the design behave
                  differently on each side of the breakpoint.
                </p>

                <p>
                  Earlier in this tutorial we made a web page with rows and
                  columns, and it was responsive, but it did not look good on a
                  small screen. Media queries can help with that. We can add a
                  breakpoint where certain parts of the design behave
                  differently on each side of the breakpoint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
