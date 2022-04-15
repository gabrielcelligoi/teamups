import { render } from "react-dom"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MatchItem from "./components/MatchItem";
import './App.css';
import MatchItemList from "./components/MatchItemsList";


const match = [
  {
    date: '2022-04-01T08:00:00.000Z',
    sport: 'Baseball',
    player1: 'Francis',
    player2: 'Keila',
    location: 'Toronto'
  },
  {
    date: '2022-05-01T08:00:00.000Z',
    sport: 'Soccer',
    player1: 'Gabriel',
    player2: 'Keila',
    location: 'Vancouver'
  }
]


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="matches/:matchid" element={<MatchItem />} />
      <Route path="matches" element={<MatchItemList />}  />

      </Routes>
      </BrowserRouter>

      <a href="/matches/:matchid">link</a>

      <MatchItemList />
    </div>
  );
}

export default App;
