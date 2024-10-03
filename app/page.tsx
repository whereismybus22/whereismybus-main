import Image from "next/image";
import Navbar from "./components/nav";
import LandingPageImage from "./components/LandingPageImage";
import Track from "./components/Track";
import About from "./components/About";
import ImageSlideshow from "./components/ImageSlide";

export default function Home() {
  return (
    <div>
      <LandingPageImage />
      <Track />
      <About />
      <ImageSlideshow />
    </div>
      
  );
}
