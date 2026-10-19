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
import Data from "./dating-app.json";


const schema = `{
  "@context": "https://schema.org",
  "@graph": [
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://wrathcode.com/#organization",
        "name": "WrathCode Technology Pvt Ltd",
        "alternateName": "WrathCode",
        "url": "https://wrathcode.com/",
        "description": "WrathCode Technology Pvt Ltd provides website development, mobile app development, game development, custom software, blockchain, AI, and cryptocurrency exchange development solutions.",
        "email": "sales@wrathcode.com",
        "telephone": [
            "+91-8000-83-6145",
            "+91-9982-14-1988",
            "+91-6376-74-7457"
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st Floor, JDA Complex, Plot No. 11, Sector 4, Vidhyadhar Nagar",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "postalCode": "302039",
            "addressCountry": "IN"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "sales@wrathcode.com",
                "telephone": "+91-9982-14-1988",
                "url": "https://wrathcode.com/contact-us/",
                "availableLanguage": [
                    "English",
                    "Hindi"
                ]
            }
        ],
        "areaServed": [
            {
                "@type": "Country",
                "name": "India"
            },
            {
                "@type": "Place",
                "name": "Worldwide"
            }
        ],
        "knowsAbout": [
            "Website Development",
            "Mobile App Development",
            "Game Development",
            "Custom Software Development",
            "Blockchain Development",
            "Cryptocurrency Exchange Development",
            "Forex Trading Software",
            "Artificial Intelligence",
            "NFT Marketplace Development",
            "E-commerce Development",
            "On-Demand Application Development",
            "Healthcare Software Development"
        ],
        "sameAs": [
            "https://www.linkedin.com/company/wrathcode-technology/"
        ]
    },
    {
      "@type": "WebSite",
      "@id": "https://wrathcode.com/#website",
      "url": "https://wrathcode.com/",
      "name": "WrathCode Technology",
      "publisher": {
        "@id": "https://wrathcode.com/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": "WebPage",
      "@id": "https://wrathcode.com/#webpage",
      "url": "https://wrathcode.com/",
      "name": "WrathCode Technology | Web & Mobile App Development Company",
      "description": "WrathCode Technology provides web and mobile app development, custom software, blockchain, AI, and crypto exchange solutions.",
      "isPartOf": {
        "@id": "https://wrathcode.com/#website"
      },
      "about": {
        "@id": "https://wrathcode.com/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": "Service",
      "@id": "https://wrathcode.com/#web-development-service",
      "name": "Web Development Services",
      "serviceType": "Website Design and Development",
      "provider": {
        "@id": "https://wrathcode.com/#organization"
      },
      "url": "https://wrathcode.com/web-development/"
    },
    {
      "@type": "Service",
      "@id": "https://wrathcode.com/#mobile-app-development-service",
      "name": "Mobile App Development Services",
      "serviceType": "Mobile Application Development",
      "provider": {
        "@id": "https://wrathcode.com/#organization"
      },
      "url": "https://wrathcode.com/"
    },
    {
      "@type": "Service",
      "@id": "https://wrathcode.com/#crypto-exchange-development-service",
      "name": "Crypto Exchange Development Services",
      "serviceType": "Cryptocurrency Exchange Development",
      "provider": {
        "@id": "https://wrathcode.com/#organization"
      },
      "url": "https://wrathcode.com/crypto-exchange-development/"
    }, 
  ]
}`;

export default function Index() {
  return (
    <>
      <title>Wrathcode — Product engineering studio</title>
      <meta
        name="description"
        content="Web and app development by Wrathcode. Building smarter tech for your growth — talk to a consultant or view the portfolio."
      />
      <meta
        name="keywords"
        content="Wrathcode, web development, app development, product engineering, software studio"
      />
      <meta name="author" content="Wrathcode" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href="https://wrathcode.dev/" />
      <meta property="og:title" content="Wrathcode — Building Smarter Tech For Your Growth" />
      <meta
        property="og:description"
        content="Web and app development by Wrathcode. Building smarter tech for your growth."
      />
      <meta property="og:url" content="https://wrathcode.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Wrathcode" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content="https://wrathcode.dev/home/banner_img.webp" />
      <meta property="og:image:width" content="1600" />
      <meta property="og:image:height" content="637" />
      <meta
        property="og:image:alt"
        content="Tablet and desktop monitor with glowing orbs in a digital grid"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Wrathcode — Building Smarter Tech For Your Growth" />
      <meta
        name="twitter:description"
        content="Web and app development by Wrathcode. Building smarter tech for your growth."
      />
      <meta name="twitter:image" content="https://wrathcode.dev/home/banner_img.webp" />
      <meta name="twitter:image:alt" content="Tablet and desktop monitor with glowing orbs in a digital grid" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
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
