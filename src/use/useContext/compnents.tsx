import { useUserContext } from "./context";

export function SideBar() {
  const user = useUserContext();
  return (
    <div>
      <div>{user.name}</div>
      <div>Subcribe Status : {user.isSubscribed ? "Yes" : "No"}</div>
    </div>
  );
}

export function Profile() {
  const user = useUserContext();
  return (
    <div>
      <div>{user.name}</div>
    </div>
  );
}
