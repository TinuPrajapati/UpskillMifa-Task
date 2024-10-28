import {Logo} from "../../assets/index"
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="w-full h-16 flex bg-slate-400 px-10 py-2 gap-14">
            <img src={Logo} alt="Shoes Logo" className="rounded-lg" />

            <nav className="flex h-full items-center gap-8 text-white text-xl font-semibold">
                <Link to="/" className="hover:text-black">Home</Link>
                <p className="hover:text-black">Categories</p>
                <p className="hover:text-black">About Us</p>
            </nav>
        </header>
    )
}

export default Header;