"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo and Title */}
                <div className="logo-title">
                    <Image className="profileimg" width={50} height={30} src="/images/logo.png" alt='image'></Image>
                </div>

                {/* Navbar */}
                <nav className={`navbar ${isOpen ? 'navbar-open' : ''}`}>
                    <Link href="/" className="nav-link">

                        Home
                    </Link>
                    <Link href="/pages/about" className="nav-link">

                        About
                    </Link>
                    <Link href="/pages/work" className="nav-link">

                        Work
                    </Link>
                    <Link href="/pages/contact" className="nav-link">

                        Contact
                    </Link>
                </nav>

                {/* Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    className="hamburger-button"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>
        </header>
    );
};

export default Header;
