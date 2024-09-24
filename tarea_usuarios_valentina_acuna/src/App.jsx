import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home.jsx";
import { Users } from "./Users.jsx";
import { UsersByCountry } from "./UsersByCountry.jsx";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<Users />} path={"/users"} />
          <Route element={<UsersByCountry />} path={"users/:country"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
