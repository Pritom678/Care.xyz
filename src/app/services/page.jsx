import Services from "@/components/services/Services";

export const metadata = {
  title: "Care Services for Children & Elderly | Care.xyz",
  description:
    "Discover professional caregiving services at Care.xyz including child care, elderly care, home nursing, and personal assistance. Trusted, compassionate, and reliable care services near you.",

  keywords: [
    "care services",
    "child care service",
    "elderly care service",
    "home care",
    "nursing care",
    "personal caregiver",
    "Care.xyz",
    "professional caregiving",
  ],

  openGraph: {
    title: "Professional Care Services | Care.xyz",
    description:
      "Explore trusted caregiving services for children, elderly, and home care. Compassionate and reliable caregivers at Care.xyz.",
    url: "https://care.xyz/services",
    siteName: "Care.xyz",
    images: [
      {
        url: "https://res.cloudinary.com/do3iu9q7d/image/upload/v1766650849/Screenshot_2025-12-25_142016_be74ic.png",
        width: 1200,
        height: 630,
        alt: "Care.xyz Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Care Services | Care.xyz",
    description:
      "Trusted caregiving services for children and elderly. Explore Care.xyz services today.",
    images: [
      "https://res.cloudinary.com/do3iu9q7d/image/upload/v1766650849/Screenshot_2025-12-25_142016_be74ic.png",
    ], 
  },

  robots: {
    index: true,
    follow: true,
  },
};

const ServicesPage = () => {
  return (
    <>
      <Services />
    </>
  );
};

export default ServicesPage;
