import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

<<<<<<< HEAD
// Unregister any service workers during development to avoid cached index.html
if (import.meta.env.DEV && typeof navigator !== "undefined" && "serviceWorker" in navigator) {
	navigator.serviceWorker
		.getRegistrations()
		.then((regs) => regs.forEach((r) => r.unregister()))
		.then(() => console.log("Dev: service workers unregistered"))
		.catch((e) => console.warn("Dev: failed to unregister service workers", e));
}

=======
>>>>>>> origin/main
createRoot(document.getElementById("root")!).render(<App />);
