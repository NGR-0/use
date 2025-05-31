import { useState } from "react";

interface User {
  firstName: string;
  lastName: string;
}

export default function UST() {
  const [name, setName] = useState<User>({
    firstName: "",
    lastName: "",
  });
  const [users, setUsers] = useState<User[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      handleUpdateUser();
    } else {
      handleAddUser();
    }
  };
  const handleAddUser = () => {
    if (name.firstName && name.lastName) {
      setUsers([
        ...users,
        { firstName: name.firstName, lastName: name.lastName },
      ]);
      setName({ firstName: "", lastName: "" });
    }
  };

  const handleEdit = (index: number) => {
    setIsEditing(true);
    setEditIndex(index);
    setName(users[index]);
  };

  const handleDelete = (index: number) => {
    const filtered = users.filter((_, i) => i !== index);
    setUsers(filtered);
  };

  const handleUpdateUser = () => {
    if (editIndex != null) {
      if (name.firstName.trim() && name.lastName.trim()) {
        const updatedUsers = [...users];
        updatedUsers[editIndex] = {
          firstName: name.firstName,
          lastName: name.lastName,
        };
        setUsers(updatedUsers);
        setName({ firstName: "", lastName: "" });
        setIsEditing(false);
        setEditIndex(null);
      } else {
        alert("cant null");
      }
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          />
        </div>

        <button type="submit">{isEditing ? "Update" : "Submit"}</button>
      </form>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName}{" "}
            <button onClick={() => handleEdit(index)}>Edit</button>{" "}
            <button onClick={() => handleDelete(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
