
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import Marquee from "../components/Marquee"
import Category from "../components/Category"
import About from "../components/About"
import Menu from "../components/Menu"
import Sale from "../components/Sale"

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
    </>

  );
}

export default Home;