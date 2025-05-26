export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Eminent Global Logistics",
    "url": "https://eminentlogistics.co.za",
    "logo": "https://eminentlogistics.co.za/logo-dark.png",
    "description": "Reliable, Scalable, Borderless Logistics Solutions for South Africa and beyond.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Johannesburg",
      "addressRegion": "Gauteng",
      "addressCountry": "South Africa"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27 (0) 11 234 5678",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.facebook.com/eminentgloballogistics",
      "https://www.linkedin.com/company/eminentgloballogistics"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
