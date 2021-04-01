import React, { useState } from 'react';
import { FaAward, FaPlus } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Banner = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const [cities, setCities] = useState<string[]>([
    'Los Angeles',
    'Chicago',
    'Houston',
    'Dallas',
    'San Jose',
    'Fort Worth',
  ]);

  const [stateList, setStateList] = useState([
    'New York',
    'Illinois',
    'Texas',
    'California',
    'Ohio',
  ]);

  return (
    <section className="bannerWrap">
      <div className="banner">
        <div className="container clearfix">
          <div className="advtSection">
            <div className="icon">
              <FaAward />
              <span>1</span>
            </div>
            <div className="advtCont">
              <h4>YOUR PERFECT HOLIDAY COMPANION</h4>
              <p>
                Use one card for travel, dining, shopping, hotels,hotels and
                entertainment
              </p>
            </div>
          </div>
        </div>

        <div className="bannerBottom">
          <div className="titleSection">
            <h2 className="text-center">
              MULTI-CURRENCY
              <br />
              FOREX CARD
            </h2>
          </div>
          <div className="formWrap">
            <form>
              <h4>Need a Multi Currency Forex Card?</h4>

              <div className="formGroup clearfix">
                <div className="formElem">
                  <label htmlFor="name">*Name</label>
                  <input type="text" name="name" className="formControl" />
                </div>
                <div className="formElem">
                  <label htmlFor="phone">*Mobile</label>
                  <input type="text" name="phone" className="formControl" />
                </div>
                <div className="formElem">
                  <label htmlFor="email">*Email ID</label>
                  <input type="email" name="email" className="formControl" />
                </div>
              </div>
              <div className="formGroup clearfix">
                <div className="formElem">
                  <label htmlFor="state">*State</label>
                  <select className="formControl" name="state">
                    {stateList.map((e, index) => (
                      <option key={index} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="formElem">
                  <label htmlFor="city">*City</label>
                  <select className="formControl" name="city">
                    {cities.map((e, index) => (
                      <option key={index} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="formElem">
                  <label>*Date of Travel</label>
                  {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
                </div>
              </div>
              <button type="submit">
                <FaPlus />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
