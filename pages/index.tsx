import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "../components/organism/HeroSection";
import Layout from "../components/molecules/Layout";
import WorkSection from "../components/organism/WorkSection";
import AboutSection from "../components/organism/AboutSection";
import ContactSection from "../components/organism/ContactSection";
import Footer from "../components/molecules/Footer/";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>Dimas | Front End Developer</title>
        <meta
          name="description"
          content="Personal portofolio of Dimas Abiyoga"
        />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout home>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
