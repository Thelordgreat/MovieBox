import { useQuery } from "react-query";

const Hero = () => {
  async function fetchMoviesBackdrops() {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=92d1c24af06d39fe229fa775cef035c2`
    );
    const data = await res.json();
    return data;
  }

  const { data, isLoading, isError, error } = useQuery(
    "all-properties",
    fetchMoviesBackdrops
  );

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const backDrops = data?.results[14];

  console.log(backDrops, "hbhjsbcjhdlqkejdkkqjdl;ql;d");

  return (
    <>
      {/* {backDrops.map((item) => ( */}
      <section
        //key={item.id}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${backDrops.backdrop_path})`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
          width: `100%`,
          height: `650px`,
        }}
      >
        <div className="container">
          <div className="w-full h-[650px] flex items-center text-white">
            <div className="w-[90%] md:w-[60%] xl:w-[35%]">
              <h2 className="text-5xl mb-4 font-bold">
                John Wick 3 : Parabellum
              </h2>
              <p className="font-medium text-[14px]">
                John Wick is on the run after killing a member of the
                international assassins guild, and with a $14 million price tag
                on his head, he is the target of hit men and women everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
