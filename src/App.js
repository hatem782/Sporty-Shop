import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Theme from "./theme/Theme";
import Login from "./pages/login/Login";
import Spinner from "./components/Spinner/Spinner";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import React, { useState, useEffect } from "react";
import { verifAdmin } from "./services/Auth";
import Website from "./pages/website/mainPage/Website";

const Dash = () => {
  return (
    <Theme>
      <Dashboard />
    </Theme>
  );
};

function App() {
  //const [remember, setRemember] = useState(false);
  const [admin, setAdmin] = useState("loading");

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      //console.log(user);
      if (user) {
        const isAdmin = await verifAdmin(user);
        //console.log("isAdmin", isAdmin);
        if (isAdmin) {
          setAdmin("admin_exist");
        } else {
          setAdmin("go_to_login");
        }
      } else {
        setAdmin("go_to_login");
      }
    });
  }, []);

  return (
    <div className="App">
      <Theme>
        {/* {admin==="noAuth"? <Navigate to="/login" />:null }
      {admin==="admin"? <Navigate to="/dashboard" />:null } */}
        {admin === "loading" ? (
          <Spinner />
        ) : (
          <Router>
            {admin === "admin_exist" ? (
              <Routes>
                <Route path="/dashboard/*" element={<Dash />} />
                {/* <Route
                path="/login"
                element={<Login setRemember={setRemember} />}
              /> */}
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
            ) : null}
            {admin === "go_to_login" ? (
              <Routes>
                <Route
                  path="/login"
                  element={<Login /*setRemember={setRemember}*/ />}
                />
                <Route path="/website/*" element={<Website />} />
                <Route path="*" element={<Navigate to="/website" />} />
              </Routes>
            ) : null}
          </Router>
        )}
      </Theme>
    </div>
  );
}

export default App;
