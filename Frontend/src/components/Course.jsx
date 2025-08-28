import { Link } from "react-router-dom";
import AllBooks from "./AllBooks";
import { useAuth } from "../context/AuthProvider";

function Course() {
  const [user] = useAuth();
  console.log(user);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Welcome back,{" "}
            <h1 className="text-pink-500">{user.fullname}</h1>
          </h1>
          <p className="mt-12">
            We’re glad to see you again! Continue your journey with your saved books, completed courses, and reading progress right where you left off. Explore fresh recommendations curated just for your interests, dive into free classics or unlock premium titles, and expand your knowledge one page at a time. Your personal library is always growing — so keep discovering, keep learning, and keep moving forward with us every day.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <AllBooks/>
      </div>
    </>
  );
}

export default Course;
