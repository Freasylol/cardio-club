import Header from "./components/Header";
import Intro from "./components/Intro";
import Search from "./components/Search";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Community from "./components/Community";
import Helper from "./components/Helper";

export default function Home() {
  return (
    <div>
        <Header />
        <Intro />
        <Search />
        <Slider />
        <Community />
        <Helper />
        <Footer />
    </div>
  );
}
