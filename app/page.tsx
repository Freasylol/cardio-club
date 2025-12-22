import Header from "./components/header";
import Intro from "./components/intro";
import Search from "./components/search";
import Slider from "./components/slider";

export default function Home() {
  return (
    <div>
        <Header />
        <Intro />
        <Search />
        <Slider />
    </div>
  );
}
