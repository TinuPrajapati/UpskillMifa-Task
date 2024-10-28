import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-14 flex justify-between items-center px-14 bg-sky-500 text-white">
      <div>
        <NavLink to="/" className="text-2xl font-bold">
          UpSkill Mifa
        </NavLink>
      </div>
      <nav className="w-60 flex justify-evenly items-center h-full text-lg font-semibold">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <div className="w-40 flex justify-evenly items-center gap-2 h-full text-lg font-semibold">
        <NavLink
          to="/signup"
          className="bg-white text-black w-[50%] text-center rounded-[6px] active:scale-95 duration-200"
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/login"
          className="bg-white text-black w-[50%] text-center rounded-[6px] active:scale-95 duration-200"
        >
          Login
        </NavLink>
      </div>
    </header>
  );
}
