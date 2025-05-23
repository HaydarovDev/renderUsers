import "./App.css";
import { useState } from "react";

const users = [
  {
    firstName: "Chelsea Homenick",
    lastName: "O'Connell",
    categories: "family",
    phone: "1-855-691-5087 x295",
    id: "1",
  },
  {
    firstName: "Donna Schiller",
    lastName: "Collier",
    categories: "family",
    phone: "229.243.6225 x1765",
    id: "2",
  },
  {
    firstName: "Cornelius Spinka Sr.",
    lastName: "Langosh",
    categories: "friends",
    phone: "(661) 426-1902",
    id: "3",
  },
  {
    firstName: "Victoria Kutch",
    lastName: "Kozey",
    categories: "friends",
    phone: "1-619-205-9857",
    id: "4",
  },
  {
    firstName: "Gregg Christiansen",
    lastName: "Kuphal",
    categories: "relatives",
    phone: "1-745-720-5111 x86583",
    id: "5",
  },
  {
    firstName: "Dr. Marvin Lesch V",
    lastName: "Ledner",
    categories: "relatives",
    phone: "577-447-7290 x6042",
    id: "6",
  },
  {
    firstName: "Gladys Runte",
    lastName: "Rau",
    categories: "relatives",
    phone: "825.309.9547 x6566",
    id: "7",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [filteredUser, setFilter] = useState("all");

  // const

  const filteredUsers = users.filter((user) => {
    const matchCategory =
      filteredUser === "all" || user.categories === filteredUser;
    const matchSearch = user.lastName
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchSearch && matchCategory;
  });

  return (
    <div>
      <h1>Users</h1>
      <ul>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search user"
        />

        <select
          name=""
          id="select"
          onChange={(e) => setFilter(e.target.value)}
          defaultValue="all"
        >
          <option value="all">All</option>
          <option value="family">Family</option>
          <option value="relatives">Relatives</option>
          <option value="friends">Friends</option>
        </select>

        {filteredUsers.map((user) => {
          return (
            <li key={user.id}>
              {user.id}) {user.firstName}
              {user.lastName}
              <span>
                {user.categories.charAt(0).toLocaleUpperCase() +
                  user.categories.slice(1)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
