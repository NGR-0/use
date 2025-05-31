import { useState } from "react";
import { DashboardContext } from "./context";
import Dashboard from "./dashboard";

export interface User {
  isSubscribed: boolean;
  name: string;
}

export default function USC() {
  const [user] = useState<User>({
    isSubscribed: true,
    name: "John",
  });

  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}
