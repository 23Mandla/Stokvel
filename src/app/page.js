import Carousel from "@/components/Carousel";
import InfoPage from "@/components/info";
import WhyUs from "@/components/Why-us";

export default function HomePage() {
  return (
    <>
      <div className="z-[-1]">
        <Carousel />
      </div>
      <div className="absolute top-[100%] w-screen">
        <InfoPage />
        <WhyUs />
      </div>
    </>
  );
}
