import React, { useEffect, useState } from 'react';
import PageHeader from  '../Shared/PageHeader';
import { Link } from 'react-router-dom';
import {FaAngleDown, FaAngleUp} from 'react-icons/fa';

const LeftMenu = (props: any) => {
  const [sideLinks, setSideLinks] = useState<any[]>([])

  useEffect(() => {
    fetch('./NavLinks.json')
    .then((data) => {
      return data.json()
    })
    .then((data2) => {

      for(let i = 0; i < data2.length; i++ ){
        if("dropDown" in data2[i]){
          data2[i].hasMenu = true;
          data2[i].isExpanded = false;
        }
        else{
          data2[i].hasMenu = false; 
        }              
      }
      setSideLinks(data2)
    })
    
  }, [])

  const expandNav = (index:number) => {
    let arr = [...sideLinks];
    let item1 = arr[index];
    item1.isExpanded = !item1.isExpanded;
    setSideLinks(arr);
  }

 

  const pageTitle = 'Contact';

  return (
    <main>
      <div className="pageContent">
        
        <PageHeader pageTitle={pageTitle} tagline={'You are on Contact Page'}/>

        <div className="container">
          <section className="contentBlock">
            
            <div className="row">
              <div className="col-3">
                <ul className="sideNav">
                  {sideLinks.map((e, index) =>
                    e.hasMenu ? 
                    <li key={index} onClick={() => expandNav(index)}>
                      <Link to={e.path}>{e.name}
                       { e.isExpanded ? <FaAngleUp/> : <FaAngleDown/>}
                      </Link>
                        
                      {
                        e.isExpanded && 
                        <ul>
                        {
                          e.dropDown.map((a:any, index:number) => 
                            <li key={index}>
                                <Link to={a.path}>{a.name}</Link>
                            </li>                            
                          )
                        }
                      </ul>
                      }
                      
                    </li>

                    :

                    <li key={index}>
                      <Link to={e.path}>{e.name}</Link>
                    </li>

                  )}
                </ul>
              </div>

             
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default LeftMenu
