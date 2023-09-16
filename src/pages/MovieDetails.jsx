import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import home from "../assets/Home.svg";
import projector from "../assets/projector.svg";
import tv from "../assets/tv.svg";
import calendar from "../assets/Calendar.svg";
import { HiOutlineLogout } from "react-icons/hi";

const MovieDetails = () => {
  return (
    <section className="w-screen h-screen flex flex-row overflow-hidden">
      <div>
        <Sidebar />
      </div>

      <div className="w-[calc(100vw-226px)] p-8 h-[100vh] overflow-scroll">
        Movie Details
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
          <Link to="#" key={link.id}>
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
  },
  {
    id: 2,
    title: "Movie",
    icon: projector,
  },
  {
    id: 3,
    title: "TV series",
    icon: tv,
  },
  {
    id: 4,
    title: "Upcoming",
    icon: calendar,
  },
];

export default MovieDetails;
