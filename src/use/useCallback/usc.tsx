import { useCallback, useState } from "react";
import Search from "./search";

const allUsers = ["ahmad", "gama", "nug", "kala", "utra"];

export default function USC() {
  const [user, setUser] = useState(allUsers);
  const [count, setCount] = useState(0);

  const handleSearch = useCallback(
    (text: string) => {
      console.log(user[0]);
      const filter = allUsers.filter((user) => user.includes(text));
      setUser(filter);
    },
    [user],
  );

  const handleNumber = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={handleNumber}>Increment</button>
        <Search onChange={handleSearch} />
      </div>
      <div>
        <ul>
          {user.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
