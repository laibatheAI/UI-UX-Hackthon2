import Body from "./components/body";
import Body2 from "./components/body2";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Latestblog from "./components/latestblog";
import Midbody from "./components/midbody";
import Topcategary from "./components/topcategaries";

export default function Home(){
  return(
    <div>
      <Hero />
      <Body />
      <Body2 />
      <Midbody />
      <Topcategary />
      <Latestblog />
      <Footer />
    </div>
  );
}
