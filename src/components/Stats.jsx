import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const statContent = {
  stats: [
    {
      number: "99.8%",
      label: "Pembelajaran ",
    },
    {
      number: "200+",
      label: "Peserta Didik",
    },
    {
      number: "6.9",
      label: "Rating Sekolahan",
    },
  ],
  getStarted: {
    heading: "Bergabung Bersama Kami Di SMK Al-Amien.",
    description:
      "Dengan Pengajar Standar Nasional Pendidikan Dalam Bidang Masing-masing.",
    img: "/images/StatsImage-img.png",
    cta: {
      cta_href: "https://s.id/PPDBSMKAAM24-25",
      cta_target: "_blank",
      cta_label: "Klik Di Sini!! Dan Daftar Sekarang!!",
    },
  },
};

const Stats = () => {
  return (
    <section className="pt-20 pb-10">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center space-x-0 font-bodyFont">
          <div className=" w-full lg:w-7/12 mb-20 lg:mb-0">
            <div className="grid grid-cols-3">
              {statContent.stats.map((stat, idx) => (
                <div className="text-center lg:text-left" key={stat.label}>
                  <strong className="text-primary text-4xl xl:text-[52px] font-bold block leading-tight">
                    {stat.number}
                  </strong>
                  <span className="font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <div className="bg-secondary py-10 px-7 lg:px-10 !pr-28 md:!pr-32 lg:!pr-40 rounded-lg relative">
              {/* {statContent.getStarted.img && (
                <Image
                  src={statContent.getStarted.img}
                  width={86}
                  height={225}
                  alt="img-smkalamien"
                  className="absolude right-0 lg:right-6 -top-14 w-24"
                />
              )} */}

              {statContent.getStarted.heading && (
                <h3 className="text-primary font-bold text-xl mb-3">
                  {statContent.getStarted.heading}
                </h3>
              )}

              {statContent.getStarted.description && (
                <p className="text-primary text-md mb-5">
                  {statContent.getStarted.description}
                </p>
              )}

              {statContent.getStarted.cta.cta_label && (
                <Link
                  href={statContent.getStarted.cta.cta_href}
                  className="flex spaxce-x-2 outline-none items-center font-semibold text-primary group"
                >
                  <span>{statContent.getStarted.cta.cta_label}</span>
                  <span className="w-6 h-6 rounded-ful bg-lightGreen text-white inline-flex items-center justify-center duration-300 transition-all ease-in-out group-hover:bg-solitude">
                    <BiChevronRight className="text-lg" />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
