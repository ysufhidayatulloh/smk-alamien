/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

const footerContent = {
  about: {
    logo: "/images/FooterLogo-img.png",
    description:
      "Situs resmi SMK Al-Amien Kota Kediri, Dengan adanya website ini dapat mempermudah mengakses informasi terkait SMK Al-Amien Kota Kediri",
    cta: {},
    footerLink: [
      {
        heading: "Company",
        links: [
          {
            href: "#_",
            label: "Home Page",
          },
          {
            href: "#_",
            label: "Informasi Berita",
          },
        ],
      },
      {
        heading: "Resources",
        links: [
          {
            href: "#_",
            label: "Support",
          },
          {
            href: "#_",
            label: "Terms & Conditions",
          },
          {
            href: "#_",
            label: "Privacy Policy",
          },
        ],
      },
    ],
    contact: "Contact Us",
    descriptionContact:
      "Kunjungi Media Sosial kami, atau hubungi kami  jika ada sesuatu yang akan di tanyakan. Terima kasih ",
    address: {
      facebook: "Smk Al Amien Kdr",
      instagram: "smkalamienkediri",
      youtube: "SMK AL AMIEN KEDIRI",
      street: "Jl. Ngasinan Raya No.18 Rejomulyo Kota Kediri",
    },
  },
  copyright: {
    labelOne: "Copyright 2024.",
    labelTwo: "by smkalamien.dev All rights reserved",
  },
};

const Footer = () => {
  return (
    <footer
      // id="footer"
      role="contentinfo"
      className="py-20 bg-primary font-bodyFont text-secondary font-medium"
    >
      <div className="container px-4 mx-auto">
        <div className="block lg:flex gap-20 mb-10 pb-10">
          <div className="w-full lg:w-3/12 mb-10 lg:mb-0">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src={footerContent.about.logo}
                width={180}
                height={60}
                alt="img-smkalamien"
              />
            </Link>
            <p className="leading-relaxed mb-4">
              {footerContent.about.description}
            </p>
          </div>
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <div className="grid grid-cols-2 gap-10">
              {footerContent.footerLink?.map((footerLink, idx) => {
                <h3 className="font-semibold text-secondary mb-5">
                  {footerContent.footerLink.heading}
                  <ul className="p-0 m-0">
                    {links.map((links, idx) => {
                      <li className="mb-3">
                        <link
                          href={links.href}
                          className="group flex items-center duration-300 transition-all ease-in-out hover:text-solitude"
                        >
                          <span>{links.label}</span>
                          <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                            <BiChevronRight className="text-xl" />
                          </span>
                        </link>
                      </li>;
                    })}
                  </ul>
                </h3>;
              })}
            </div>
          </div>
          <div className="w-4/12"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
