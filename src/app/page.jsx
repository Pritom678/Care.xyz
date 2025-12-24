import AboutMission from "@/components/home/AboutMission";
import Banner from "@/components/home/Banner";
import Testimonials from "@/components/home/Testimonials";
import Services from "@/components/services/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section>
        <Banner />
      </section>
      <section>
        <AboutMission />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Testimonials />
      </section>
    </div>
  );
}
