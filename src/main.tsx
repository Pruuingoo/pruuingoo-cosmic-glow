import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import and inject Vercel Speed Insights
// Use `// @ts-ignore` because TypeScript has no types for this package
// This tells TypeScript to ignore the next line
// It will still work perfectly at runtime
// Make sure the package is installed in package.json
// npm install @vercel/speed-insights
// or add manually in GitHub dependencies

// @ts-ignore
import { inject } from "@vercel/speed-insights";
inject();

createRoot(document.getElementById("root")!).render(<App />);
