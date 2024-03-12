import React from 'react';
import { Link } from 'react-router-dom';
import { Help } from '../components/help/Help';
import {  Outlet } from 'react-router-dom';

export const HelpPage = () => {
  return (
    <div className="content-wrapper">
      <Help />
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
