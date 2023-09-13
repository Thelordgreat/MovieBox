import { LiaAngleRightSolid } from "react-icons/lia";
import { useQuery } from "react-query";
import PropTypes from "prop-types";

// const apiKey = process.env.REACT_APP_API_KEY;

const FeaturedMovies = () => {
  async function fetchMovies() {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=92d1c24af06d39fe229fa775cef035c2`
    );
    const data = await res.json();
    return data;
  }

  const { data, isLoading, isError, error } = useQuery(
    "all-properties",
    fetchMovies
  );

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data?.results, "Here is the data");

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Movie</h2>

          <a href="#" className="text-[#BE123C] flex items-center gap-3">
            See More
            <LiaAngleRightSolid />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-[20px] lg:gap-[30px]">
          {data?.results.slice(0, 10).map((item, index) => (
            <MovieCard
              key={index}
              bg_image={item.poster_path}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const MovieCard = ({ bg_image, title }) => {
  return (
    <div className="w-[97%] sm:w-[250px]">
      <div
        className="w-full h-[370px]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${bg_image})`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      ></div>
      <div className="flex flex-col gap-2 pt-4">
        <span>USA, 2016 - Current</span>
        <span>{title}</span>
        <span>Action, Adventure, Horror</span>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  bg_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FeaturedMovies;
