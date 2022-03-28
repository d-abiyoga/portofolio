import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/molecules/Hero";
import Layout from "../components/molecules/Layout/";
import WorkSection from "../components/molecules/WorkSection";
import AboutSection from "../components/molecules/AboutSection";
import ContactSection from "../components/molecules/ContactSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dimas | Front End Developer</title>
        <meta
          name="description"
          content="Personal portofolio of Dimas Abiyoga"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout home>
        <Hero />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export default Home;
