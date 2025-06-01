import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import USS from "./use/useState/ust";
// import USE from "./use/useEffect/usr";
// import USM from "./use/useMemo/usm";
// import USC from "./use/useCallback/usc";
// import USC from "./use/useContext/usc";
// import USR from "./use/useRef/usr";
import USR from "./use/useReducer/usr";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <UST /> */}
    {/* <USR /> */}
    {/* <USM /> */}
    {/* <USC /> */}
    {/* <USC /> */}
    {/* <USR /> */}
    <USR />
  </StrictMode>,
);
