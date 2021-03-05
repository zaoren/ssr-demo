import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/home';
import Login from '../components/Login';

export default [
  {
    key:"default",
    path: "/",
    exact: true,
    component: Home,
    loadData: (store) => { Home.getInitialData(store) }
  },
  {
    key:"home",
    path: "/home",
    exact: true,
    component: Home,
    loadData: (store) => { Home.getInitialData(store) }
  },
  {
    key:"login",
    path: "/login",
    exact: true,
    component: Login,
    loadData: (store) => { Login.getInitialData(store) }
  }
];