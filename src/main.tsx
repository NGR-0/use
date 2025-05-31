import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import UST from "./use/useState/ust";
// import USR from "./use/useRef/usr";
// import USM from "./use/useMemo/usm";
// import USC from "./use/useCallback/usc";
import USC from "./use/useContext/usc";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <UST /> */}
    {/* <USR /> */}
    {/* <USM /> */}
    {/* <USC /> */}
    <USC />
  </StrictMode>,
);
