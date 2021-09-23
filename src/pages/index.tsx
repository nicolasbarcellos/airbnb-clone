import Head from "next/head";
import Banner from "../components/Banner";
import ExploreNearby, { ExploreData } from "../components/ExploreNearby";

import Header from "../components/Header";

import { GetStaticProps } from "next";
import { api } from "../services/api";
import LiveAnywhere, { LiveData } from "components/LiveAnywhere";
import MainBanner from "components/MainBanner";
import Footer from "components/Footer";

type HomeProps = {
  exploreData: ExploreData[];
  liveData: LiveData[];
};

export default function Home({
  exploreData,
  liveData,
}: HomeProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Air bnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <ExploreNearby exploreData={exploreData} />
        <LiveAnywhere liveData={liveData} />
        <MainBanner
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: exploreData } = await api("pyp");

  const { data: liveData } = await api("zp1");

  return {
    props: {
      exploreData,
      liveData,
    },
    revalidate: 3600, // 1 hora
  };
};
