import { createContext, useContext } from "react";

import type { User } from "./usc";

export const DashboardContext = createContext<User | undefined>(undefined);

export function useUserContext(): User {
  const user = useContext(DashboardContext);
  if (user === undefined) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider",
    );
  }
  return user;
}
