import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MatchItem from "./components/MatchItem";
import './App.css';
import MatchItemList from "./components/MatchItemsList";
import NavBar from "./components/partials/NavBar"

import CreateSport from './components/CreateSport';
import Tournaments from './components/Tournaments';
import CreateMatch from './components/CreateMatch';
import SportsList from './components/SportsList';
import Profile from './components/Profile';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="matches" element={<MatchItemList />} />
        <Route path="matches/:matchid" element={<MatchItem />} />
        <Route path="matches/create" element={<CreateMatch />} />
        <Route path="sport/create" element={<CreateSport />} />
        <Route path="tournaments" element={<Tournaments />} />
        <Route path="sports" element={<SportsList />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
