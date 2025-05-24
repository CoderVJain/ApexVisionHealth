import { Helmet } from "react-helmet";
import Hero from "@/components/sections/Hero";
import FeaturedServices from "@/components/sections/FeaturedServices";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Apex Vision MNS - Healthcare & Accounting Services</title>
        <meta 
          name="description" 
          content="Apex Vision MNS provides exceptional healthcare and accounting services tailored to your unique needs. Contact us today to learn more." 
        />
      </Helmet>
      <div>
        <Hero />
        <FeaturedServices />
        <Testimonials />
        <CallToAction />
      </div>
    </>
  );
}
