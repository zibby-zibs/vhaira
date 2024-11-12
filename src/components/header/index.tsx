"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerMenu from "../global/hanburger-menu";
import useMediaQuery from "@/hooks/use-media-query";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { FaBagShopping } from "react-icons/fa6";

const navLinks = [
  { href: "/bridal", label: "Bridal" },
  { href: "/courses", label: "Courses" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
];

const Navbar = () => {
  const { isMobile, isDesktop, isTablet } = useMediaQuery();
  const pathname = usePathname();

  return (
    <header className="px-6 py-4 relative z-40">
      <nav className="flex items-center justify-between container">
        <div className="flex items-center gap-5">
          {(isMobile || isTablet) && (
            <Sheet>
              <SheetTrigger>
                <HamburgerMenu />
              </SheetTrigger>
              <SheetContent className="bg-foreground">
                <SheetTitle className="sr-only">Vhaira</SheetTitle>
                <div className="nav-links relative flex flex-col gap-8 justify-center items-center mt-20 ">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`nav-link py-2 text-white font-medium text-xl uppercase hover:text-primary ${
                        pathname === link.href ? "text-primary active-link" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          )}
          <Link href="/">
            <Image
              src={"/vhaira-logo.png"}
              alt="Vhaira Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>

        <div className="nav-links relative lg:flex gap-8 items-center hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link py-2 font-medium text-lg uppercase hover:text-primary ${
                pathname === link.href ? "text-primary active-link" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          {isDesktop && (
            <Sheet>
              <SheetTrigger>
                <HamburgerMenu />
              </SheetTrigger>
              <SheetContent className="bg-foreground">
                <SheetTitle className=" sr-only">Vhaira</SheetTitle>
                <article className="mt-20">
                  <h1 className="text-primary font-oreloRegular text-6xl uppercase">
                    Vhaira
                  </h1>

                  <p className="font-noto text-[15px] font-light mt-5 leading-7">
                    Hairstyling is an art and each strand is my brushstroke.
                    Beyond being a brand, Vhaira is a feeling, an identity, a
                    class, a statement. You are a queen and here, we cater
                    uniquely to each Queen&apos;s request because we know you
                    are special.
                  </p>
                </article>
              </SheetContent>
            </Sheet>
          )}

          <Button className="bg-transparent hover:bg-transparent h-auto w-auto p-0">
            <FaBagShopping className="!h-6 !w-6" size={24} />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
