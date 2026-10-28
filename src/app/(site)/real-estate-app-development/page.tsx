import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Techstack } from "@/components/Techstack";
import { Testimonials } from "@/components/Testimonials";
import { Hero } from "@/components/hero";
import { Industries } from "@/components/Industries";
import { ProcessSection } from "@/components/ProceSssection";
import { Services } from "@/components/Services";
import { TrustBar } from "@/components/TrustBar";
import { WhyChoose } from "@/components/WhyChoose";
import Data from "./telemedicine-app.json";


export default function Index() {
  return (
    <>

      <title>Car Rental App Development Company | WrathCode Technology</title>

      <meta name="description" content="WrathCode Technology builds custom car rental apps with vehicle booking, fleet management, GPS integration, secure payments, and convenient reservation features." />

      <meta name="keywords" content="car rental app development, car rental app development company, custom car rental app development, vehicle rental app development, car booking app development, car rental software development, car rental app developers, car rental website development" />

      <meta name="author" content="WrathCode Technology" />

      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      <link rel="canonical" href="https://wrathcode.com/car-rental-development/" />

      <meta property="og:title" content="Car Rental App Development Company | WrathCode Technology" />

      <meta property="og:description" content="Build a custom car rental platform with easy vehicle reservations, fleet management, real-time availability, GPS services, and secure online payments." />

      <meta property="og:url" content="https://wrathcode.com/car-rental-development/" />

      <meta property="og:type" content="website" />

      <meta property="og:site_name" content="WrathCode Technology" />

      <meta property="og:locale" content="en_US" />

      <meta property="og:image" content="https://wrathcode.com/home/banner_img.webp" />

      <meta property="og:image:width" content="1600" />

      <meta property="og:image:height" content="637" />

      <meta property="og:image:alt" content="Custom car rental app development services by WrathCode Technology" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content="Car Rental App Development Company | WrathCode Technology" />

      <meta name="twitter:description" content="Develop a car rental app with convenient bookings, vehicle management, GPS integration, secure payments, and flexible rental features." />

      <meta name="twitter:image" content="https://wrathcode.com/home/banner_img.webp" />

      <meta name="twitter:image:alt" content="Car rental app development solutions by WrathCode Technology" />


      {Data.JsonLdData.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}


      <Hero homeHero={Data.herosection} />
      <Services content={Data.services} />
      <TrustBar />
      <About content={Data.about} />
      <ProcessSection content={Data.process} />
      <Industries content={Data.industries} />
      <Cta content={Data.cta} />
      <WhyChoose content={Data.whyChoose} />
      <Techstack content={Data.techstack} />
      <Testimonials content={Data.testimonials} />
      <Faq content={Data.faq} />
    </>
  );
}
