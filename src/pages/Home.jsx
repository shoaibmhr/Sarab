
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import Marquee from "../components/Marquee"
import Category from "../components/Category"
import About from "../components/About"
import Menu from "../components/Menu"
import Sale from "../components/Sale"
import Gallery from "../components/Gallery"
import History from "../components/History"
import Team from "../components/Team";
import Order from "../components/Order";
import Feedback from "../components/Feedback";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Marquee />
      <Category />
      <About/>
      <Menu />
      <Sale />
      <Gallery/>
      <History />
      <Team/>
      <Order/>
      <Feedback/>
    </>

  );
}

export default Home;