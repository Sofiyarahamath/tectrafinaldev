"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/services", hasDropdown: false},
    { name: "Industries", href: "#" },
    { name: "Products", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Floating Glassmorphic Container */}
        <div className="backdrop-blur-xl bg-black/80 border border-white/10 rounded-full px-6 py-2.5 flex items-center justify-between shadow-2xl transition-all duration-300">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/tectralogo.svg"
              alt="Tectra Technologies"
              width={180}
              height={28}
              priority
              className="h-7 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-x-6 text-[14px] font-normal leading-[20px] text-[#FFF]">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    className="flex items-center gap-1 hover:text-white transition-colors py-2 focus:outline-none cursor-pointer"
                  >
                    {link.name}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors py-2 block"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.hasDropdown && servicesDropdownOpen && (
                  <div
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 rounded-2xl bg-neutral-900/95 backdrop-blur-xl border border-white/10 p-2 shadow-xl flex flex-col gap-1 z-50"
                  >
                    <Link
                      href="#"
                      className="px-4 py-2 text-xs rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all"
                    >
                      Custom Software Dev
                    </Link>
                    <Link
                      href="#"
                      className="px-4 py-2 text-xs rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all"
                    >
                      UI/UX Design
                    </Link>
                    <Link
                      href="#"
                      className="px-4 py-2 text-xs rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all"
                    >
                      Digital Marketing
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:block shrink-0">
            <Link
              href="#book-call"
              className="bg-white hover:bg-neutral-200 text-[#000] text-[14px] font-normal leading-[20px] px-5 py-2.5 rounded-full transition-all duration-200 shadow-md inline-block hover:scale-102"
            >
              Book a Strategy Call
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 rounded-3xl bg-neutral-950/95 backdrop-blur-2xl border border-white/10 p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                        className="flex items-center justify-between text-white/80 hover:text-white py-1.5 text-sm font-medium w-full text-left"
                      >
                        {link.name}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            servicesDropdownOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {servicesDropdownOpen && (
                        <div className="pl-4 mt-1 flex flex-col gap-2 border-l border-white/10">
                          <Link href="#" className="text-white/60 hover:text-white py-1 text-xs">
                            Custom Software Dev
                          </Link>
                          <Link href="#" className="text-white/60 hover:text-white py-1 text-xs">
                            UI/UX Design
                          </Link>
                          <Link href="#" className="text-white/60 hover:text-white py-1 text-xs">
                            Digital Marketing
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white py-1.5 block text-sm font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="pt-4 border-t border-white/10">
              <Link
                href="#book-call"
                className="w-full bg-white hover:bg-neutral-200 text-black text-center text-sm font-semibold py-3 rounded-full transition-all duration-200 inline-block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
