import React from 'react';
import { Link } from 'react-router-dom';
// import { Help } from '../components/help/Help';
import {  Outlet } from 'react-router-dom';
import { CardComponent } from './CardComponent';

export const Main = () => {
  return (<>

    <div className="content-wrapper">
      <CardComponent />
      {/* <nav>
        <ul>
          <li>
            <Link to="/help/help2">1 gverdi</Link>
          </li>
          <li>
            <Link to="/help/help2/help3">help3</Link>
          </li>
        </ul>
      </nav> */}
      {/* <Outlet /> */}
    </div>
    </>
  );
};
