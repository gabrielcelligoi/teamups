import { Outlet, Link } from "react-router-dom";
import useApplicationData from "./hooks/useApplicationData";
import Banner from "./components/Homepage/Banner";
import HomepageIconsList from "./components/Homepage/HomepageIconsList";
import HomepageLinkList from "./components/Homepage/HomepageLinkList";
import HomepageStandardContainer from "./components/Homepage/HomepageStandardContainer";
import SecundaryBanner from "./components/Homepage/SecondaryBanner";
import "./App.scss"

import { allTournamentsContent, allMatchesContent,allSportsContent, createSportContent } from "./components/Homepage/HomepageContent"

import imgAllTournaments from "./images/home-all-tournaments.png";
import imgAllMatches from "./images/home-all-matches.png";
import imgAllSports from "./images/home-all-sports.png";
import imgCreateSport from "./images/home-create-sport.png";
    
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
        link="tournaments"   
      />

      <HomepageStandardContainer
        image={imgAllMatches}
        title={allMatchesContent.title}
        text={allMatchesContent.text}
        buttonText={allMatchesContent.buttonText}
        link="/matches" 
        mirror
      />

      <SecundaryBanner />

      <HomepageStandardContainer
        image={imgAllSports}
        title={allSportsContent.title}
        text={allSportsContent.text}
        buttonText={allSportsContent.buttonText}
        link="sports"        
      />

      <HomepageStandardContainer
        image={imgCreateSport}
        title={createSportContent.title}
        text={createSportContent.text}
        buttonText={createSportContent.buttonText}
        link="sport/create" 
        mirror
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
