import React from 'react';
import { Link } from 'react-router-dom';
import { Help } from '../components/help/Help';
import {Main} from '../components/mainComponent/Main'
import {  Outlet } from 'react-router-dom';

export const MainPage = () => {
  return (
    <div className="content-wrapper">
      <Main />
      <nav>
        <ul>
          <li>
            <Link to="/help/help2">help2</Link>
          </li>
          <li>
            <Link to="/help/help2/help3">help3</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
