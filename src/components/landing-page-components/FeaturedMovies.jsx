// import { useState, useEffect } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { useQuery } from "react-query";
import PropTypes from "prop-types";
import { MdOutlineFavorite } from "react-icons/md";
import IMDB from "../../assets/IMDB-logo.svg";
import fruit from "../../assets/fruit.svg";
import { useNavigate } from "react-router-dom";

// const apiKey = process.env.REACT_APP_API_KEY;

const FeaturedMovies = () => {
  async function fetchMovies() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=92d1c24af06d39fe229fa775cef035c2`
    );
    const data = await res.json();
    return data;
  }

  const { data, isLoading, isError, error } = useQuery(
    "featured-movies",
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
          {data?.results?.slice(0, 10).map((item, index) => (
            <MovieCard
              key={index}
              bg_image={item.poster_path}
              title={item.title}
              rating={item.vote_average}
              popularity={item.popularity}
              released_year={item.release_date}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const MovieCard = ({
  bg_image,
  title,
  rating,
  popularity,
  released_year,
  id,
}) => {
  const navigate = useNavigate();

  // const [like, setLike] = useState("#ffffff");

  // const toggleFavouritesIcon = () => {
  //   const newColor = like === "red" ? "#fff" : "red";
  //   setLike(newColor);
  //   // Update the localStorage value to persist the state
  //   localStorage?.setItem("like", newColor);
  // };

  const numberFromEndpoint = popularity;
  const roundedDownNumber = Math.floor(numberFromEndpoint);

  // useEffect(() => {
  //   // When the component mounts, check if there's a like value in localStorage
  //   const storedLike = localStorage.getItem("like");
  //   if (storedLike) {
  //     setLike(storedLike);
  //   }
  // }, []);

  const getSlug = () => {
    navigate(`/movies/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="w-[97%] sm:w-[250px] xl:w-[270px] cursor-pointer"
      data-testid="movie-card"
      onClick={() => getSlug(id)}
    >
      <div
        className="w-full h-[450px] sm:h-[370px] p-2 flex justify-end items-start"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${bg_image})`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
        }}
        data-testid="movie-poster"
      >
        <div
          className={`text-[#fff] bg-[#F3F4F680] p-2 w-fit rounded-[50%] cursor-pointer`}
          // onClick={toggleFavouritesIcon}
        >
          <MdOutlineFavorite fontSize={25} />
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <span className="text-[#9CA3AF] text-[14px] font-bold">
          USA, <span data-testid="movie-release-date">{released_year}</span>
        </span>
        <span
          className="text-[18px] font-bold text-[#111827] truncate cursor-pointer"
          data-testid="movie-title"
        >
          {title}
        </span>
        <div className="flex items-center justify-between text-[14px]">
          <div className="flex items-center gap-2 ">
            <img src={IMDB} alt="logo" />
            <span>{rating}/10</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={fruit} alt="fruit" />
            <span>{roundedDownNumber}</span>
          </div>
        </div>
        <span className="text-[#9CA3AF] text-[14px] font-bold">
          Action, Adventure, Horror
        </span>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  bg_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  popularity: PropTypes?.number.isRequired,
  released_year: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FeaturedMovies;
