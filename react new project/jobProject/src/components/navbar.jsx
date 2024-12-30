import  { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {

  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  const handleActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <div className="bg-indigo-700  px-28 py-6 border-b border-indigo-500 flex justify-between items-center  " >
       <div className="flex items-center " >
         {/* logo */}
         <img className="h-10 w-auto object-cover  " src="/theme/images/logo.png" alt="" />
         <h2 className="text-2xl font-bold text-white pl-2 " >React Jobs</h2>
       </div>
       <div>
       <ul className="flex space-x-4">
      <li
        className={`px-3 py-2 text-white ${
          activePage === "/Home" ? "bg-black" : "hover:bg-black"
        } rounded-lg`}
      >
        <Link to="/Home" onClick={() => handleActivePage("/Home")}>
          Home
        </Link>
      </li>
      <li
        className={`px-3 py-2 text-white ${
          activePage === "/Jobs" ? "bg-black" : "hover:bg-black"
        } rounded-lg`}
      >
        <Link to="/Jobs" onClick={() => handleActivePage("/Jobs")}>
          Jobs
        </Link>
      </li>
      <li
        className={`px-3 py-2 text-white ${
          activePage === "/AddJobs" ? "bg-black" : "hover:bg-black"
        } rounded-lg`}
      >
        <Link to="/AddJobs" onClick={() => handleActivePage("/AddJobs")}>
          Add jobs
        </Link>
      </li>
    </ul>
  

       </div>
    </div>
  )
}

export default Navbar