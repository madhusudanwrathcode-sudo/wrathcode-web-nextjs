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
import Data from "./custome-software.json";





export default function Index() {
  return (
    <>

        <title>
          Custom Software Development Company | WrathCode Technology
        </title>

        <meta
          name="description"
          content="WrathCode Technology is a custom software development company delivering scalable software solutions, enterprise applications, SaaS platforms, CRM, ERP, and business automation solutions."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />

        {/* Canonical URL — replace with the exact page URL */}
        <link
          rel="canonical"
          href="https://wrathcode.com/custom-software-development"
        />

        {/* Mobile Optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="WrathCode Technology"
        />

        {/* SEO Keywords */}
        <meta
          name="keywords"
          content="custom software development company, custom software development services, enterprise software development, SaaS development, CRM development, ERP development, business process automation, software consulting, WrathCode Technology"
        />

        {/* Open Graph Metadata */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Custom Software Development Company | WrathCode Technology"
        />
        <meta
          property="og:description"
          content="Build scalable, secure, and tailored software with WrathCode Technology. We develop custom business applications, SaaS platforms, CRM, ERP, and enterprise software solutions."
        />
        <meta
          property="og:url"
          content="https://wrathcode.com/custom-software-development"
        />
        <meta
          property="og:site_name"
          content="WrathCode Technology"
        />
        <meta
          property="og:image"
          content="https://wrathcode.com/images/custom-software-development.webp"
        />
        <meta
          property="og:image:alt"
          content="Custom Software Development Services by WrathCode Technology"
        />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Software Development Services | WrathCode"
        />
        <meta
          name="twitter:description"
          content="Transform your business with custom software, SaaS platforms, enterprise applications, CRM, ERP, and automation solutions from WrathCode Technology."
        />
        <meta
          name="twitter:image"
          content="https://wrathcode.com/images/custom-software-development.webp"
        />

        {/* Author and Company Information */}
        <meta
          name="author"
          content="WrathCode Technology Pvt Ltd"
        />
        <meta
          name="reply-to"
          content="sales@wrathcode.com"
        />
        <meta
          name="copyright"
          content="WrathCode Technology Pvt Ltd"
        />

        {/* Performance Optimization */}
        <link rel="preconnect" href="https://wrathcode.com" />
        <link rel="dns-prefetch" href="//wrathcode.com" />

        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(Data.JsonLdData),
          }}
        /> */}
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
