/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const testimonialContent = {
  heading: {
    headingSubTitle: "Students Quotes",
    headingTitle: "Dengarkan Apa Kata siswaa Kami",
    description:
      "Dari kutipan yang mengharukan hingga ulasan yang cemerlang, suara-suara ini mencerminkan kepercayaan dan keyakinan yang diberikan siswa kepada kami. Biarkan kata-kata mereka berbicara banyak tentang pengalaman luar biasa.",
  },
  testimonials: [
    {
      img: "/images/ImageTestiimony-Img1.jpg",
      name: "Students Person 1",
      titleRole: "TKJ - Kelas XI",
      Testimony:
        "Pendidikan merupakan tiket menuju masa depan. Hari besok dimiliki oleh mereka yang mempersiapkan dirinya sejak hari ini. Ayo SMK bisa!!",
    },
    {
      img: "/images/ImageTestimony-Img2.jpg",
      name: "Student Person 2",
      titleRole: "TKJ - Kelas X",
      Testimony:
        "Mempelajari software dan hardware komputer memang susah-susah gampang, namun kamu harus bersikeras untuk menguasai nya demi mendapatkan keterampilan dan pengetahuan yang mempuni dengan masa depanmu nanti!",
    },
    {
      img: "/images/ImageTestimony-Img3.jpg",
      name: "Student Person 3",
      titleRole: "TKR - Kelas XI",
      Testimony:
        "Jangan pernah minder untuk melakukan praktek dan mencoba hal-hal baru terkait dengan inovasi di bidang mesin. Karena harapan terbaik dari bangsa ini adalah kalian yang menciptakan inovasi terbaru untuk kesejahteraan masyarakat!",
    },
  ],
};

const Testimony = () => {
  return (
    <section id="quote" className="py-20 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-4/12 lg:pr-24 relative mb-10 lg:mb-0 font-bodyFont">
            {/* <div className="relative lg:w-4/12 lg:pr-24 mb-10 lg:mb-0"> */}
            {testimonialContent.heading.headingSubTitle && (
              <span className="inline-block py-0.5 z-10 pl-3 text-primary font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:2/3 before:bg-solitude before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
                {testimonialContent.heading.headingSubTitle}
              </span>
            )}
            {testimonialContent.heading.headingTitle && (
              <h2 className="text-primary text-2xl lg:text-4xl font-bold mb-5">
                {testimonialContent.heading.headingTitle}
              </h2>
            )}

            {testimonialContent.heading.description && (
              <p className="text-primary font-medium leading-relaxed mb-10">
                {testimonialContent.heading.description}
              </p>
            )}
          </div>
          <div className="lg:w-8/12 ">
            <div className="font-bodyFont md:flex w-full space-x-0 md:space-x-6 items-end">
              <div className="md:w-6/12 md-6 md:mb-0">
                {testimonialContent.testimonials.map((testimonial, idx) => {
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
                            src={testimonial.img}
                            width={579}
                            height={720}
                            className="object-cover h-14 w-14 rounded-full"
                          />
                          {/* <span className="absolute bottom-0-right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Image src={/images/}/>
                        </span> */}
                        </div>
                        <div className="leading-3">
                          {testimonial.name && (
                            <strong className="block text-primary text-lg">
                              {testimonial.name}
                            </strong>
                          )}
                          {testimonial.titleRole && (
                            <span className="text-sm">
                              {testimonial.titleRole}
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <blockquote>“{testimonial.Testimony}”</blockquote>
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
                          src={testimonialContent.testimonials[2].img}
                          width={579}
                          height={720}
                          className="object-cover h-14 w-14 rounded-full"
                          alt="smk-alamien"
                        />
                        {/* <span className="absolute bottom-o-right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center "></span> */}
                      </div>
                      <div className="leading-3">
                        {testimonialContent.testimonials[2].name && (
                          <strong className="block text-primary text-lg">
                            {testimonialContent.testimonials[2].name}
                          </strong>
                        )}
                        {testimonialContent.testimonials[2].titleRole && (
                          <span className="text-sm">
                            {testimonialContent.testimonials[2].titleRole}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <blockquote>
                        “{testimonialContent.testimonials[2].Testimony}”
                      </blockquote>
                    </div>
                  </div>
                  <div className="gap-2 w-16 h-16 hidden md:block bg-lightGreen rounded-full md-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
