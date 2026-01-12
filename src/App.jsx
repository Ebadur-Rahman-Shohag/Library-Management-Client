import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext } from "react";
import AuthContext from "./context/AuthContect";
import Skeleton from "./components/Skeleton";
function App() {
  const { loading } = useContext(AuthContext)
  return (
    <>
      {loading ? <Skeleton /> : <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>}

    </>
  );
}

export default App;
