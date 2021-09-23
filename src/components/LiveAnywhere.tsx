import Image from "next/image";

type LiveDataProps = {
  liveData: LiveData[];
};

export type LiveData = {
  img: string;
  title: string;
};

export default function LiveAnywhere({ liveData }: LiveDataProps): JSX.Element {
  console.log(liveData);
  return (
    <section>
      <h2 className="text-2xl font-semibold py-8">Live Anywhere</h2>

      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        {liveData?.map(({ img, title }) => {
          return (
            <div
              className="cursor-pointer hover:scale-105
          transform transition duration-300 ease-out"
              key={title}
            >
              <div className="relative h-80 w-80">
                <Image className="rounded-xl" src={img} layout="fill" />
              </div>
              <h3 className="text-lg mt-3">{title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
