"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { logo } from "../../public/utils";
import { pamflate } from "../../public/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import Home from "../app/page";

const Navigation = () => {
  // const handleScroll = (
  //   e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  // ) => {
  //   e.preventDefault();
  //   setShowMenu(false);
  //   const href = e.currentTarget.href;
  //   const targetId = href.replace(/.*\#/, "");
  //   const elem = document.getElementById(targetId);
  //   elem?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  //   // update the class name of the clicked link
  //   const links = document.querySelectorAll(".nav-link");
  //   links.forEach((link) => {
  //     link.classList.remove("active");
  //   });
  //   e.currentTarget.classList.add("active");
  // };

  // function handlClick(e: any) {
  //   if (e.target.contains(ref.current)) {
  //     setShowMenu(false);
  //   }
  // }

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[11vh] sticky top-0 z-50 bg-primary px-10 ">
      <div className="max-w-container h-full max-auto py-6 font-bodyFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image className="w-14" src={logo} alt="logo_navbar" />
        </motion.div>

        <div className="items-center justify-between hidden mdl:inline-flex gap-5 w-[75%]">
          <ul className="flex items-center justify-between text[14px] gap-7">
            <Link
              href=""
              className="flex items-center gap-1 font-medium text-solitude hover:text-secondary cursor-pointer duration-300 nav-ink"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                Home
              </motion.li>
            </Link>

            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-solitude hover:text-secondary cursor-pointer duration-300 nav-ink"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className="text-secondary">01.</span>
                About Us
              </motion.li>
            </Link>

            <Link
              href="#programstudy"
              className="flex items-center gap-1 font-medium text-solitude hover:text-secondary cursor-pointer duration-300 nav-ink"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className="text-secondary">02.</span>
                Study Program
              </motion.li>
            </Link>

            <Link
              href="#activity"
              className="flex items-center gap-1 font-medium text-solitude hover:text-secondary cursor-pointer duration-300 nav-ink"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.4 }}
              >
                <span className="text-secondary">03.</span>
                Activities
              </motion.li>
            </Link>

            <Link
              href="#quote"
              className="flex items-center gap-1 font-medium text-solitude hover:text-secondary cursor-pointer duration-300 nav-ink"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                <span className="text-secondary">04.</span>
                Quotes
              </motion.li>
            </Link>
          </ul>
          <a href="./Pamflate.pdf" target="_blank">
            <motion.button
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-4 py-1.5 rounded-md text-secondary  text-[14px] border border-secondary hover:bg-lightGreen duration-300 W-[3%]"
            >
              Lihat Brosur
            </motion.button>
          </a>
        </div>
        {/* Small Icon Section */}
        <div
          // onClick={()=> setShowMenu(true)}
          className="flex flex-col items-center justify-between w-6 h-5 overflow-hidden text-4xl cursor-pointer mdl:hidden text-textGreen group"
        >
          <span className="w-full h-[2px] bg-secondary inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-secondary inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-secondary inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
