"use client";
import React, { useRef, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { activity1, activity2, activity3 } from "../../public/utils";

const activityContent = {
  heading: {
    headingSubTitle: "Activity",
    headingTitle: "Potret Kegiatan SMK",
    descrition:
      "Di sekolah kami, kegiatan latihan PBB, pembukaan MPLS, dan workshop senantiasa diadakan dengan penuh semangat dan antusiasme, menciptakan suasana yang dinamis dan membangkitkan semangat kebersamaan serta kreativitas di antara siswa-siswi kami.",
  },
};

const Activity = () => {
  return (
    <section
      id="activity"
      className="py-24 max-w-container max-auto lgl:px-20 bg-secondary"
    >
      <div className="lg:w-5/12  mb-10 lg:mb-0 font-bodyFont">
        {activityContent.heading.headingSubTitle && (
          <span className="inline-block py-0.5 z-10 pl-3 text-primary font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:2/3 before:bg-solitude before:left-0 before:top-0 before:bottom-0 before:-z-10">
            {activityContent.heading.headingSubTitle}
          </span>
        )}

        {activityContent.heading.headingTitle && (
          <h2 className="text-primary text 2xl lg:text-4xl font-bold mb-5">
            {activityContent.heading.headingTitle}
          </h2>
        )}

        {activityContent.heading.descrition && (
          <p className="text-primary leading-relaxed font-medium">
            {activityContent.heading.descrition}
          </p>
        )}
      </div>
      <div className="flex flex-col items-center justify-between w-full mt-10 gap-28">
        {/* Activity One */}
        <div className="flex flex-col items-center justify-between w-full mt-10 gap-28">
          <div className="flex flex-col gap-6 xl:flex-row">
            <a
              className="relative w-full h-auto xl:w-1/2 group"
              // href="https://helloworld-app.vercel.app/"
              // target="_blank"
            >
              <div>
                <Image
                  className="object-contain w-full h-full rounded-md"
                  src={activity1}
                  alt="smk-alamien"
                />
              </div>
            </a>
            <div className="z-10 flex flex-col items-end w-full gap-6 text-right xl:w-1/2 lgl:justify-between xl:-ml-16">
              <p className="text-medium tracking-wide font-bodyFont text-primary">
                Event Photos
              </p>
              <h5 className="text-2xl font-bold font-bodyFont text-primary">
                Kunjungan Ke UNISKA
              </h5>
              <p className="bg-primary font-bodyFont text-medium text-secondary md:text-base p-2 md:p-6 rounded-md">
                Kunjungan kami ke kampus UNISKA adalah pengalaman yang
                menginspirasi dan memperluas wawasan siswa-siswa kami tentang
                dunia pendidikan tinggi, memberikan gambaran yang jelas tentang
                beragam program studi dan peluang yang tersedia, serta mendorong
                mereka untuk mengejar impian akademik mereka dengan tekad yang
                lebih kuat.
              </p>
              <ul className="flex gap-2 text-medium tracking-wide md:text-medium font-bodyFont wd:gap-5 justify-betwen text-primary">
                <li>Workshop</li>
                <li>SMK Al-Amien</li>
                <li>Kampus UNISKA</li>
              </ul>
              {/* <div className="flex gap-4 text-2xl">
                <a
                  className="duration-300 hover:text-textGreen"
                  href="https://github.com/ysufhidayatulloh/helloworld-app"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="duration-300 hover:text-textGreen"
                  href="https://helloworld-app.vercel.app/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        {/* Activity Two */}
        <div className="flex flex-col gap-6 xl:flex-row-reverse">
          <a
            className="relative w-full h-auto xl:w-1/2 group"
            // href="https://helloworld-app.vercel.app/"
            // target="_blank"
          >
            <div>
              <Image
                className="object-contain w-full h-full rounded-md"
                src={activity2}
                alt="smk-alamien"
              />
            </div>
          </a>
          <div className="z-10 flex flex-col items-end w-full gap-6 text-right xl:w-1/2 lgl:justify-between ">
            <p className="text-medium tracking-wide font-bodyFont text-primary">
              Event Photos
            </p>
            <h5 className="text-2xl font-bold text-primary">
              Latihan Gerak Jalan
            </h5>
            <p className="bg-primary text-medium text-secondary md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
              Kegiatan latihan PBB di sekolah kami menjadi momen penting yang
              memupuk kedisiplinan, kerjasama tim, dan kepemimpinan di antara
              siswa-siswi, mempersiapkan mereka untuk menjadi generasi yang
              tangguh dan bertanggung jawab di masa depan.
            </p>
            <ul className="flex gap-2 text-xs tracking-wide md:text-sm font-bodyFont wd:gap-5 justify-betwen text-primary">
              <li>HUT RI</li>
              <li>Gerak Jalan</li>
              <li>SMK Al-Amien</li>
            </ul>
            {/* <div className="flex gap-4 text-2xl">
              <a
                className="duration-300 hover:text-textGreen"
                href="https://github.com/ysufhidayatulloh/helloworld-app"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="duration-300 hover:text-textGreen"
                href="https://helloworld-app.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div> */}
          </div>
        </div>
        {/* Activity Tree */}
        <div className="flex flex-col items-center justify-between w-full mt-10 gap-28">
          <div className="flex flex-col gap-6 xl:flex-row">
            <a
              className="relative w-full h-auto xl:w-1/2 group"
              // href="https://helloworld-app.vercel.app/"
              // target="_blank"
            >
              <div>
                <Image
                  className="object-contain w-full h-full rounded-md"
                  src={activity3}
                  alt="smk-alamien"
                />
              </div>
            </a>
            <div className="z-10 flex flex-col items-end w-full gap-6 text-right xl:w-1/2 lgl:justify-between xl:-ml-16">
              <p className="text-medium tracking-wide font-bodyFont text-primary">
                Event Photos
              </p>
              <h5 className="text-2xl font-bodyFont font-bold text-primary">
                Bangunlah Jiwa Raga
              </h5>
              <p className="bg-primary font-bodyFont text-medium text-secondary md:text-base p-2 md:p-6 rounded-md">
                Setiap warga negara memiliki tanggung jawab untuk menjaga NKRI
                dengan berperan aktif dalam pembangunan, mematuhi hukum, dan
                menjunjung tinggi nilai-nilai persatuan, kesatuan, dan Bhinneka
                Tunggal Ika.
              </p>
              <ul className="flex gap-2 text-medium tracking-wide md:text-medium font-bodyFont wd:gap-5 justify-betwen text-primary">
                <li>NKRI</li>
                <li>Bangsa Indonesia</li>
                <li>SMK Al-Amien</li>
              </ul>
              {/* <div className="flex gap-4 text-2xl">
                <a
                  className="duration-300 hover:text-textGreen"
                  href="https://github.com/ysufhidayatulloh/helloworld-app"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="duration-300 hover:text-textGreen"
                  href="https://helloworld-app.vercel.app/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section id="activity" className="py-20  bg-secondary font-bodyFont">
    //   <div className="container px-5 max-auto">
    //     <div className="lg:flex justify-between items-center">
    //       <div className="lg:w-5/12  mb-10 lg:mb-0 font-bodyFont">
    //         {activityContent.heading.headingSubTitle && (
    //           <span className="inline-block py-0.5 z-50 pl-3 text-solitude font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-primary before:left-0 before:top-0 before:bottom-0 before:-z-10">
    //             {activityContent.heading.headingSubTitle}
    //           </span>
    //         )}

    //         {activityContent.heading.headingTitle && (
    //           <h2 className="text-primary text 2xl lg:text-4xl font-bold mb-5">
    //             {activityContent.heading.headingTitle}
    //           </h2>
    //         )}

    //         {activityContent.heading.descrition && (
    //           <p className="text-primary leading-relaxed font-medium">
    //             {activityContent.heading.descrition}
    //           </p>
    //         )}
    //       </div>
    //     </div>
    //     <div className="flex flex-col items-center justify-between w-full mt-10 gap-2">
    //       {/* Activity one */}
    //       <div className="flex flex-col items-center justify-between w-full mt-10 gap-2">
    //         <div className="flex flex-col gap-3 xl:flex-row">
    //           <a
    //             className="relative w-full h-auto xl:w-1/2 group"
    //             // href="https://helloworld-app.vercel.app/"
    //             // target="_blank"
    //           >
    //             <div>
    //               <Image
    //                 className="object-contain rounded-md"
    //                 width={85}
    //                 height={115}
    //                 src={activity1}
    //                 alt="smk-alamien"
    //               />
    //             </div>
    //           </a>
    //           <div className="z-10 flex flex-col items-end w-full gap-3 text-right xl:w-1/2 lgl:justify-between xl:-ml-16">
    //             <p className="text-medium tracking-wide font-bodyFont text-primary">
    //               Event Photos
    //             </p>
    //             <h5 className="text-2xl font-bold font-bodyFont text-primary">
    //               Kunjungan Ke UNISKA
    //             </h5>
    //             <p className="bg-primary text-medium text-secondary font-bodyFont md:text-base p-2 md:p-6 rounded-md">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
    //               iure magnam suscipit quidem labore a{" "}
    //               <span className="text-textGreen">0-auth</span> and then make
    //               the purchage using{" "}
    //               <span className="text-textGreen">stripe</span>.
    //             </p>
    //             <ul className="flex gap-2 text-xs tracking-wide md:text-sm font-titleFont wd:gap-5 justify-betwen text-primary">
    //               <li>Workshop</li>
    //               <li>SMK Al-Amien</li>
    //               <li>Kampus UNISKA</li>
    //             </ul>
    //             {/* <div className="flex gap-4 text-2xl">
    //                       <a
    //                       className="duration-300 hover:text-textGreen"
    //                       href="https://github.com/ysufhidayatulloh/helloworld-app"
    //                       target="_blank"
    //                       >
    //                           <TbBrandGithub />
    //                       </a>
    //                       <a
    //                       className="duration-300 hover:text-textGreen"
    //                       href="https://helloworld-app.vercel.app/"
    //                       target="_blank"
    //                       >
    //                           <RxOpenInNewWindow />
    //                       </a>
    //                   </div> */}
    //           </div>
    //         </div>
    //       </div>
    //       {/* Activity two */}
    //       <div className="flex flex-col gap-6 xl:flex-row-reverse">
    //         <a
    //           className="relative w-full h-auto xl:w-1/2 group"
    //           // href="https://helloworld-app.vercel.app/"
    //           // target="_blank"
    //         >
    //           <div>
    //             <Image
    //               className="object-contain w-full h-full rounded-md"
    //               width={85}
    //               height={115}
    //               src={activity2}
    //               alt="smk-alamien"
    //             />
    //           </div>
    //         </a>
    //         <div className="z-10 flex flex-col items-end w-full gap-3 text-right xl:w-1/2 lgl:justify-between">
    //           <p className="text-medium tracking-wide font-bodyFont text-primary">
    //             Event Photos
    //           </p>
    //           <h5 className="text-2xl font-bold font-bodyFont text-primary">
    //             Kunjungan Ke UNISKA
    //           </h5>
    //           <p className="bg-primary text-medium text-secondary font-bodyFont md:text-base p-2 md:p-6  xl:-mr-16 rounded-md">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
    //             iure magnam suscipit quidem labore a{" "}
    //             <span className="text-textGreen">0-auth</span> and then make the
    //             purchage using <span className="text-textGreen">stripe</span>.
    //           </p>
    //           <ul className="flex gap-2 text-xs tracking-wide md:text-sm font-titleFont wd:gap-5 justify-betwen text-primary">
    //             <li>Workshop</li>
    //             <li>SMK Al-Amien</li>
    //             <li>Kampus UNISKA</li>
    //           </ul>
    //           {/* <div className="flex gap-4 text-2xl">
    //                       <a
    //                       className="duration-300 hover:text-textGreen"
    //                       href="https://github.com/ysufhidayatulloh/helloworld-app"
    //                       target="_blank"
    //                       >
    //                           <TbBrandGithub />
    //                       </a>
    //                       <a
    //                       className="duration-300 hover:text-textGreen"
    //                       href="https://helloworld-app.vercel.app/"
    //                       target="_blank"
    //                       >
    //                           <RxOpenInNewWindow />
    //                       </a>
    //                   </div> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Activity;
