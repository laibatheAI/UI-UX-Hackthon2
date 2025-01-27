
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Pages() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="relative">
      <ul className="flex space-x-4">
        <li className="relative">
          <button 
            onClick={toggleDropdown} 
            className="text-[#0D0E43]"
          >
            Pages
          </button>

          {dropdownOpen && (
            <div className="absolute p-2 mt-1 lg:mt-3 text-white bg-[#FB2E86] shadow-xl rounded-md z-10">
              <div className="block lg:px-5 lg:py-3">
                <Link href="/about">About</Link>
              </div>
              <div className="block lg:px-5 lg:py-3">
                <Link href="/login">Login</Link>
              </div>
              <div className="block lg:px-5 lg:py-3">
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}


