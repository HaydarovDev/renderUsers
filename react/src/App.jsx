import "./App.css";
import { useState } from "react";

const users = [
  {
    fullName: "Matthew Zboncak IV",
    id: "1",
    category: "family",
  },
  {
    fullName: "Myron Zulauf",
    category: "relatives",
    id: "2",
  },
  {
    fullName: "June Bauch IV",
    category: "friends",
    id: "3",
  },
  {
    fullName: "Christy Von DVM",
    category: "friends",
    id: "4",
  },
  {
    fullName: "Dr. Tom Tillman MD",
    category: "relatives",
    id: "5",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [addUser, setUser] = useState([]);

  const filteredUsers = users.filter((user) => {
    if (search == "") {
      return users;
    } else {
      return user.fullName.toLowerCase().includes(search.toLowerCase());
    }
  });

  // const adduser =

  return (
    <div>
      <div className="form">
        <input
          type="text"
          placeholder="Enter firstname..."
          onChange={(e) => setUser(e.target.value)}
        />
        <input type="text" placeholder="Enter firstname..." />
        <select name="" id="">
          <option value="family">Family</option>
          <option value="friends">Friends</option>
          <option value="relatives">Relatives</option>
        </select>
        <input type="text" placeholder="Enter firstname..." />
      </div>

      <h1>Users</h1>
      <ul>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search user"
        />

        {filteredUsers.map((user) => {
          return (
            <li key={user.id}>
              {user.id}) {user.fullName}
              <span>
                {user.category.charAt(0).toLocaleUpperCase() +
                  user.category.slice(1)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
