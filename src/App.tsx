import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import OurWork from "./pages/OurWork";
import TodayIsUs from "./pages/TodayIsUs";
import NewsAndUpdates from "./pages/NewsAndUpdates";
import TodayIsUsStory from "./pages/TodayIsUsStory";
import CrossSession from "./pages/CrossSession";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <Home />
              <About />
              <Team />
              <OurWork />
              <TodayIsUs />
              <NewsAndUpdates />
              <TodayIsUsStory />
              <CrossSession />
              <Gallery />
              <Contact />
            </>
          }
        />
        {/* <Route path="about" element={<div>About Page</div>} />
        <Route path="blogs" element={<div>Blogs Page</div>} />
        <Route path="contact" element={<div>Contact Page</div>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
