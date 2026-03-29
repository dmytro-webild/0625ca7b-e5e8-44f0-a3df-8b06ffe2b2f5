"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, Clock, Phone, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLarge"
        background="none"
        cardStyle="outline"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="America's Cleaning Service NYC"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="America's Cleaning Service NYC"
      description="Experience the gold standard of professional cleaning in New York City. We bring pristine cleanliness, attention to detail, and unparalleled service to your home or office."
      tag="Trusted Cleaning Experts"
      buttons={[
        {
          text: "Book Now",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-doing-housework-while-cleaning-kitchen_231208-528.jpg",
          imageAlt: "Professional cleaning service",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-smiling-woman-wearing-rubber-gloves-cleaning_1163-2431.jpg",
          imageAlt: "Expert cleaning team",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-people-holding-flask_23-2149720816.jpg?_wi=1",
          imageAlt: "Clean modern kitchen",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/couple-enjoying-cleaning-their-house-using-vacuum-mop_482257-57.jpg",
          imageAlt: "Tidy bedroom",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-rubber-gloves-wiping-sink_23-2148465091.jpg",
          imageAlt: "Sparkling bathroom",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-wiping-window_23-2148464991.jpg",
          imageAlt: "Window cleaning view",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Why NYC Trusts Us"
      description="We are dedicated to setting the highest standard for residential and commercial cleaning across the five boroughs. With years of local experience, our team brings excellence to every corner of your property."
      metrics={[
        {
          value: "10k+",
          title: "Homes Cleaned",
        },
        {
          value: "15+",
          title: "Years Experience",
        },
        {
          value: "99%",
          title: "Client Satisfaction",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/view-professional-cleaning-service-person-holding-supplies_23-2150520607.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Our Professional Services"
      description="From daily upkeep to deep restoration, our services are customized to meet the unique needs of NYC residents and businesses."
      accordionItems={[
        {
          id: "s1",
          title: "Residential Cleaning",
          content: "Complete deep cleaning for your home, ensuring every surface is pristine.",
        },
        {
          id: "s2",
          title: "Office & Commercial",
          content: "Professional cleaning solutions tailored for NYC commercial workspaces.",
        },
        {
          id: "s3",
          title: "Move-In / Move-Out",
          content: "Comprehensive cleaning services to get your space ready for new tenants.",
        },
        {
          id: "s4",
          title: "Post-Construction",
          content: "Removing dust and debris after renovation for a ready-to-use space.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-people-holding-flask_23-2149720816.jpg?_wi=2"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "50+",
          title: "Expert Cleaners",
          description: "Highly trained and vetted personnel.",
          icon: Award,
        },
        {
          id: "m2",
          value: "24/7",
          title: "Availability",
          description: "Whenever you need our services.",
          icon: Clock,
        },
        {
          id: "m3",
          value: "100%",
          title: "Insured/Bonded",
          description: "Complete security and peace of mind.",
          icon: ShieldCheck,
        },
      ]}
      title="Unmatched Excellence"
      description="We take pride in our precision, our team, and our commitment to the NYC community."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="America's Cleaning Service transformed our office space completely. They are fast, meticulous, and truly professional. We wouldn't trust anyone else in NYC."
      rating={5}
      author="Marcus V., Financial District"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-successful-grey-haired-female-ceo-smiling-content-experienced-beautiful-businesswoman-posing-office-room-business-company-appearance-expression-concept_74855-11905.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/businessman-thumbs-up-holding-laptop_23-2148308515.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/couple-holding-hands-sofa-home_23-2147744902.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-businesswoman-cleaning-her-computer-keyboard-office_637285-5424.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/businessman-thumbs-up-holding-laptop_23-2148308515.jpg",
          alt: "Client 5",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How do I schedule an appointment?",
          content: "Easily book through our website or give us a call anytime.",
        },
        {
          id: "q2",
          title: "Do you provide cleaning supplies?",
          content: "Yes, we bring all necessary professional-grade eco-friendly cleaning supplies.",
        },
        {
          id: "q3",
          title: "Is your service insured?",
          content: "Absolutely, our team is fully bonded and insured for your protection.",
        },
      ]}
      ctaTitle="Ready for a cleaner home?"
      ctaDescription="Get a free quote today and join the many satisfied customers across NYC."
      ctaButton={{
        text: "Get a Free Quote",
        href: "#",
      }}
      ctaIcon={Phone}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Team",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Residential",
              href: "#services",
            },
            {
              label: "Commercial",
              href: "#services",
            },
            {
              label: "Deep Cleaning",
              href: "#services",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Email: hello@americascleaningservice.nyc",
              href: "mailto:hello@americascleaningservice.nyc",
            },
            {
              label: "Phone: (212) 555-0123",
              href: "tel:2125550123",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 America's Cleaning Service NYC. All rights reserved."
      bottomRightText="Privacy Policy | Terms of Service"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
