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
import Data from "./mlm-software.json";


export default function Index() {
  return (
    <>

<title>Custom Mobile App Development Company | WrathCode Technology</title>

<meta name="description" content="WrathCode Technology develops custom Android and iOS apps with intuitive UI/UX, secure integrations, scalable architecture, and high-performance features tailored to your business goals." />

<meta name="keywords" content="custom mobile app development, mobile app development company, mobile application development services, Android app development, iOS app development, custom mobile application development, business mobile app development, eCommerce app development, on-demand app development, mobile app developers" />

<meta name="author" content="WrathCode Technology" />

<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

<meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

<link rel="canonical" href="https://wrathcode.com/custom-mobile-app-development/" />

<meta property="og:title" content="Custom Mobile App Development Company | WrathCode Technology" />

<meta property="og:description" content="Build secure, scalable Android and iOS applications with custom features, intuitive UI/UX design, seamless API integrations, and reliable performance." />

<meta property="og:url" content="https://wrathcode.com/custom-mobile-app-development/" />

<meta property="og:type" content="website" />

<meta property="og:site_name" content="WrathCode Technology" />

<meta property="og:locale" content="en_US" />

<meta property="og:image" content="https://wrathcode.com/home/banner_img.webp" />

<meta property="og:image:width" content="1600" />

<meta property="og:image:height" content="637" />

<meta property="og:image:alt" content="Custom mobile app development services by WrathCode Technology" />

<meta name="twitter:card" content="summary_large_image" />

<meta name="twitter:title" content="Custom Mobile App Development Company | WrathCode Technology" />

<meta name="twitter:description" content="WrathCode Technology builds custom Android and iOS apps with secure integrations, intuitive designs, scalable architecture, and business-focused features." />

<meta name="twitter:image" content="https://wrathcode.com/home/banner_img.webp" />

<meta name="twitter:image:alt" content="Custom Android and iOS app development solutions by WrathCode Technology" />


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
