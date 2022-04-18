import ProfileItem from "./ProfileItem"

const users = [
  {
  id: 1,
  name: "Francis",
  email: "rick.sandchez@gmail.com",
  password: "picklerick",
  wins: 0,
  losses: 0
  },
  {
  id: 2,
  name: "Billy",
  email: "lisa.simpson@gmail.com",
  password: "ehhhhh",
  wins: 0,
  losses: 0
  },
  {
  id: 3,
  name: "Jacob",
  email: "link@yahoo.com",
  password: "hyrule",
  wins: 0,
  losses: 0
  },
  {
  id: 4,
  name: "Sally",
  email: "simon_bel123@mail.ca",
  password: "dracula",
  wins: 0,
  losses: 0
  },
  {
  id: 5,
  name: "Samantha",
  email: "all_might@academia.jp",
  password: "plusUltra",
  wins: 0,
  losses: 0
  },
  {
  id: 6,
  name: "Tommy",
  email: "mario@mushroomkindom.jp",
  password: "plumber79",
  wins: 0,
  losses: 0
  }
  ]



export default function Profile() {

  const usersInfo = users.map (user => (
    <ProfileItem
      key={user.id}
      id={user.id}
      name={user.name}
      wins={user.wins}
      losses={user.losses}
    />
  ))

  return (
    <div>
      <h1>List of Users</h1>
      {usersInfo}
    </div>
  )
}