import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import  Contact from "./components/Contact";
import About from "./components/About";
import Carrer from "./components/Carrer";
import Blogs from "./components/Blogs";
import NotFound from "./components/NotFound"
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  // console.log(authUser);
  // const UserContext = createContext();

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About/>} />
          <Route path="/career" element={<Carrer/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/Blogs" element={<Blogs/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
