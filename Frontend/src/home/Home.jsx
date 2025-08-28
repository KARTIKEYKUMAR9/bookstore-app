import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthProvider";
import AllBooks from "../components/AllBooks";

function Home() {
  const [user] = useAuth();
  // console.log(user);
  

  return (
    <>
      <Navbar />
      <Banner />
      {user?<AllBooks/>:<Freebook/>}
      <Footer />
    </>
  );
}

export default Home;
