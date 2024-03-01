/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const studyContent = {
  heading: {
    headingSubTitle: "Student Program",
    headingTitle: "Program Studi SMK Al-Amien",
    description:
      "SMK Al-Amien adalah tempat yang penuh dengan peluang dan inovasi! Dengan tiga jurusan unggulan yang menarik hati, kami menawarkan keahlian dan pengetahuan yang sangat berharga dalam Teknik Komputer dan Jaringan (TKJ), Teknik Kendaraan Ringan (TKR), serta Teknik Sepeda Motor (TSM). Di sini, siswa-siswi kami diajak untuk menjelajahi dunia teknologi, menguasai keterampilan praktis, dan merajut masa depan yang cerah dalam bidang yang mereka pilih. Bergabunglah dengan kami di SMK kami dan bersiaplah untuk meraih kesuksesan di dunia nyata! ",
  },
  studyals: [
    {
      img: "/images/ImageStudy-Img1.jpg",
      name: "Teknik Komputer Jaringan",
      description:
        "Jurusan Teknik Komputer dan Jaringan (TKJ) di SMK kami adalah wahana eksplorasi bagi para calon ahli teknologi masa depan! Di sini, siswa-siswi kami tidak hanya mempelajari dasar-dasar komputer dan jaringan, tetapi juga merancang, mengembangkan, dan memecahkan tantangan teknologi yang kompleks. Dengan fasilitas terkini dan pendekatan pembelajaran yang interaktif, kami membentuk para siswa menjadi ahli di bidangnya, siap untuk menghadapi tantangan dunia digital yang terus berkembang.",
    },
    {
      img: "/images/ImageStudy-Img2.jpg",
      name: "Teknik Kendaraan Ringan",
      description:
        "Jurusan Teknik Kendaraan Ringan (TKR) di SMK kami adalah tempat di mana kecintaan pada teknologi otomotif berkembang menjadi keahlian yang tangguh! Di sini, siswa-siswi kami belajar tidak hanya memperbaiki mesin dan sistem kendaraan, tetapi juga menguasai teknologi terbaru dalam dunia otomotif. Dengan laboratorium yang lengkap dan pendekatan praktis yang mendalam, kami membekali para siswa untuk menjadi teknisi yang terampil dan berbakat, siap untuk mengemudi menuju kesuksesan dalam industri otomotif global.",
    },
    {
      img: "/images/ImageStudy-Img3.jpg",
      name: "Teknik Sepeda Motor",
      description:
        "Jurusan Teknik Sepeda Motor (TSM) di SMK kami adalah tempat di mana passion untuk meracik kecepatan dan keandalan berkembang menjadi keahlian yang mengagumkan! Di sini, siswa-siswi kami tidak hanya belajar mengenai mekanika dan teknologi mesin sepeda motor, tetapi juga merancang, memodifikasi, dan memperbaiki kendaraan dengan presisi yang tinggi. Dengan fasilitas workshop yang modern dan kurikulum yang berorientasi pada industri, kami mempersiapkan para siswa untuk menjadi teknisi sepeda motor yang handal dan berbakat, siap untuk merajut jejaknya dalam industri otomotif yang dinamis.",
    },
  ],
};

const Studyprogram = () => {
  return (
    <section id="programstudy" className="py-20 bg-primary">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-4/12 lg:pr-24 relative mb-10 lg:mb-2 font-bodyFont">
            {/* <div className="relative lg:w-4/12 lg:pr-24 mb-10 lg:mb-0"> */}
            {studyContent.heading.headingSubTitle && (
              <span className="inline-block py-0.5 z-10 pl-3 text-secondary font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:2/3  before:bg-lightGreen before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
                {studyContent.heading.headingSubTitle}
              </span>
            )}
            {studyContent.heading.headingTitle && (
              <h2 className="text-secondary text-2xl lg:text-4xl font-bold mb-5">
                {studyContent.heading.headingTitle}
              </h2>
            )}

            {studyContent.heading.description && (
              <p className="text-secondary font-medium leading-relaxed mb-10">
                {studyContent.heading.description}
              </p>
            )}
          </div>
          <div className="lg:w-8/12 ">
            <div className="font-bodyFont md:flex w-full space-x-0 md:space-x-6 items-end">
              <div className="md:w-6/12 md-6 md:mb-0">
                {studyContent.studyals.map((studyals, idx) => {
                  if (idx == 2) return null;
                  return (
                    <div
                      className={`bg-solitude p-7 rounded-lg w-full ${
                        idx == 1 ? "" : "mb-6"
                      }`}
                    >
                      <div className="flex space-x-4 items-center mb-4">
                        <div className="relative">
                          <Image
                            src={studyals.img}
                            width={579}
                            height={720}
                            alt="smk-alamien"
                            className="object-cover h-150 w-65 rounded-lg"
                          />
                          {/* <span className="absolute bottom-0-right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Image src={/images/}/>
                        </span> */}
                        </div>
                        <div className="leading-3">
                          {studyals.name && (
                            <strong className="block text-primary text-lg">
                              {studyals.name}
                            </strong>
                          )}
                          {/* {testimonial.titleRole && (
                            <span className="text-sm">
                              {testimonial.titleRole}
                            </span>
                          )} */}
                        </div>
                      </div>
                      <div>
                        <blockquote>“{studyals.description}”</blockquote>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="md:w-6/12">
                <div>
                  <div className="gap-2 w-16 h-16 hidden md:block bg-lightGreen rounded-full md-6"></div>
                  <div className="font-bodyFont bg-solitude p-7 rounded-lg w-full md-6">
                    <div className="flex space-x-4 items-center mb-4">
                      <div className="relative">
                        <Image
                          src={studyContent.studyals[2].img}
                          width={579}
                          height={720}
                          className="object-cover h-150 w-65 rounded-lg"
                          alt="smk-alamien"
                        />
                        {/* <span className="absolute bottom-o-right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center "></span> */}
                      </div>
                      <div className="leading-3">
                        {studyContent.studyals[2].name && (
                          <strong className="block text-primary text-lg">
                            {studyContent.studyals[2].name}
                          </strong>
                        )}
                      </div>
                    </div>
                    <div>
                      <blockquote>
                        “{studyContent.studyals[2].description}”
                      </blockquote>
                    </div>
                  </div>
                  {/* <div className="gap-2 w-16 h-16 hidden md:block bg-lightGreen rounded-full md-6"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studyprogram;
