import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TbAlienFilled, TbArrowsDiagonal2 } from "react-icons/tb";

const aboutContent = {
  text: {
    headingSubTitle: "About Us.",
    headingTitle: "VISI & MISI SMK Al - Amien",
    descriptionVisi:
      "Terwujudnya SMK Al-Amien kediri menjadi lembaga pendidikan dan pelatihhan kejuruan di lingkungan pondok pesantren yang mampu menghasilkan lulusan yang profesional, beriman, dan bertaqwa untuk memenuhi pasar kerja.",
    descriptionMisi: [
      {
        title:
          "Mengembangkan SMK Al-Amien menjadi sekolah terpadu dengan program pondok pesantren",
      },
      {
        title:
          " Meningkatkan kualitas sarana dan prasarana dan pelatihan pendidikan",
      },
      {
        title: " Meningkatkan kualitas sumber daya manusia",
      },
      {
        title:
          " Memberikan lulusan yang terampil, profesional, memiliki kompetensi kehidupan sesuai dengan kebutuhan lapangan kerja serta dapat mengembangkan diri secara berkelanjutan untuk meningkatkan taraf kehidupan",
      },
    ],
  },
  images: {
    img1: "/images/ImageAbout-Img1.jpg",
    img2: "/images/ImageAbout-Img2.jpg",
    img3: "/images/ImageAbout-Img3.jpg",
  },
  experience: {
    year: "25+",
    label: "Graduation Year",
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="py-28 bg-primary overflow-x-hidden font-bodyFont"
    >
      <div className="container px-4 mx-auto">
        <div className="lg:flex space-x-2 justify-between">
          <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-lightGreen before:-bottom-20">
            <div className="flex gap-2">
              <div className="flex flex-col space-y-2">
                <div>
                  <Image
                    src={aboutContent.images.img1}
                    width={495}
                    height={495}
                    className="object-cover h-full w-full rounded-lg"
                    alt="img-smkalamien"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <div className="w-4/12 flex">
                    <div className="ml-auto">
                      <div className="bg-secondary w-10 h-10 lg:w-24 rounded-2xl rounded-bl-[200px]"></div>
                    </div>
                  </div>
                  <div className="w-6/12">
                    <Image
                      src={aboutContent.images.img3}
                      width={495}
                      height={495}
                      className="object-cover w-full h-full rounded-lg"
                      alt="img-smkalamien"
                    />
                  </div>
                </div>
              </div>
              {/* end col */}
              <div className="mt-auto">
                <div className="flex-col gap-2">
                  <div>
                    <div className=" bg-secondary w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px]"></div>

                    <div>
                      <Image
                        src={aboutContent.images.img2}
                        width={495}
                        height={495}
                        className="object-cover w-full h-full rounded-lg shadow-2xl"
                        alt="img-smkalamien"
                      />
                    </div>
                    {/* {aboutContent.experience.label && (
                      <div>
                        <div className="gap-2 p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-3">
                          <strong className="block font-bold text-primary text-xl lg:text-5xl">
                            {aboutContent.experience.year}
                          </strong>
                          <span>{aboutContent.experience.label}</span>
                        </div>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 relative z-10">
            {aboutContent.text.headingSubTitle && (
              <span className="inline-block py-0.5 z-50 pl-3 text-secondary font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:2/3 before:bg-lightGreen before:left-0 before:top-0 before:bottom-0 before:-z-10">
                {aboutContent.text.headingSubTitle}
              </span>
            )}

            {aboutContent.text.headingTitle && (
              <h2 className="text-secondary text-2xl lg:text-4xl font-bold mb-5">
                {aboutContent.text.headingTitle}
              </h2>
            )}

            {aboutContent.text.descriptionVisi && (
              <p className="text-solitude text-medium leading-relaxed mb-10">
                {aboutContent.text.descriptionVisi}
              </p>
            )}

            <ul className="grid grid-cols-1 sm:grid-cols-1 w-full md:gap-5 mb-10 text-solitude text-medium">
              {aboutContent.text.descriptionMisi.map((feature, idx) => (
                <li
                  className="flex flex-grow items-center space-x-3"
                  key={feature.title}
                >
                  <TbArrowsDiagonal2 className="text-secondary text-xl" />
                  <span>{feature.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
