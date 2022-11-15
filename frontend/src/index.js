import { createRoot } from "react-dom/client";
import { BrowserRouter,
Routes,
Route } from "react-router-dom";
import App from "./App";
import Sign_in from "./routes/sign_in";
import Sign_up from "./routes/sign_up";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
          <Route path="/sign_in" element={<Sign_in />} />
          <Route path="/sign_up" element={<Sign_up />} />
      </Route>
    </Routes>
  </BrowserRouter>
);