import Image from "next/image";

type ExploreNearbyProps = {
  exploreData?: ExploreData[];
};

export type ExploreData = {
  img: string;
  location: string;
  distance: string;
};

export default function ExploreNearby({
  exploreData,
}: ExploreNearbyProps): JSX.Element {
  return (
    <>
      <section className="pt-6">
        <h2 className="text-2xl font-semibold">Explore Nearby</h2>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData?.map(({ img, location, distance }) => {
          return (
            <div
              key={location}
              className="flex items-center m-2 mt-5 
          space-x-4 rounded-xl cursor-pointer
          hover:bg-gray-100 hover:scale-105 transition transform duration-200
          ease-out"
            >
              <div className="relative h-16 w-16">
                <Image
                  className="rounded-lg"
                  src={img}
                  alt={location}
                  layout="fill"
                />
              </div>

              <div>
                <h2>{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
