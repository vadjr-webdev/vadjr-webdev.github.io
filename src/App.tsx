import "./App.css";
import Introduction from "./components/layout/Introduction/Introduction";
import FeaturedProjects from "./components/layout/FeaturedProjects/FeaturedProjects";
import TechStack from "./components/layout/TechStack/TechStack";
// import HireMe from "./components/HireMe";
import AboutMe from "./components/layout/AboutMe/AboutMe";
// import PortfolioData from "../public/data/data.json";
import WorkExperience from "./components/layout/WorkExperience/WorkExperience";

// const portfolioData = PortfolioData;

function App() {
  return (
    <>
      <div className="max-w-250 flex mx-auto gap-10 pt-12">
        <div className="w-1/2 flex items-center">
          <Introduction />
        </div>
        <div className="w-1/2">
          <AboutMe />
        </div>
      </div>
      <div className="max-w-250 flex mx-auto gap-10 py-10">
        <div className="w-1/3">
          <WorkExperience />
        </div>
        <div className="w-1/3">
          <TechStack />
        </div>
        <div className="w-1/3">
          <FeaturedProjects />
        </div>
      </div>
      <div className="max-w-250 flex mx-auto gap-10 py-10">
        <div className="w-1/2"></div>
      </div>
    </>
  );
}

export default App;
