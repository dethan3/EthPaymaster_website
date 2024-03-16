import CubeCarousel from "../components/CubeCarousel";
import { dessertImages } from "../constants/data";
import logo from "../../public/assets/images/AAstart.svg";

export default function About() {
  return (
    <section className="w-[100%] mt-9 sm:mt-10 md:mt-11 flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
      <h1 className="text-center max-w-[18em]">About ETHPaymaster</h1>
      <img src={logo} className="w-[300px] profile-border" alt="logo" />

      <CubeCarousel name="desserts" carouselImages={dessertImages} />
    </section>
  );
}
