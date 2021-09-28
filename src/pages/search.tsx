import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { format } from "date-fns";
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
import { api } from "services/api";
import InfoCard from "components/InfoCard";

export type SearchData = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long?: number;
  lat?: number;
};

type SearchProps = {
  searchResults: SearchData[];
};

export default function search({ searchResults }: SearchProps) {
  const router = useRouter();

  const { location, startDate, endDate, numberOfGuests } = router.query;

  const formattedStartDate = format(new Date(String(startDate)), "dd MMMM yy");
  const formattedEndDate = format(new Date(String(endDate)), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuests}`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numberOfGuests}{" "}
            {Number(numberOfGuests) > 1 ? "guests" : "guest"}
          </p>

          <h1 className="text-3xl font-semibold mt-2">
            Stays in {capitalizeFirstLetter(location)}
          </h1>

          <div
            className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800
          whitespace-nowrap"
          >
            <p className="button">Cancellation Fexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item) => (
              <InfoCard
                key={item.title}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: searchResults } = await api("isz");

  return {
    props: {
      searchResults,
    },
  };
};
