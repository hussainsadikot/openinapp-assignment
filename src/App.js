import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";

import Transactions from "./components/Transactions";
import Dashboard from "./components/pages/Dashboard";
import Schedules from "./components/Schedules";
import Settings from "./components/Settings";
import Users from "./components/Users";
import ContextProvider from "./provider/ContextProvider";
import ContactUs from "./components/ContactUs";
import Support from "./components/Support";
import Signup from "./components/pages/Signup";


function App() {
  return (
    <ContextProvider>
      

      <Router>
        <Routes>
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="transactions" element={<Transactions></Transactions>}></Route>
            <Route path="schedules" element={<Schedules></Schedules>}></Route>
            <Route path="users" element={<Users></Users>}></Route>
            <Route path="settings" element={<Settings></Settings>}></Route>
            <Route path="support" element={<Support></Support>}></Route>
            <Route path="contactus" element={<ContactUs></ContactUs>}></Route>
          </Route>
          <Route
          path="/" element={<Signup></Signup>}
          >

          </Route>
        </Routes>

      </Router>
    </ContextProvider>
  );
}

export default App;
