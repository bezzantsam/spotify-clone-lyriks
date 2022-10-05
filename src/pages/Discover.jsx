import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

const Discover = () => {
  console.log(genres);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-between w-full mt-4 mb-10 sm:flex-row">
        <h2 className="text-3xl font-bold text-left text-white">Discover</h2>
        <select></select>
      </div>
    </div>
  );
};

export default Discover;
