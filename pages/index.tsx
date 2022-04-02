import type { NextPage } from "next";
import Head from "next/head";
import HeroSection from "../components/organism/HeroSection";
import WorkSection from "../components/organism/WorkSection";
import AboutSection from "../components/organism/AboutSection";
import ContactSection from "../components/organism/ContactSection";
import Footer from "../components/molecules/Footer/";
import styled from "styled-components";
import Navbar from "../components/molecules/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dimas | Full Stack Developer</title>
        <meta
          name="description"
          content="Personal portofolio of Dimas Abiyoga"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </Main>
      <Footer />
    </>
  );
};

export default Home;

const Main = styled.main`
  z-index: 5;
  overflow-x: hidden;
`;
