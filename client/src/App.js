import useApplicationData from "./hooks/useApplicationData";
    
function App() {
  useApplicationData()
  return (
    <div className="App">
      <ul>
        <li><a href="profile">Profile</a></li>
        <li><a href="matches">All Matches</a></li>
        <li><a href="tournaments">All Tournaments</a></li>
        <li><a href="sports">Sports</a></li>
        <li><a href="match/create">Create Match</a></li>
        <li><a href="tournament/create">Create Tournament</a></li>
        <li><a href="team/create">Create Teams</a></li>
        <li><a href="sport/create">Create Sport</a></li>
    </ul>
    </div>
  );
}

export default App;
