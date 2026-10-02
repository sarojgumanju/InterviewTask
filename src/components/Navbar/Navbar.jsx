import { Link } from "react-router-dom";


function Navbar() {
    return <nav className="bg-gray-200 flex justify-between items-center px-4 py-2">
        <div className="font-bold text-2xl">
            <Link to="/">Saroj</Link>
        </div>
        <div className="flex space-x-20 font-bold ">
            <Link to="/" className="hover:text-red-500">Home</Link>
            <Link to="/about" className="hover:text-red-500">About</Link>
        </div>
    </nav>
}

export default Navbar