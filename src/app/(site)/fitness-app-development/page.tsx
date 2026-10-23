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
import Data from "./fitness-app.json";

export default function Index() {
  return (
    <>

      <title>Astrology App Development Company | WrathCode Technology</title>

      <meta
        name="description"
        content="WrathCode Technology develops custom astrology apps with horoscope predictions, kundli matching, AI-powered insights, live astrologer consultations, and secure payments."
      />

      <meta
        name="keywords"
        content="astrology app development, astrology app development company, custom astrology app development, horoscope app development, kundli app development, astrologer consultation app, AI astrology app development, birth chart app development"
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
        href="https://wrathcode.com/astrology-app-development/"
      />

      <meta
        property="og:title"
        content="Astrology App Development Company | WrathCode Technology"
      />

      <meta
        property="og:description"
        content="Launch a custom astrology app with horoscope predictions, kundli generation, birth chart analysis, AI-powered features, live astrologer consultations, and secure payments."
      />

      <meta
        property="og:url"
        content="https://wrathcode.com/astrology-app-development/"
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
        content="Astrology app development services by WrathCode Technology"
      />

      <meta name="twitter:card" content="summary_large_image" />

      <meta
        name="twitter:title"
        content="Astrology App Development Company | WrathCode Technology"
      />

      <meta
        name="twitter:description"
        content="Build a custom astrology app with horoscope predictions, kundli matching, AI astrology features, and live astrologer consultations from WrathCode Technology."
      />

      <meta
        name="twitter:image"
        content="https://wrathcode.com/home/banner_img.webp"
      />

      <meta
        name="twitter:image:alt"
        content="Astrology app development services by WrathCode Technology"
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
