import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Users } from "./components/Users";
import { UsersCountry } from "./components/UsersCountry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Users />} path={"/usuarios"} />
        <Route element={<UsersCountry />} path={"/usuarios/:pais"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
