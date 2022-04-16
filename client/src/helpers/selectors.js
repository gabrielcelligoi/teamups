const matches = [
    {
      match_id: 1,
      players: "Francis",
      sport: "Basketball",
      date: "2022-04-01T04:00:00.000Z",
      location: "Baltimore"
    },

    {
      match_id: 1,
      players: "Billy",
      sport: "Basketball",
      date: "2022-04-01T04:00:00.000Z",
      location: "Baltimore"
    },

    {
      match_id: 2,
      players: "Francis",
      sport: "Basketball",
      date: "2022-05-01T04:00:00.000Z",
      location: "Toronto"
    },

    {
      match_id: 2,
      players: "Billy",
      sport: "Basketball",
      date: "2022-05-01T04:00:00.000Z",
      location: "Toronto"
    }
  ]

  const getPlayersPerMatch = (match, id) => {

    const currentMatch = matches.filter(current => current.match_id === id);
    currentMatch[0].players = [currentMatch[0].players]
    for (let i = 0; i < currentMatch.length - 1; i++) {
      
      currentMatch[0].players.push(currentMatch[1].players)
    }

    currentMatch.length = 1
    return currentMatch
  }
  console.log(getPlayersPerMatch(matches, 1))