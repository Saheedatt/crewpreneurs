import Head from "next/head";
import Hero from "@/components/Hero";
import BusinessCard from "@/components/BusinessCard";
import AboutSection from "@/components/AboutSection";
import GoalsSection from "@/components/GoalsSection";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Crewpreneurs Landing</title>
        <meta
          name="description"
          content="A collective of builders helping brands grow and scale"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <Hero />
        <BusinessCard />
        <AboutSection />
        <GoalsSection />
        <TeamSection />
        <GallerySection />
        <Footer />
      </main>
    </>
  );
}
