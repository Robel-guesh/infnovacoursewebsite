import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Logo.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white py-4 px-6 lg:px-12 flex items-center justify-between sticky top-0 z-50 border-b border-gray-100">
            <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="INFNOVA Logo" className="h-10 md:h-12 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-gray-600 font-medium">
                <Link to="/" className="hover:text-primary transition-colors">Courses</Link>
                <Link to="/about" className="hover:text-primary transition-colors">About</Link>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>

            <div className="flex items-center gap-4">
                <button className="text-primary font-semibold hidden sm:block">Sign In</button>
                <button
                    className="bg-primary text-white font-semibold hover:bg-accent transition-colors hidden lg:flex items-center justify-center rounded-[10px]"
                    style={{ width: '110.890625px', height: '40px' }}
                >
                    Enroll Now
                </button>

                <button
                    className="lg:hidden text-gray-600 hover:text-primary p-2 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 py-6 px-6 lg:hidden shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
                    <nav className="flex flex-col gap-6   text-gray-600 font-medium">
                        <div className="flex flex-col gap-6 text-gray-600 font-medium"> <Link
                            to="/"
                            className="hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Courses
                        </Link>
                            <Link
                                to="/about"
                                className="hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                className="hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                        <hr className="border-gray-100" />
                        <div className="flex flex-col items-center">

                            <button className="text-primary font-semibold text-left  transition-colors flex items-center justify-center rounded-[10px] w-full max-w-[500px]">Sign In</button>
                            <button
                                className="bg-primary text-white font-semibold hover:bg-accent transition-colors flex items-center justify-center rounded-[10px] w-full max-w-[500px]"
                                style={{ height: '44px' }}
                            >
                                Enroll Now
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
