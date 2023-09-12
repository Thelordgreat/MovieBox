import FeaturedMovies from "../components/landing-page-components/FeaturedMovies";
import Footer from "../components/landing-page-components/Footer";
import Hero from "../components/landing-page-components/Hero";
import Nav from "../components/landing-page-components/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <FeaturedMovies />
      <Footer />
    </>
  );
};

export default Home;
