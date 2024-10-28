import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full h-24 flex justify-between items-center pl-10 pr-16 bg-gray-600 text-white">
      <h2>&#169; 2024 Upskill Mifa All right reserved</h2>
      <Link
          to="/signup"
          className="bg-white text-black py-3 px-4 rounded-md font-semibold text-lg duration-200 active:scale-90"
        >
          Register Here
        </Link>
    </footer>
  );
}
