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
import Data from "./travel-app.json";




export default function Index() {
  return (
    <>

      <title>Dating App Development Company | WrathCode Technology</title>

      <meta
        name="description"
        content="WrathCode Technology builds custom dating apps with smart matchmaking, real-time chat, video calling, secure payments, and scalable features for business growth."
      />

      <meta
        name="keywords"
        content="dating app development, dating app development company, custom dating app development, matchmaking app development, dating app developers, dating app solutions"
      />

      <meta name="author" content="WrathCode Technology" />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <meta
        name="googlebot"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <link
        rel="canonical"
        href="https://wrathcode.com/dating-app-development/"
      />

      <meta
        property="og:title"
        content="Dating App Development Company | WrathCode Technology"
      />

      <meta
        property="og:description"
        content="Launch a custom dating app with smart matchmaking, real-time messaging, video calling, intuitive UI/UX, and secure, scalable technology from WrathCode Technology."
      />

      <meta
        property="og:url"
        content="https://wrathcode.com/dating-app-development/"
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="WrathCode Technology" />
      <meta property="og:locale" content="en_US" />

      <meta
        property="og:image"
        content="https://wrathcode.com/home/banner_img.webp"
      />

      <meta property="og:image:width" content="1600" />
      <meta property="og:image:height" content="637" />

      <meta
        property="og:image:alt"
        content="Dating app development services by WrathCode Technology"
      />

      <meta name="twitter:card" content="summary_large_image" />

      <meta
        name="twitter:title"
        content="Dating App Development Company | WrathCode Technology"
      />

      <meta
        name="twitter:description"
        content="Build a custom dating app with matchmaking, chat, video calling, and secure features. Explore dating app development services by WrathCode Technology."
      />

      <meta
        name="twitter:image"
        content="https://wrathcode.com/home/banner_img.webp"
      />

      <meta
        name="twitter:image:alt"
        content="Dating app development services by WrathCode Technology"
      />



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
