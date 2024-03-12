import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import * as path from './paths';
import { HelpPage } from '../Pages/HelpPage';
import { AboutPage } from '../Pages/AboutPage';
import { HomePage } from '../Pages/HomePage';
import { HelpPage2 } from '../Pages/HelpPage2';
import { HelpPage3 } from '../Pages/HelpPage3';
// import { HelpPage3 } from '../Pages/HelpPage3';
import { MainPage } from '../Pages/MainPage';


const routes = [
  {
    path: path.HOME_PATH,
    component: <HomePage />,
    key: path.HOME_PATH,
  },
  {
    path: path.MAIN_PAGE,
    component:<MainPage/>,
    key: path.MAIN_PAGE,
  },
  {
    path: path.ABOUT,
    component: <AboutPage />,
    key: path.ABOUT,
  },
  {
    path: path.HELP,
    component: <HelpPage />,
    key: path.HELP,
    children: [
      {
        path: path.HELP2,
        component: <HelpPage2 />,
        key: path.HELP2,
        children: [
          {
            path: path.HELP3,
            component: <HelpPage3 />,
            key: path.HELP3,
          },
        ],
      },
    ],
  },
];

const renderNestedRoutes = r => {
  console.log('rrrr',r)
  return (
    <Route
      element={r.redirect ? <Navigate replace to={r.redirect} /> : r.component}
      path={r.path}
      key={r.key}
    >
      {r.children
        ? r.children.map(d => {
            return renderNestedRoutes(d);
          })
        : null}
    </Route>
  );
};

export const RouterList = () => {
  return (
    <Routes>
      {routes.map(r => {
        return renderNestedRoutes(r);
      })}
    </Routes>
  );
};
