import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Sections/Banner";
import Trello_101 from "./components/Sections/Trello_101";
import Trello_action from "./components/Sections/Trello_action";
import Trello_responsive_action from "./components/Sections/Trello_responsive_action";
import Trello_views from "./components/Sections/Trello_views";
import Trello_features from "./components/Sections/Trello_features";
import Trello_comments from "./components/Sections/Trello_comments";
import Trello_plans from "./components/Sections/Trello_plans";
import Trello_teams from "./components/Sections/Trello_teams";
import Trello_started from "./components/Sections/Trello_started";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Trello_101></Trello_101>
      <Trello_action></Trello_action>
      <Trello_responsive_action></Trello_responsive_action>
      <Trello_views></Trello_views>
      <Trello_features></Trello_features>
      <Trello_comments></Trello_comments>
      <Trello_plans></Trello_plans>
      <Trello_teams></Trello_teams>
      <Trello_started></Trello_started>
      <Footer></Footer>
    </div>
  );
}

export default App;
