import Navbar from './components/navbar';
import Hero from './components/Hero';
import MainSection from './components/MainSection';
import BrowseJobs from './components/BrowseJobs';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Viewalljobs from './components/Viewalljobs';
import Footer from './components/Footer';
import Addjobs from './components/addjobs';
import Jobs from './components/Jobs';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Hero />
        <MainSection />
        <BrowseJobs />
        <Footer/>
      </>
    ),
  },
  {
    path: "/Home",
    element: (
      <>
        <Navbar />
        <Hero />
        <MainSection />
        <BrowseJobs />
        <Footer/>
      </>
    ),
  },
  {
    path: "/Jobs",
    element: <>
    <Navbar/>
    <Jobs/>
    </>
  },
  {
    path: "/AddJobs",
    element: (
      <>
      <Navbar/>
      <Addjobs/>
      </>
    )
  },
  {
    path: "/viewalljobs",
    element: (
      <>
        <Navbar />
        <Viewalljobs />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;


