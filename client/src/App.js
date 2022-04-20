import { Outlet, Link } from "react-router-dom";
import useApplicationData from "./hooks/useApplicationData";
import Banner from "./components/Homepage/Banner";
import HomepageIconsList from "./components/Homepage/HomepageIconsList";
import HomepageLinkList from "./components/Homepage/HomepageLinkList";
import HomepageStandardContainer from "./components/Homepage/HomepageStandardContainer";
import "./App.scss"

import { allTournamentsContent } from "./components/Homepage/HomepageContent"

import imgAllTournaments from "./images/home-all-tournaments.png"
    
function App() {
  const { state }  = useApplicationData()
  // const matches = state.matches
  // console.log(matches)
  // console.log(state.matches)
  return (
    <div className="App">
      <Banner />
      
      <HomepageLinkList />

      <HomepageStandardContainer
        image={imgAllTournaments}
        title={allTournamentsContent.title}
        text={allTournamentsContent.text}
        buttonText={allTournamentsContent.buttonText}
      />

      <HomepageStandardContainer
        image={imgAllTournaments}
        title={allTournamentsContent.title}
        text={allTournamentsContent.text}
        buttonText={allTournamentsContent.buttonText}
      />
      <ul>
        <li><Link to="profiles" state={state}>Profiles</Link></li>
        <li><Link to="/matches" state={state}>Matches</Link></li>
        <li><Link to="tournaments" state={state}>All Tournaments</Link></li>
        <li><Link to="sports" state={state}>Sports</Link></li>
        <li><Link to="matches/create" state={state}>Create Match</Link></li>
        <li><a href="tournament/create">Create Tournament</a></li>
        <li><a href="team/create">Create Teams</a></li>
        <li><Link to="sport/create">Create Sport</Link></li>
    </ul>
    <Outlet />
    </div>
  );
}

export default App;
