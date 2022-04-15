import { render } from "react-dom"

// import MatchItem from "./components/MatchItem";
// import './App.css';
// import MatchItemList from "./components/MatchItemsList";


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
      <ul>
        <li><a href="profile">Profile</a></li>
       <li><a href="matches">All Matches</a></li>
       <li><a href="tournaments">All Tournaments</a></li>
        <li><a href="creatematch">Create Match</a></li>
       <li> <a href="createtournament">Create Tournament</a></li>
        <li> <a href="createteam">Create Teams</a></li>
    </ul>
    </div>
  );
}

export default App;
