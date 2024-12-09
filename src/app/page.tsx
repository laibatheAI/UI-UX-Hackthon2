import Body from "./components/body";
import Body2 from "./components/body2";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Midbody from "./components/midbody";

export default function Home(){
  return(
    <div>
      <Hero />
      <Body />
      <Body2 />
      <Midbody />
      <Footer />
    </div>
  );
}