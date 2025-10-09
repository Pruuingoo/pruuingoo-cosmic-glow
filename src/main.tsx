import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import and inject Vercel Speed Insights
import { inject } from "@vercel/speed-insights";
inject();

createRoot(document.getElementById("root")!).render(<App />);
