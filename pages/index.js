import Head from "next/head";
import Hero from "/components/sections/Hero";
import ContentText from "../components/sections/ContentText";
import ContentImage from "../components/sections/ContentImage";

export default function Home() {
  return (
    <div>

      <Head>
        <title>Planet Caravans</title>
        <meta name="planet caravans frontend" content="task from evensix for marvinoka4" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

          <Hero heading="50's Americana" message="Paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus sed tempus molestie sapien." />


          <ContentText subheading="Why so Popular?" heading="Hand made with unrivaled quality. It’s no surprise we’re the market leaders." text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus sed tempus molestie sapien. Luctus habitasse tincidunt at gravida imperdiet scelerisque." text2="Elementum quis nibh risus suspendisse blandit tortor. Quis est tempus molestie sapien." />


          <ContentImage />

      </main>

    </div>
  )
}
