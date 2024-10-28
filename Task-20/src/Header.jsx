function Header(){
    return (
        <header className="w-full h-16 flex items-center pl-28 gap-16 bg-sky-500 text-white">
            <div>
                <h1 className="text-2xl font-bold font-serif">Shoes Hub</h1>
            </div>
            
            <ul className="flex items-center gap-10 ">
                <li className="hover:scale-125 transition">Home</li>
                <li className="hover:scale-125 transition">Categories</li>
                <li className="hover:scale-125 transition">About Us</li>
            </ul>
        </header>
    )
};

export default Header;