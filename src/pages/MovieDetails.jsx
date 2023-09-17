import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import home from "../assets/Home.svg";
import projector from "../assets/projector.svg";
import tv from "../assets/tv.svg";
import calendar from "../assets/Calendar.svg";
import { HiOutlineLogout } from "react-icons/hi";
import { useQuery } from "react-query";

const MovieDetails = () => {
  async function fetchMovieDetails() {
    const url = window.location.href;

    // To match and extract the numeric part from the URL
    const idMatch = url.match(/\/movies\/(\d+)/);

    if (!idMatch) {
      console.error("Movie ID not found in URL.");
      return null;
    }

    const id = idMatch[1]; // Extract the numeric part from the matched result

    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=92d1c24af06d39fe229fa775cef035c2`
    );
    const data = await res.json();
    return data;
  }

  const { data, isLoading, isError, error } = useQuery(
    "featured-movies",
    fetchMovieDetails
  );

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const poster = `https://image.tmdb.org/t/p/w500${data.poster_path}`;

  return (
    <section className="w-screen h-screen flex flex-row overflow-hidden">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="w-full lg:w-[calc(100vw-226px)] p-8 h-[100vh] overflow-scroll mx-auto max-w-[1200px]">
        <div
          className="w-full h-[450px] border rounded-3xl"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}
        ></div>

        <div className="grid lg:grid-cols-4 gap-5">
          <div className="col-span-3">
            <div className="flex flex-col  gap-3 my-4">
              <div className="text-xl text-[#404040] font-semibold flex flex-col lg:flex-row gap-4">
                <span data-testid="movie-title">{data.original_title} •</span>
                <div className="flex items-center gap-2">
                  <span data-testid="movie-release-date">
                    {data.release_date}
                  </span>
                  <span>• PG-13 • 2h 10m</span>
                </div>
              </div>
              <div>
                <span className="border text-[15px] text-[#B91C1C] px-4 rounded-2xl">
                  Action
                </span>
                <span className="border text-[15px] text-[#B91C1C] px-4 rounded-2xl">
                  Drama
                </span>
              </div>
            </div>

            <p
              className="mb-6 text-[18px] text-[#333333]"
              data-testid="movie-overview"
            >
              {data.overview}
            </p>

            <p className="mb-6 text-[14px] lg:text-[18px]">
              Runtime :{" "}
              <span className="text-[#B91C1C]" data-testid="movie-runtime">
                {data.runtime}
              </span>
            </p>

            <p className="mb-6 text-[14px] lg:text-[18px]">
              Writers :{" "}
              <span className="text-[#B91C1C]">
                Jim Cash, Jack Epps Jr, Peter Craig
              </span>
            </p>

            <p className="text-[14px] lg:text-[18px]">
              Stars :{" "}
              <span className="text-[#B91C1C]">
                Tom Cruise, Jennifer Connelly, Miles Teller
              </span>
            </p>

            <div className="w-full lg:h-[55px] rounded-xl overflow-hidden border my-6 flex flex-col lg:flex-row lg:items-center">
              <div className="bg-[#B91C1C] h-full lg:w-[35%] rounded-xl flex items-center justify-center text-[#fff] lg:text-[20px]">
                Top rated movie #65
              </div>

              <div className="px-4 h-full flex flex-1 border justify-center lg:justify-start items-center lg:text-[20px] text-[#333333]">
                Awards 9 nominations
              </div>
            </div>
          </div>

          <div className="col-span-3 lg:col-span-1 flex flex-col">
            <div className="flex justify-end py-4 text-[20px] font-medium">
              <span>8.5 | 350k</span>
            </div>
            <button className="w-full h-[50px] bg-[#BE123C] text-[#fff] rounded-xl my-2">
              See Showtimes
            </button>
            <button className="w-full h-[50px] border border-[#BE123C] text-[#333] bg-[#f8e7ec] rounded-xl">
              More watch options
            </button>

            <div className="w-full overflow-hidden rounded-lg grid grid-cols-3 gap-2 mt-4 flex-1 border">
              <img src={poster} alt="" className="h-full" />
              <img src={poster} alt="" className="h-full" />
              <img src={poster} alt="" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Sidebar = () => {
  return (
    <nav className="w-[226px] border rounded-r-[3rem] h-screen min-h-screen bg-[#ffffff] flex flex-col">
      <div className="flex items-center gap-4 px-4 py-12">
        <img src={logo} alt="logo" width={50} />
        <span className="text-2xl font-bold">MovieBox</span>
      </div>

      <ul>
        {sidebarLinks.map((link) => (
          <Link to={link.route} key={link.id}>
            <li
              className={
                link.title === "Movie"
                  ? `flex items-center gap-4 px-4 py-6 mb-4 bg-[#f8e7ec] border-r-4 border-[#BD123C]`
                  : `flex items-center gap-4 px-4 py-6 mb-4`
              }
            >
              <img src={link.icon} alt="icon" />
              {link.title}
            </li>
          </Link>
        ))}
      </ul>

      <div className="w-full p-4">
        <div className="border border-[#BE123CB2] px-4 pb-4 pt-8 bg-[#FCF5F7] flex flex-col gap-3 rounded-3xl">
          <span className="text-[16px] font-semibold text-[#333333CC]">
            Play movie quizes and earn free tickets
          </span>
          <span className="text-[12px] text-[#666666] font-medium">
            50k people are playing now
          </span>

          <div className="flex justify-center mt-2">
            <button className="text-[#BE123C] bg-[#BE123C33] text-[12px] px-8 py-2 rounded-3xl">
              Start playing
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 justify-center mt-6 text-[#666666]">
          <HiOutlineLogout fontSize={25} />
          <span className="font-semibold text-[20px]">Log Out</span>
        </div>
      </div>
    </nav>
  );
};

const sidebarLinks = [
  {
    id: 1,
    title: "Home",
    icon: home,
    route: "/",
  },
  {
    id: 2,
    title: "Movie",
    icon: projector,
    route: "/",
  },
  {
    id: 3,
    title: "TV series",
    icon: tv,
    route: "#",
  },
  {
    id: 4,
    title: "Upcoming",
    icon: calendar,
    route: "#",
  },
];

export default MovieDetails;
