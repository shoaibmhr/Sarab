
import Hero from "../components/Hero";
// import Marquee from "../components/Marquee";
import Category from "../components/Category";
import About from "../components/About";
import Menu from "../components/Menu";
import Sale from "../components/Sale";
import Gallery from "../components/Gallery";
import History from "../components/History";
import Team from "../components/Team";
import Order from "../components/Order";
import Feedback from "../components/Feedback";
import Reservation from "../components/Reservation";
import Blog from "../components/Blog";
import NewsLetter from "../components/NewsLetter";
import Contact from "../components/Contact";





const Home = () => {
  return (
    <>
      <Hero />
      {/* <Marquee /> */}
      <Category />
      <About />
      <Menu />
      <Sale />
      <Gallery />
      <History />
      <Team />
      <Order />
      <Feedback />
      <Reservation />
      <Blog/>
      <NewsLetter/>
      <Contact/>
    </>
  );
};

export default Home;
