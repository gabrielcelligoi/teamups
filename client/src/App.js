// import { render } from "react-dom"
import NavBar from "./components/partials/NavBar"

// import MatchItem from "./components/MatchItem";
// import './App.css';
// import MatchItemList from "./components/MatchItemsList";



    
function App() {
  return (
    <div className="App">
      <NavBar />
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
